import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Loading from '../../Atom/Loading'

export const StyledPlaylistsCard = styled(Box)`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;
`

export const Loader = styled(Loading)`
  display: flex;
  height: 500px;
  align-items: center;
  justify-content: center;
`
