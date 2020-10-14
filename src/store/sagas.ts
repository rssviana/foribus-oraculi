import { all, fork } from 'redux-saga/effects';

import userSagas from './user/sagas';
import userReposSagas from './repositories/sagas';

export default function* root() {
  yield all([fork(userSagas), fork(userReposSagas)]);
}
