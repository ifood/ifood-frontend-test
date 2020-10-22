import React , { useState } from 'react'
import { Typography, makeStyles } from '@material-ui/core';
import { SearchByNameInput, PlaylistCard } from './components'
import { Loading } from '../../commons-components/loading'
import { BoxContainer } from '../../commons-components/boxContainer'


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

export const Playlist = ({playlists, message}) => {
  const classes = useStyles()
  const [search, setSearch] = useState('')

  const { items } = playlists

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
      {search && items[0] ?
        items.filter(item =>
          item.name.toLowerCase()
          .includes(search.toLocaleLowerCase()))
          .map(playlist => (
            <PlaylistCard
              key={playlist.name}
              playlist={playlist}
            />
            )):
        items[0] ?
          items.map((playlist) => (
            <PlaylistCard
              key={playlist.name}
              playlist={playlist}
            />
        )): <Loading />}
      </BoxContainer>
  </div>
  )
}
