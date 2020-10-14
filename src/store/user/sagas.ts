import {
  put, takeLatest, call
} from 'typed-redux-saga';
import { ActionType, getType } from 'typesafe-actions';
import Github from 'services/github';
import * as actions from './actions';

function* userRequestSaga({ payload }: ActionType<typeof actions.user.request>) {
  const {
    name
  } = payload;

  if (!name) {
    yield put(
      actions.user.failure(['Para pesquisar, precisamos de um nome! Digite um nome por favor.'])
    )
    return
  }

  try {
    const request = yield* call(Github.userInfo, { name });
    const githubUser = request.data

    yield* put(actions.user.success(githubUser));
  } catch (error) {
    yield* put(actions.user.failure(['Ocorreu um erro ao buscar usuário']));
  }
}

export default function* () {
  yield takeLatest(getType(actions.user.request), userRequestSaga);
}
