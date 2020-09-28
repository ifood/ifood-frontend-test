import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { DatePickerElement } from '../index'

import { colors } from 'styles'

storiesOf('DatePicker', module).add('default', () => (
  <div
    style={{
      backgroundColor: `${colors.grayDark}`,
      width: '200px',
    }}
  >
    <DatePickerElement onChange={action('clicked')} />
  </div>
))
