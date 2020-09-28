import React from 'react'

import { storiesOf } from '@storybook/react'

import Title from 'components/title'

import { colors } from 'styles'

const stories = storiesOf('Title', module)

stories.add('default', () => (
  <div
    style={{
      backgroundColor: `${colors.grayDark}`,
      width: '200px',
    }}
  >
    <Title />
  </div>
))
