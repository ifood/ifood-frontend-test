import getErrorMessage from './index'

describe('getErrorMessage Function', () => {
  it('Should me able to crete a limit list', () => {
    const mockedError = {
      response: {
        status: 400,
        data: {
          error: {
            message: 'Thats a mocked error',
          },
        },
      },
    }
    expect(getErrorMessage(mockedError)).toEqual('Thats a mocked error')

    mockedError.response.status = 401
    expect(getErrorMessage(mockedError)).toEqual(
      'Your token is invalid, we will try to refresh it for you.'
    )

    expect(getErrorMessage()).toEqual('Oops! Something went wrong.')
    expect(getErrorMessage()).not.toEqual('Thats a mocked error')
  })
})
