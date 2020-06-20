import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 0 0 10px;

  @media (max-width: ${({ theme }) => theme.filter.breakpoints.large}) {
    margin: 10px 10px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.filter.breakpoints.small}) {
    width: 305px;
    margin: 0 0 10px 0;
    padding: 0;
  }

  > div:nth-child(1) {
    @media (max-width: ${({ theme }) => theme.filter.breakpoints.small}) {
      width: 305px;
      padding: 0;
    }
  }
`
