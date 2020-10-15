import api from 'services/api';

jest.unmock('axios');
jest.mock('services/toast');
jest.mock('services/github');

describe('@ services / api', () => {
  it('it should message error netwwork', async () => {
    // @ts-ignore
    expect(
      api.interceptors.response.handlers[0].rejected({
        response: {
          statusText: 'Network Error',
          data: { message: 'Network Error' },
        },
      }),
    )
      .rejects.toMatchObject({
        message: 'Network Error',
        data: { message: 'Network Error' },
      })
      .catch(() => 'foo');
  });
});
