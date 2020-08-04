import styled from 'styled-components'
import media from '../../styles/media-queries'

export const Container = styled.header``

export const Content = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  

  ${media.mobile`
    height: 47px;
  `}
  ${media.desktop`
    height: 67px;
  `}
`
