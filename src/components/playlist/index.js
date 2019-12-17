import React from 'react'
import { useSelector } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton'

export function Playlist() {
  const { playlists, error } = useSelector(state => state.playlists)

  console.log('Playlists', playlists)
  console.log('Playlists Error', error)

  if (error) {
    return (
      <div>
        <h3>{error.message}</h3>
      </div>
    )
  }

  return (
    <div className='playlist'>
      Playlists
      <Grid container>
        {(!playlists || !playlists.length
          ? Array.from(new Array(3))
          : playlists
        ).map((item, index) => (
          <Box
            key={item ? item.id : index}
            width={210}
            marginRight={0.5}
            my={5}
          >
            {item ? (
              <img
                style={{ width: 210, height: 118 }}
                alt={item.name}
                src={item.images[0].url}
              />
            ) : (
              <Skeleton variant='rect' width={210} height={118} />
            )}

            {item ? (
              <Box pr={2}>
                <a
                  href={item.external_urls.spotify}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Typography gutterBottom variant='body2'>
                    {item.name}
                  </Typography>
                </a>
                <Typography
                  display='block'
                  variant='caption'
                  color='textSecondary'
                >
                  {item.channel}
                </Typography>
                <Typography variant='caption' color='textSecondary'>
                  {`${item.views} • ${item.createdAt}`}
                </Typography>
              </Box>
            ) : (
              <Box pt={0.5}>
                <Skeleton />
                <Skeleton width='60%' />
              </Box>
            )}
          </Box>
        ))}
      </Grid>
    </div>
  )
}
