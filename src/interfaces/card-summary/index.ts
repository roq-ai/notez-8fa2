import { NoteInterface } from 'interfaces/note';
import { GetQueryInterface } from 'interfaces';

export interface CardSummaryInterface {
  id?: string;
  content: string;
  note_id?: string;
  created_at?: any;
  updated_at?: any;

  note?: NoteInterface;
  _count?: {};
}

export interface CardSummaryGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  note_id?: string;
}
