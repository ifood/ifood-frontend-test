import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { List } from 'components/list'

import { colors } from 'styles'

storiesOf('List', module).add('default', () => {
  const values = [
    { id: 'locale', name: 'locale', values: [{ value: 'pt_BR' }] },
    { id: 'locale', name: 'locale', values: [{ value: 'en_US' }] },
  ]
  return (
    <div
      style={{
        backgroundColor: `${colors.grayDark}`,
        width: '200px',
      }}
    >
      <List title='locale' values={values} onClick={action('clicked')} />
    </div>
  )
})
