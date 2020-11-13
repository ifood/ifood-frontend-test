import styled from 'styled-components'
import Card from '@material-ui/core/Card'

export const StyledCard = styled(Card)`
  ${({ theme }) => `
  width: 230px;
  margin: 0.5rem 1rem 0.5rem 0;

  :hover {
    background: ${theme.palette.background.paperHover};
  }

  .card {
    &__content {
      display: flex;
      flex-direction: column;
      text-decoration: none;
    }

    &__image {
      width: 200px;
      height: 200px;
    }

    &__title {
      margin-top: 20px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  `}
`
