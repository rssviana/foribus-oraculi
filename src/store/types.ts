import { StateType } from 'typesafe-actions';
import reducers from './reducers';

export type AppState = StateType<typeof reducers>;

export interface DomainState<T = undefined> {
  data: T;
  messages: string[];
  loading: boolean;
  error: boolean;
  success: boolean;
  updatedOn: number;
}

export enum DomainActionsTypes {
  INIT = '@@INIT',
  RESET = '@@RESET',
  PERSIST = 'persist/PERSIST',
  REHYDRATE = 'persist/REHYDRATE',
}
