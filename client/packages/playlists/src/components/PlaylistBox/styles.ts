import styled from 'styled-components'
import { Panel, Text, Title, Image } from '@spotifood/ui'

export const Container = styled(Panel)`
  height: fit-content;
  width: fit-content;
  padding: 10px;
`

export const PlaylistInfo = styled.div`
  margin-top: 5px;
  width: 305px;
`

export const PlaylistTitle = styled(Title)`
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const PlaylistDescription = styled(Text)`
  text-align: center;
  white-space: nowrap;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
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

export const AlbumImageLink = styled.a`
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`
export const AlbumImage = styled(Image)`
  grid-area: album;
`

export const SongName = styled(Text)`
  grid-area: name;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
`

export const SongInfo = styled(Text)`
  grid-area: info;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #999;
`

export const SongDuration = styled(Text)`
  grid-area: duration;
  font-weight: 600;
`

export const More = styled(Text)`
  text-align: center;
`
