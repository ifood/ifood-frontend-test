import styled from 'styled-components'
import {NO_DATA_DESCRIPTION, NO_DATA_TITLE} from '../constants/components'

const NoDataPlaylists = () => {
  return (
    <NoDataPlaylistsStyle>
      <h1>{NO_DATA_TITLE}</h1>
      <p>{NO_DATA_DESCRIPTION}</p>
    </NoDataPlaylistsStyle>
  )
}

const NoDataPlaylistsStyle = styled.div`
  text-align: center;
  width: 100%;
`

export default NoDataPlaylists