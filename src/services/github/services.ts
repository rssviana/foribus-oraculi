import api from 'services/api';
import { 
  UserInfoRequest,
  UserInfoResponse,
  UserRepoInfoRequest,
  UserRepoInfoResponse
 } from './types';

/**
 * Get github user public info
 *
 * @param req
 */
export function userInfo(req: UserInfoRequest) {
  const {
    name,
  } = req;

  const sufixURL = `/users/${name}`;

  return api.get<UserInfoResponse>(sufixURL);
}

/**
 * Get github user repos info
 *
 * @param req
 */
export function userRepos(req: UserRepoInfoRequest) {
    const {
      name,
    } = req;
  
    const sufixURL = `/users/${name}/repos`;
  
    return api.get<UserRepoInfoResponse>(sufixURL);
  }
  