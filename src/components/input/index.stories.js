import React from 'react'
import { ThemeProvider } from 'styled-components'

import Theme from '../../styles/theme'

import Input from '.'
import Svgs from '../svgs'

export default {
  title: 'Input',
  decorators: [(storyFn) => (
    <ThemeProvider theme={Theme}>
      <Svgs />
      {storyFn()}
    </ThemeProvider>
  )]
}

const mockFunc = (e) => console.log(e.target.value)

const mockInputProps = {
  id: 'story-book',
  type: 'text',
  defaultValue: 'Storybook',
  onChange: mockFunc
}

const mockInputPropsNumber = {
  ...mockInputProps,
  type: 'number',
  defaultValue: 1,
  min: 1,
  max: 10
}

export const Default = () => <Input props={mockInputProps}/>

export const NumberWithMinAndMax = () => <Input props={mockInputPropsNumber}/>
