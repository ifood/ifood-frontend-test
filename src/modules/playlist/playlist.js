import React , { useState } from 'react'
import { object, string } from 'prop-types'
import { Typography, makeStyles } from '@material-ui/core';
import { SearchByNameInput, PlaylistCard } from './components'
import { Loading, BoxContainer } from '../../commonsComponents'

const useStyles = makeStyles({
  title: {
    fontSize: 33,
    textAlign: 'center',
    color: '#24AA7A',
    margin: 10,

  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

const propTypes = {
  playlists: object.isRequired,
  message: string.isRequired
}

export const Playlist = ({ playlists, message }) => {
  const classes = useStyles()
  const [search, setSearch] = useState('')

  const { items } = playlists
  const notNullItems = items.filter(item => !!item)

  return (
  <div>
      <div className={classes.titleContainer} >
        <SearchByNameInput
          setSearch={setSearch}
        />
        <Typography className={classes.title} component="h1">
          {message}
        </Typography>
      </div>
    <BoxContainer style={{margin: '10px'}}>
      {search && notNullItems ?
        notNullItems.filter(item =>
          item.name.toLowerCase()
          .includes(search.toLocaleLowerCase()))
          .map(playlist => (
            <PlaylistCard
              key={playlist.name}
              playlist={playlist}
            />
            )):
        notNullItems?
        notNullItems.map((playlist) => (
            <PlaylistCard
              key={playlist.name}
              playlist={playlist}
            />
        )): <Loading />}
      </BoxContainer>
  </div>
  )
}

Playlist.propTypes = propTypes
