import styled from 'styled-components'

export const Container = styled.div`
  background-color: #F9FAFC;
  display: flex;
  flex-direction: column;
`

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px auto;
`

export const Item = styled.div`
  width: 240px;
  height: 240px;
  background: #C4C4C4;
  border-radius: 16px;
  background-image: url(${props => props.image});
  background-size: cover;
`

export const ItemName = styled.span`
  display: flex;
  justify-content: center;
`

export const GridItem = styled.span`
  margin: 8px;
`

export const Wrapper = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`