const mapping: Record<string, string> = {
  businesses: 'business',
  'card-summaries': 'card_summary',
  notes: 'note',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
