import React from 'react'
import { storiesOf } from '@storybook/react'
import PlaylistsCard from './PlaylistsCard'
import { cardList } from '../../../utils/testHelper'

export default storiesOf('Components | Organism/CardList', module)
  .add(
    'default',
    () => (
      <div style={{ width: '900px', margin: '30px' }}>
        <PlaylistsCard
          playlistsFiltered={cardList()}
          isFetching={false}
          error={null}
        />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [PlaylistsCard],
        text: `
          ~~~js
          <PlaylistsCard 
            playlistsFiltered={playlistsFiltered} 
            isFetching={isFetching}
            error={error}
          />
          ~~~
      `,
      },
    }
  )
  .add(
    'empty',
    () => (
      <div style={{ width: '900px', margin: '30px' }}>
        <PlaylistsCard playlistsFiltered={[]} isFetching={false} error={null} />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [PlaylistsCard],
        text: `
          ~~~js
          <PlaylistsCard 
            playlistsFiltered={[]} 
            isFetching={isFetching}
            error={error}
          />
          ~~~
      `,
      },
    }
  )
  .add(
    'with error',
    () => (
      <div style={{ width: '900px', margin: '30px' }}>
        <PlaylistsCard
          playlistsFiltered={[]}
          isFetching={false}
          error={'error'}
        />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [PlaylistsCard],
        text: `
          ~~~js
          <PlaylistsCard 
            playlistsFiltered={playlistsFiltered} 
            isFetching={isFetching}
            error={true}
          />
          ~~~
      `,
      },
    }
  )
  .add(
    'loading',
    () => (
      <div style={{ width: '900px', margin: '30px' }}>
        <PlaylistsCard
          playlistsFiltered={[]}
          isFetching={true}
          error={{ error: 'error' }}
        />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [PlaylistsCard],
        text: `
          ~~~js
          <PlaylistsCard 
            playlistsFiltered={playlistsFiltered} 
            isFetching={true}
            error={error}
          />
          ~~~
      `,
      },
    }
  )
