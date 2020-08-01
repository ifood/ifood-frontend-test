import React from 'react'
import { render, screen, waitForElement } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Theme from '../../styles/theme'
import Button from '.'

describe('<Button />', () => {
  it('Should render the component', async () => {
    render(
      <ThemeProvider theme={Theme}>
        <Button>Aplicar Filtros</Button>
      </ThemeProvider>
    )
    const button = await waitForElement(() => screen.getByText('Aplicar Filtros'))
    expect(button).toBeDefined()
  })
})
