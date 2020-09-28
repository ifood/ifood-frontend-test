import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import { PlaylistElement } from '../index'

const stories = storiesOf('Playlist', module)
stories.addDecorator(withKnobs)

stories.add('default', () => {
  const title = text('title', 'Lofi')
  const description = text('description', 'Lofi playlist')

  return (
    <div
      style={{
        display: 'flex',
        background:
          'linear-gradient(to bottom, #414141 0%, #181818 100%), transparent',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        height: '1000px',
      }}
    >
      <PlaylistElement
        name={title}
        description={description}
        image='https://i.scdn.co/image/ab67706f00000003ef0e08f1723de0b35b639c93'
        onClick={action('clicked')}
        hide={true}
      />
    </div>
  )
})
