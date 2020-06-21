import React, { ReactElement, memo, useMemo } from 'react'
import { PlaylistTrack } from '../../types'
import {
  TrackContainer,
  AlbumImageLink,
  AlbumImage,
  SongName,
  SongInfo,
  SongDuration
} from './styles'

interface SongTimeProps {
  track: PlaylistTrack;
}

function Track(props: SongTimeProps): ReactElement {
  const {
    track
  } = props

  const duration = useMemo(
    (): string => {
      const date = new Date(track.duration)
      return `${date.getMinutes()}:${date.getSeconds()}`
    },
    [track.duration]
  )

  return (
    <TrackContainer>
      <AlbumImageLink
        href={track.album.externalLinks?.spotify}
        rel="noopener noreferrer"
        target="_blank"
      >
        <AlbumImage
          width="50px"
          height="40px"
          src={track.album.images[0].url}
          alt={track.name}
        />
      </AlbumImageLink>
      <SongName>{track.name}</SongName>
      <SongInfo>{`${track.artists[0].name} • ${track.album.name}`}</SongInfo>
      <SongDuration>{duration}</SongDuration>
    </TrackContainer>
  )
}

export default memo(Track)
