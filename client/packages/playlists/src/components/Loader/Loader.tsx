import React, { ReactElement, memo } from 'react'
import {
  Container,
  PlaylistInfo,
  PlaylistTitle,
  PlaylistDescription,
  TracksList,
  More,
  TrackContainer,
  AlbumImage,
  SongName,
  SongInfo,
  SongDuration,
  PlaylistsContainer
} from './styles'

function Loader(): ReactElement {
  return (
    <PlaylistsContainer data-testid="PlaylistsLoader">
      {
        Array(8).fill({}).map((_value, index) => (
          <Container
            key={index}
            width="fit-content"
            height="fit-content"
          >
            <AlbumImage
              width="305px"
              height="230px"
            />
            <PlaylistInfo>
              <PlaylistTitle />
              <PlaylistDescription />
              <TracksList>
                {Array(4).fill({}).map((_value, index) => (
                  <TrackContainer key={index}>
                    <AlbumImage
                      width="56px"
                      height="40px"
                    />
                    <SongName/>
                    <SongInfo />
                    <SongDuration />
                  </TrackContainer>
                ))}
              </TracksList>
              <More />
            </PlaylistInfo>
          </Container>
        ))
      }
    </PlaylistsContainer>
  )
}

export default memo(Loader)
