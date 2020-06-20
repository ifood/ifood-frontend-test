import React, { ReactElement, memo } from 'react'
import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Link, Image } from '@spotifood/ui'
import { PlaylistType, PlaylistTrack } from '../../types'
import Track from './Track'
import {
  Container,
  PlaylistInfo,
  PlaylistTitle,
  PlaylistDescription,
  TracksList,
  More,
} from './styles'

interface PlaylistBoxProps {
  className?: string;
  playlist: PlaylistType;
}

function PlaylistBox(props: PlaylistBoxProps): ReactElement {
  const {
    playlist
  } = props

  const theme = useTheme()

  const { t } = useTranslation('playlists')

  return (
    <Container
      width="fit-content"
      height="fit-content"
    >
      <Image
        width="305px"
        height="230px"
        src={playlist.images[0].url}
        alt={playlist.name}
      />
      <PlaylistInfo>
        <PlaylistTitle>{playlist.name}</PlaylistTitle>
        <PlaylistDescription>{playlist.description}</PlaylistDescription>
        <TracksList>
          {playlist.tracks.map((track: PlaylistTrack) => <Track key={track.id} track={track} />)}
        </TracksList>
        <More>
          <Link
            href={playlist.externalLinks?.spotify}
            rel="noopener noreferrer"
            target="_blank"
            palette={{ primary: theme.playlists.color.primary }}
          >
            {t('more')}
          </Link>
        </More>
      </PlaylistInfo>
    </Container>
  )
}

export default memo(PlaylistBox)
