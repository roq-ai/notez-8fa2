import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { cardSummaryValidationSchema } from 'validationSchema/card-summaries';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.card_summary
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getCardSummaryById();
    case 'PUT':
      return updateCardSummaryById();
    case 'DELETE':
      return deleteCardSummaryById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getCardSummaryById() {
    const data = await prisma.card_summary.findFirst(convertQueryToPrismaUtil(req.query, 'card_summary'));
    return res.status(200).json(data);
  }

  async function updateCardSummaryById() {
    await cardSummaryValidationSchema.validate(req.body);
    const data = await prisma.card_summary.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteCardSummaryById() {
    const data = await prisma.card_summary.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
