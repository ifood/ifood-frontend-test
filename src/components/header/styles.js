import styled from 'styled-components'

import SearchIcon from 'assets/images/search.svg'

export const Container = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0;
`

export const Title = styled.h1`
  color: #fff;
  margin: 0;
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  width: 300px;
  height: 24px;
  padding: 6px 7px 6px 26px;
  background: #fff url(${SearchIcon}) no-repeat 7px center;
  input {
    flex: 1;
    width: 100%;
    font-size: 13px;
    color: #121212;
    border: 0;
  }
`
