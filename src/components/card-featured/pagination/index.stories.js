import React from 'react'
import { ThemeProvider } from 'styled-components'

import Theme from '../../../styles/theme'

import Pagination from '.'

export default {
  title: 'Pagination',
  decorators: [(storyFn) => (
    <ThemeProvider theme={Theme}>
      {storyFn()}
    </ThemeProvider>
  )]
}

const mockFunc = () => alert('Handler Pagination ok!')

export const Default = () => <Pagination totalItems={20} limit={5} onSubmitPagination={mockFunc}/>
