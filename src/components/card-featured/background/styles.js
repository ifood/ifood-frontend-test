import styled from 'styled-components'
import media from '../../../styles/media-queries'
import { MdPlayCircleOutline } from 'react-icons/md'

export const Container = styled.section``

export const Content = styled.div`
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;

  ${media.mobile`
    height: 135px;
    width: 135px;
  `}
  ${media.desktop`
    height: 200px;
    width: 200px;
  `}
`

export const Shadow = styled.div`
  align-items: center;
  background-color: ${props => props.theme.palette.black};
  color: ${props => props.theme.palette.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 0.7s;

  &:hover {
    opacity: 0.7;
  }
`

export const IconPlay = styled(MdPlayCircleOutline)`
  font-size: 50px;
  fill: ${props => props.theme.palette.white};
`

export const Title = styled.span``
