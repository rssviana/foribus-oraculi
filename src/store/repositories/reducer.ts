  
import { createReducer } from 'typesafe-actions';
import { uniq } from 'helpers';
import { ReposState, ReposActions } from './types';
import * as actions from './actions';

const initialState: ReposState = {
  data: [],
  messages: [],
  loading: false,
  error: false,
  success: false,
  updatedOn: 0,
};

const reducer = createReducer<ReposState, ReposActions>(initialState)
  .handleAction(actions.repos.request, (state) => ({
    ...state,
    loading: true,
    error: false,
    success: false,
    updatedOn: Date.now(),
  }))
  
  .handleAction(actions.repos.success, (state, { payload }) => ({
    ...state,
    data: uniq([...payload]),
    loading: false,
    error: false,
    success: true,
    updatedOn: Date.now(),
  }))

  .handleAction(actions.repos.failure, (state) => ({
    ...state,
    loading: false,
    error: true,
    success: false,
    updatedOn: Date.now(),
  }));

export default reducer;
