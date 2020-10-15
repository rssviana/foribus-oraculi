import * as actions from './actions'
import { mockUser } from './mockUser'

describe('user / actions', () => {
  test('should request user', () => {
    const expectedActions = {
      type: '@user/USER_REQUEST',
      payload: {
        name: 'username'
      }
    }
    const { payload } = expectedActions
    const action = actions.user.request(payload)

    expect(action).toStrictEqual(expectedActions)
  })

  test('Should be success repositories way', () => {
    const action = actions.user.success(mockUser)

    expect(action).toStrictEqual({
      type: '@user/USER_SUCCESS',
      payload: mockUser
    })
  })

  test('Should be failure repositories way', () => {
    const action = actions.user.failure(['error message'])

    expect(action).toStrictEqual({
      type: '@user/USER_FAILURE',
      payload: ['error message']
    })
  })
})
