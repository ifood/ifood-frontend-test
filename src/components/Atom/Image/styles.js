import styled from 'styled-components'
import Box from '@material-ui/core/Box'

export const ImageContainer = styled(Box)`
  ${({ theme }) => `
  width: 100%;
  height: 100%;

  .card__image {
    width: 100%;
    height: 100%;
  }

  .bg-icon {
    width: 100%;
    height: 100%;
    color: ${theme.palette.background.default};
  }
  `}
`
