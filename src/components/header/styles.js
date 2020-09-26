import styled from 'styled-components'

import SearchIcon from 'assets/images/search.svg'

import { colors } from 'styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 25px;
  @media (max-width: 800px) {
    padding: 15px;
    justify-content: space-between;
  }
`

export const Button = styled.img`
  width: 15px;
  cursor: pointer;
  @media (min-width: 800px) {
    display: none;
  }
`

export const Float = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
`
export const Search = styled.div`
  display: ${(props) => (props.hide ? 'flex' : 'none')};
  align-items: center;
  border-radius: 12px;
  width: 300px;
  height: 24px;
  padding: 6px 7px 6px 26px;
  background: ${colors.white} url(${SearchIcon}) no-repeat 7px center;
  @media (max-width: 800px) {
    max-width: 200px;
  }
`

export const Input = styled.input`
  flex: 1;
  width: 100%;
  font-size: 13px;
  color: ${colors.grayDark};
  border: 0;
  @media (max-width: 800px) {
    max-width: 160px;
  }
`
