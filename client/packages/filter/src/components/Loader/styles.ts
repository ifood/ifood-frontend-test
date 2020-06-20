import styled from 'styled-components'

export const MobileBar = styled.div`
  background-color: #f2f2f2;
  width: 80%;
  height: 40px;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.filter.breakpoints.small}) {
    justify-content: center;
  }
`

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 600px 150px;
  grid-column-gap: 18px;
  align-items: center;
 
  div {
    background-color: #f2f2f2;
    width: auto;
    height: 40px;
  }
`

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    background-color: #f2f2f2;
    margin-left: 10px;
    width: 80px;
    height: 40px;
  }
`