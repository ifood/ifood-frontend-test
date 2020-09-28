import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Select } from '../index'

import { colors } from 'styles'

storiesOf('Select', module)
  .add('Quantidade', () => {
    const options = [5, 10, 15, 20]
    return (
      <div
        style={{
          backgroundColor: `${colors.grayDark}`,
          width: '200px',
        }}
      >
        <Select
          options={options}
          label='Quantidade'
          onChange={action('clicked')}
        />
      </div>
    )
  })
  .add('Página', () => {
    const options = [1, 2, 3]
    return (
      <div
        style={{
          backgroundColor: `${colors.grayDark}`,
          width: '200px',
        }}
      >
        <Select options={options} label='Página' onChange={action('clicked')} />
      </div>
    )
  })
