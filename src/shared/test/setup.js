import {
  render as rtlRender,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Providers } from '../context'
import authoriseCodeMock from './mocks/fixtures/authorise-code.json'

const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(
    () => [
      ...screen.queryAllByLabelText(/carregando.../i),
      ...screen.queryAllByText(/carregando.../i)
    ],
    { timeout: 7000 }
  )

const waitForAuthenticatingToFinish = () =>
  waitForElementToBeRemoved(
    () => [
      ...screen.queryAllByLabelText(/autenticando/i),
      ...screen.queryAllByText(/autenticando/i)
    ],
    { timeout: 7000 }
  )

async function render(
  ui,
  { route = '/', param, login, ...renderOptions } = {}
) {
  if (param) {
    window.history.pushState({}, 'Test page', `${route}?${param}`)
  } else {
    window.history.pushState({}, 'Test page', `${route}`)
  }

  if (login) {
    const data = {
      accessToken: authoriseCodeMock.access_token,
      authCode: '123',
      accessTokenRefreshedAt: new Date().toISOString(),
      refreshToken: authoriseCodeMock.refresh_token,
      loggedInAt: new Date().toISOString()
    }
    window.localStorage.setItem('user', JSON.stringify(data))
  }

  const returnValue = {
    ...rtlRender(ui, {
      wrapper: Providers,
      ...renderOptions
    })
  }

  await waitForLoadingToFinish()

  return returnValue
}

export * from '@testing-library/react'
export {
  render,
  userEvent,
  waitForLoadingToFinish,
  waitForAuthenticatingToFinish
}
