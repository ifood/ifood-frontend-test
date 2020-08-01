import React from 'react'
import { ThemeProvider } from 'styled-components'
import { MdFilterList } from 'react-icons/md'

import Theme from '../../styles/theme'

import Button from '.'

export default {
  title: 'Button',
  decorators: [(storyFn) => (
    <ThemeProvider theme={Theme}>
      {storyFn()}
    </ThemeProvider>
  )]
}

const mockFunc = () => alert('handler click ok!')

export const DefaultWithText = () => <Button handleClick={mockFunc}>Click Me!</Button>

export const FilterWithIcon = () => <Button template='filter' handleClick={mockFunc}><MdFilterList size={22}/></Button>

export const withEmoji = () => <Button handleClick={mockFunc}>😀 😎 👍 💯</Button>
