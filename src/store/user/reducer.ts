  
import { createReducer } from 'typesafe-actions';
import { uniq } from 'helpers';
import { UserState, UserActions } from './types';
import * as actions from './actions';

const initialState: UserState = {
  data: [],
  messages: [],
  loading: false,
  error: false,
  success: false,
  updatedOn: 0,
};

const reducer = createReducer<UserState, UserActions>(initialState)
  .handleAction(actions.user.request, (state) => ({
    ...state,
    loading: true,
    error: false,
    success: false,
    updatedOn: Date.now(),
  }))
  
  .handleAction(actions.user.success, (state, { payload }) => ({
    ...state,
    data: uniq([payload]),
    loading: false,
    error: false,
    success: true,
    updatedOn: Date.now(),
  }))

  .handleAction(actions.user.failure, (state, { payload }) => ({
    ...state,
    data: [],
    loading: false,
    error: true,
    success: false,
    updatedOn: Date.now(),
    messages: payload,
  }));

export default reducer;
