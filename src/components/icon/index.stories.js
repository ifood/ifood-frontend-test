import React from 'react'

import Icon from '.'
import Svgs from '../svgs'

export default {
  title: 'Icon',
  decorators: [(storyFn) => (
    <>
      <Svgs />
      {storyFn()}
    </>
  )]
}

export const Default = () => <Icon name='icon-de' />

export const Multiple = () => (
  <>
    <Icon name='icon-pt' />
    <Icon name='icon-au' />
    <Icon name='icon-ru' />
    <Icon name='icon-en_us' />
    <Icon name='icon-br' />
  </>
)
