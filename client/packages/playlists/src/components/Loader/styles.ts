import styled from 'styled-components'
import { Panel } from '@spotifood/ui'

export const PlaylistsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    margin: 0 15px 15px 0;
  }
  @media (max-width: ${({ theme }) => theme.playlists.breakpoints.small}) {
    > div {
      margin: 0 0 15px 0;
    }
  }
`

export const Container = styled(Panel)`
  height: fit-content;
  width: fit-content;
  padding: 10px;
`

export const PlaylistInfo = styled.div`
  margin-top: 5px;
  width: 305px;
`

export const PlaylistTitle = styled.div`
  background-color: #f2f2f2;
`

export const PlaylistDescription = styled.div`
  background-color: #f2f2f2;
`

export const TracksList = styled.div`
  display: grid;
  grid-row-gap: 5px;
  padding-top: 5px;
`

export const TrackContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 215px 25px;
  grid-template-rows: 20px 20px;
  grid-column-gap: 5px;
  grid-template-areas:
    "album name duration"
    "album info duration";
  height: 40px;
  width: auto;
  padding: 2px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  border-top: 1px solid #f2f2f2;

  :nth-child(4) {
    border-bottom: 1px solid #f2f2f2;
    margin-bottom: 5px;
  }
`

interface AlbumImage {
  width: string;
  height: string;
}

export const AlbumImage = styled.div<AlbumImage>`
  grid-area: album;
  background-color: #f2f2f2;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

export const SongName = styled.div`
  grid-area: name;
  background-color: #f2f2f2;
`

export const SongInfo = styled.div`
  grid-area: info;
  background-color: #f2f2f2;
`

export const SongDuration = styled.div`
  grid-area: duration;
  background-color: #f2f2f2;
`

export const More = styled.div`
  text-align: center;
  background-color: #f2f2f2;
`

