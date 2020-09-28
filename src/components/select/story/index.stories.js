import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, array } from '@storybook/addon-knobs'

import { Select } from '../index'

import { colors } from 'styles'

const stories = storiesOf('Select', module)
stories.addDecorator(withKnobs)

stories.add('Quantidade', () => {
  const options = array('options', [5, 10, 15, 20])
  const labelprop = text('title', 'Quantidade')
  return (
    <div
      style={{
        backgroundColor: `${colors.grayDark}`,
        width: '200px',
      }}
    >
      <Select
        options={options}
        label={labelprop}
        onChange={action('clicked')}
      />
    </div>
  )
})

stories.add('Página', () => {
  const labelprop = text('title', 'Página')
  const options = array('options', [1, 2, 3])
  return (
    <div
      style={{
        backgroundColor: `${colors.grayDark}`,
        width: '200px',
      }}
    >
      <Select
        options={options}
        label={labelprop}
        onChange={action('clicked')}
      />
    </div>
  )
})
