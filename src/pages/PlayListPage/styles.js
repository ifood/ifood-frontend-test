import styled from 'styled-components'
import Box from '@material-ui/core/Box'

export const StyledPlaylistPage = styled(Box)`
  ${({ theme }) => `

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  width: 100%;
  min-width: 100%;

  padding-top: 100px;
  padding-bottom: ${theme.spacing(3)}px;

  background: ${theme.palette.background.default};


  .page{
    &__title {
      font-size: 2.5rem;
      font-weight: bold;
      
      margin: ${theme.spacing(2)}px 0;

      ${theme.breakpoints.down('xs')} {
        text-align: center;
      }
    }

    &__card-list {
      ${theme.breakpoints.down('xs')} {
        justify-content: space-around;
      }
    }
  }

   `}
`
