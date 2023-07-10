import axios from 'axios';
import queryString from 'query-string';
import { CardSummaryInterface, CardSummaryGetQueryInterface } from 'interfaces/card-summary';
import { GetQueryInterface } from '../../interfaces';

export const getCardSummaries = async (query?: CardSummaryGetQueryInterface) => {
  const response = await axios.get(`/api/card-summaries${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createCardSummary = async (cardSummary: CardSummaryInterface) => {
  const response = await axios.post('/api/card-summaries', cardSummary);
  return response.data;
};

export const updateCardSummaryById = async (id: string, cardSummary: CardSummaryInterface) => {
  const response = await axios.put(`/api/card-summaries/${id}`, cardSummary);
  return response.data;
};

export const getCardSummaryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/card-summaries/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCardSummaryById = async (id: string) => {
  const response = await axios.delete(`/api/card-summaries/${id}`);
  return response.data;
};
