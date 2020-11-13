import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

export const StyledFilter = styled(Paper)`
  ${({ theme }) => `
  display: flex;
  position: fixed;
  background: ${theme.palette.background.default};
  z-index: 2;
  width: 100%;
  padding-bottom: ${theme.spacing(1)}px;

  .hide {
    display: none;
  }

  .filter {
    &__form {
      display: flex;
      flex-direction: column;
      width: 100%;

      .main-filter {
        display: flex;
        width: 100%;
        align-items: center;
      }
    }
  }

  .brand {
    margin-right: 3rem;
    font-size: 2rem;
    font-weight: bold;

    ${theme.breakpoints.down('sm')} {
      margin-right: ${theme.spacing(2)}px;
    }


    ${theme.breakpoints.down('xs')} {
      display:none
    }
  }

  .loader {
    margin-left: ${theme.spacing(2)}px;
  }
  `}
`
