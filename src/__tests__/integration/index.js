import * as React from 'react'
import {
  render,
  screen,
  waitForAuthenticatingToFinish,
  waitForLoadingToFinish,
  waitForElementToBeRemoved
} from 'shared/test/setup'
import userEvent from '@testing-library/user-event'
import { setupServer } from 'msw/node'

import { App } from 'app'
import { handlers } from 'shared/test/mocks/handlers'
import playlistMock from 'shared/test/mocks/fixtures/playlist.json'

const server = setupServer(...handlers)

jest.mock('shared/ui/canvas', () => null)

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  window.localStorage.setItem('user', JSON.stringify({}))
})

afterAll(() => server.close())

test('It should mount the component.', async () => {
  await render(<App />)

  expect(screen.getByRole('main')).toBeInTheDocument()
  expect(screen.getByText(/listen/i)).toBeInTheDocument()

  expect(
    screen.getByText(
      /descubra como é ser um foodlover e faça parte da nossa revolução!/i
    )
  ).toBeInTheDocument()
  expect(
    screen.getByRole('button', { name: /saiba mais/i })
  ).toBeInTheDocument()
})

test('It should mount the with valid code param.', async () => {
  await render(<App />, { param: 'code=1234' })
  expect(screen.getByText(/autenticando/i)).toBeInTheDocument()

  await waitForAuthenticatingToFinish()

  expect(screen.queryByText(/autenticando/i)).not.toBeInTheDocument()
  expect(screen.getByText(/carregando/i)).toBeInTheDocument()

  await waitForLoadingToFinish()

  expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: /playlist/i, level: 2 })
  ).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /filtros/i })).toBeInTheDocument()
  expect(screen.getByRole('alert')).toBeInTheDocument()

  await waitForElementToBeRemoved(() => screen.getByRole('alert'))

  expect(window.location.pathname).toBe('/playlist')
  expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  expect(screen.queryAllByRole('list-item')).toHaveLength(
    playlistMock.playlists.items.length
  )
  playlistMock.playlists.items.forEach((data) => {
    expect(
      screen.getByRole('list-item', { name: data.name })
    ).toBeInTheDocument()
  })
})

test('It should redirect playlist with save user', async () => {
  await render(<App />, { login: true })

  expect(window.location.pathname).toBe('/playlist')
  expect(
    screen.getByRole('heading', { name: /playlist/i, level: 2 })
  ).toBeInTheDocument()
})

test('It should update location when submit filter form.', async () => {
  await render(<App />, { login: true })

  userEvent.click(screen.getByRole('button', { name: /filtros/i }))

  expect(screen.getByRole('dialog', { name: /filtros/i })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /buscar/i })).toBeInTheDocument()

  userEvent.type(screen.getByRole('spinbutton', { name: /página/i }), '1')
  userEvent.type(screen.getByRole('spinbutton', { name: /quantidade/i }), '1')
  userEvent.type(screen.getByLabelText(/data e horário/i), '2020-06-29')
  userEvent.selectOptions(
    screen.getByRole('combobox', { name: /locale/i }),
    'en_AU'
  )
  userEvent.selectOptions(screen.getByRole('combobox', { name: /país/i }), 'AU')
  userEvent.click(screen.getByRole('button', { name: /buscar/i }))

  expect(window.location.search).toBe(
    '?locale=en_AU&country=AU&timestamp=2020-06-29T00%3A00%3A00.000Z&limit=1&offset=1'
  )
})
