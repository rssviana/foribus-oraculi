import { createAsyncAction } from  'typesafe-actions'
import { Repository } from './types'

type UserReposRequest = { name: string }
type UserReposSuccess = Repository[];
type UserReposFailure = string[];

export const repos = createAsyncAction(
  '@repos/USER_REPO_REQUEST',
  '@repos/USER_REPO_SUCCESS',
  '@repos/USER_REPO_FAILURE',
)<UserReposRequest, UserReposSuccess, UserReposFailure>()
