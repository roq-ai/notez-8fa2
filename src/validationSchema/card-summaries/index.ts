import * as yup from 'yup';

export const cardSummaryValidationSchema = yup.object().shape({
  content: yup.string().required(),
  note_id: yup.string().nullable(),
});
