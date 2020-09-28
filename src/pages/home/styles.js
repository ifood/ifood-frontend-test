import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;

  background: linear-gradient(to bottom, #414141 0%, #181818 100%), transparent;
  background-size: 100% 250px, 100%;
  background-repeat: no-repeat;
  background-position: top;
`
