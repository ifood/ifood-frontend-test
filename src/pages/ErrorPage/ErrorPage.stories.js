import React from 'react'
import { storiesOf } from '@storybook/react'
import ErrorPage from './ErrorPage'

export default storiesOf('Pages | ErrorPage', module).add(
  'default',
  () => <ErrorPage />,
  { info: { inline: true, header: false } }
)
