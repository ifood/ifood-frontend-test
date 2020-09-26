import styled from 'styled-components'

import SearchIcon from 'assets/images/search.svg'

import { colors } from 'styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 25px;
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  width: 300px;
  height: 24px;
  padding: 6px 7px 6px 26px;
  background: ${colors.white} url(${SearchIcon}) no-repeat 7px center;
`

export const Input = styled.input`
  flex: 1;
  width: 100%;
  font-size: 13px;
  color: ${colors.grayDark};
  border: 0;
`
