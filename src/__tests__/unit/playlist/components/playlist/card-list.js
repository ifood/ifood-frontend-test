import * as React from 'react'
import { render, screen } from '@testing-library/react'

import CardList from 'playlist/components/playlist/card-list'
import playlistMock from 'shared/test/mocks/fixtures/playlist.json'

test('It should mount the component.', async () => {
  render(<CardList data={playlistMock} />)

  expect(screen.queryAllByRole('list-item')).toHaveLength(
    playlistMock.playlists.items.length
  )
  playlistMock.playlists.items.forEach((data) => {
    expect(
      screen.getByRole('list-item', { name: data.name })
    ).toBeInTheDocument()
  })
})

test('It should mount the component no data', async () => {
  render(<CardList data={[]} />)

  expect(screen.getByText(/nada encontrado/i)).toBeInTheDocument()
})
