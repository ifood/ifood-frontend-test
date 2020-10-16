import * as React from 'react'
import { render, screen } from '@testing-library/react'

import { Welcome } from 'auth/components/welcome'

function empty() {
  console.log('oi')
}

test('It should mount the component.', async () => {
  render(<Welcome state="indle" handleOpenSpotifyAccountLogin={empty} />)

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
