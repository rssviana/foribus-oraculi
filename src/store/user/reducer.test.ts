import userRESP from 'services/github/json/user.json';
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

describe('@store/user', () => {
  test('request user', () => {
    const action = actions.user.request({
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

  test('success user response', () => {
    const fakeRESP = userRESP
    // @ts-ignore

    const action = actions.user.success(fakeRESP)
    const state = reducer(INITIAL_STATE, action);

    expect({ ...state, updatedOn: 0 }).toStrictEqual({
      ...INITIAL_STATE,
      data: [ fakeRESP ],
      loading: false,
      success: true,
      error: false,
      messages: [],
    });
  })

  test('failure user response', () => {
    const action = actions.user.failure(['error test']);
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
