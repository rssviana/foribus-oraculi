import * as actions from './actions'

describe('repositories / actions', () => {
  test('should request repositories', () => {
    const expectedActions = {
      type: '@repos/USER_REPO_REQUEST',
      payload: {
        name: 'username'
      }
    }
    const { payload } = expectedActions
    const action = actions.repos.request(payload)

    expect(action).toStrictEqual(expectedActions)
  })

  test('Should be success repositories way', () => {
    const action = actions.repos.success([])

    expect(action).toStrictEqual({
      type: '@repos/USER_REPO_SUCCESS',
      payload: []
    })
  })

  test('Should be failure repositories way', () => {
    const action = actions.repos.failure(['error message'])

    expect(action).toStrictEqual({
      type: '@repos/USER_REPO_FAILURE',
      payload: ['error message']
    })
  })
})
