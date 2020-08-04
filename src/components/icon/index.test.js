/* eslint-disable no-undef */
import React from 'react'
import { render, screen, waitForElement } from '@testing-library/react'

import Svgs from '../svgs'
import Icon from '.'

describe('<Icon />', () => {
  it('Should render the component', async () => {
    render(
      <>
        <Svgs />
        <Icon name='icon-pt'/>
      </>
    )

    const svg = await waitForElement(() => screen.getByTestId('svg'))
    expect(svg).toBeDefined()
  })
})
