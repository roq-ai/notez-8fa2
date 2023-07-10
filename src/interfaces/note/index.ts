import { CardSummaryInterface } from 'interfaces/card-summary';
import { BusinessInterface } from 'interfaces/business';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface NoteInterface {
  id?: string;
  content: string;
  business_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  card_summary?: CardSummaryInterface[];
  business?: BusinessInterface;
  user?: UserInterface;
  _count?: {
    card_summary?: number;
  };
}

export interface NoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  business_id?: string;
  user_id?: string;
}
