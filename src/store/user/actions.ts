import { createAsyncAction } from  'typesafe-actions'
import { User } from './types'

type UserRequest = { name: string }
type UserSuccess = User;
type UserFailure = string[];

export const user = createAsyncAction(
  '@user/USER_REQUEST',
  '@user/USER_SUCCESS',
  '@user/USER_FAILURE',
)<UserRequest, UserSuccess, UserFailure>()
