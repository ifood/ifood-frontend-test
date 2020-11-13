import React from 'react'
import { storiesOf } from '@storybook/react'
import { Card } from '.'

const card = {
  link: 'https://open.spotify.com/playlist/37i9dQZF1DWTMYgB8TqtmR',
  imgSrc: 'https://i.scdn.co/image/ab67706f0000000341d54d11fdbac4a1c55dc94b',
  name: 'It Hits Sweden',
}

export default storiesOf('Components | Molecule/Card', module)
  .add('default', () => <Card {...card} />, {
    info: {
      inline: true,
      header: false,
      source: false,
      propTables: [Card],
      text: `
          ~~~js
          <Card 
            imgSrc={img} 
            link={link}
            name={name} 
          />
          ~~~
      `,
    },
  })
  .add(
    'title too long',
    () => (
      <Card
        {...card}
        name="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet iaculis finibus. Proin imperdiet venenatis cursus. Vestibulum ante"
      />
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [Card],
        text: `
          ~~~js
          <Card 
            imgSrc={img} 
            link={link}
            name={name} 
          />
          ~~~
      `,
      },
    }
  )
  .add('no image', () => <Card {...card} imgSrc={'pp'} />, {
    info: {
      inline: true,
      header: false,
      source: false,
      propTables: [Card],
      text: `
          ~~~js
          <Card link={link} name={name}  />
          ~~~
      `,
    },
  })
