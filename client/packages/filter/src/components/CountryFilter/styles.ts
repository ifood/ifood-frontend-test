import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  > div {
    margin-left: 10px;
  }

  @media (max-width: ${({ theme }) => theme.filter.breakpoints.small}) {
    flex-direction: column;
    padding: 0;
    align-items: center;

    > div {
      margin-bottom: 10px;
      width: 305px;
    }
  }
`