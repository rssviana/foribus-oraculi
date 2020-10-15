import repositoriesRESP from 'services/github/json/repos.json';
import reducer from './reducer';
import * as actions from './actions';

export const INITIAL_STATE = {
  data: [],
  messages: [],
  loading: false,
  error: false,
  success: false,
  updatedOn: 0,
};

describe('@store/repositories', () => {
  test('request repositories', () => {
    const action = actions.repos.request({
      name: 'rssviana',
    });
    const state = reducer(INITIAL_STATE, action);

    expect({ ...state, updatedOn: 0 }).toStrictEqual(
      {
        ...INITIAL_STATE,
        loading: true,
        success: false,
        error: false,
        messages: [],
      }
    )
  })

  test('success repositories response', () => {
    const fakeRESP = repositoriesRESP
    // @ts-ignore

    const action = actions.repos.success(fakeRESP)
    const state = reducer(INITIAL_STATE, action);

    expect({ ...state, updatedOn: 0 }).toStrictEqual({
      ...INITIAL_STATE,
      data: fakeRESP,
      loading: false,
      success: true,
      error: false,
      messages: [],
    });
  })

  test('should detect duplicated item normaly', () => {
    const fakeRESP = repositoriesRESP;
    // @ts-ignore

    const action = actions.repos.success([...fakeRESP, ...fakeRESP]);
    const state = reducer(INITIAL_STATE, action);
    expect({ ...state, updatedOn: 0 }).toStrictEqual({
      ...INITIAL_STATE,
      data: fakeRESP,
      loading: false,
      success: true,
      error: false,
      messages: [],
    });
  });

  test('failure repositories response', () => {
    const action = actions.repos.failure(['error test']);
    const state = reducer(INITIAL_STATE, action);
    expect({ ...state, updatedOn: 0 }).toStrictEqual({
      ...INITIAL_STATE,
      loading: false,
      success: false,
      error: true,
      messages: ['error test'],
    });
  });
})
