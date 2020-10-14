import {
  put, takeLatest, call
} from 'typed-redux-saga';
import { ActionType, getType } from 'typesafe-actions';
import Github from 'services/github';
import * as actions from './actions';

function* userReposRequestSaga({ payload }: ActionType<typeof actions.repos.request>) {
  const {
    name
  } = payload;

  if (!name) {
    yield put(
      actions.repos.failure(['Para pesquisar repositórios, precisamos de um nome! Digite um nome por favor.'])
    )
    return
  }

  try {
    const request = yield* call(Github.userRepos, { name });
    const githubUserRepos = request.data

    yield* put(actions.repos.success(githubUserRepos));
  } catch (error) {
    yield* put(actions.repos.failure(['Ocorreu um erro ao buscar repositórios do usuário']));
  }
}

export default function* () {
  yield takeLatest(getType(actions.repos.request), userReposRequestSaga);
}
