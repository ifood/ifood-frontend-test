import React from 'react'
import { storiesOf } from '@storybook/react'
import { Image } from '.'

export default storiesOf('Components | Atom/Image', module)
  .add(
    'default',
    () => (
      <div style={{ width: '200px', height: '200px', margin: '30px' }}>
        <Image imgSrc="https://i.scdn.co/image/ab67706f0000000341d54d11fdbac4a1c55dc94b" />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [Image],
        text: `
          ~~~js
          <Image imgSrc={imgSrc} />
          ~~~
      `,
      },
    }
  )
  .add(
    'no image',
    () => (
      <div
        style={{
          width: '200px',
          height: '200px',
          background: 'black',
          margin: '30px',
        }}
      >
        <Image imgSrc="" />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [Image],
        text: `
          ~~~js
          <Image  />
          ~~~
      `,
      },
    }
  )
