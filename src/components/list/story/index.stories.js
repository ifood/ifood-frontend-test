import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import { List } from 'components/list'

import { colors } from 'styles'

const stories = storiesOf('List', module)
stories.addDecorator(withKnobs)

stories.add('default', () => {
  const title = text('title', 'locale')
  const values = [
    { id: 'locale', name: 'Brasil' },
    { id: 'locale', name: 'USA' },
    { id: 'locale', name: 'Russia' },
    { id: 'locale', name: 'Frace' },
    { id: 'locale', name: 'Portugal' },
  ]
  return (
    <div
      style={{
        backgroundColor: `${colors.grayDark}`,
        width: '200px',
      }}
    >
      <List title={title} values={values} onClick={action('clicked')} />
    </div>
  )
})
