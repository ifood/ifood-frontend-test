import styled from 'styled-components'
import { Input, Button } from '@spotifood/ui'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  margin-right: 15px;

  @media (max-width: ${({ theme }) => theme.filter.breakpoints.small}) {
    justify-content: center;
    margin-right: 0;
    margin-bottom: 10px;
    width: 305px;
  }
`

export const SearchInput = styled(Input)`
  width: 100%;
`

export const SearchButton = styled(Button)`
  width: 120px;
  margin-left: 18px;
`