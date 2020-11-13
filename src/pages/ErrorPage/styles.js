import styled from 'styled-components'
import Box from '@material-ui/core/Box'

export const StyledErrorPage = styled(Box)`
  ${({ theme }) => `

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  width: 100%;
  min-width: 100%;

  padding-top: 100px;
  padding-bottom: ${theme.spacing(3)}px;

  background: ${theme.palette.background.default};


  .error-page{

    &__section {
      display:flex;
    }

    &__message {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

      font-size: 2rem;
    }

    &__icon {
      height: 80px;
      width: 80px;
      margin-bottom: 30px;
    }
      
  }

    
  }

   `}
`
