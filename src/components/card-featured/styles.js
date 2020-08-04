import styled from 'styled-components'
import media from '../../styles/media-queries'

export const Container = styled.section`
  margin: 0 auto;
  max-width: 1140px;
  padding: 0 15px;
`

export const Content = styled.div`
  color: ${props => props.theme.palette.white};

  ${media.mobile`
    margin-top: 15px;
  `}
  ${media.desktop`
    margin-top: 40px;
  `}
`

export const WrapperTitle = styled.div`
  text-align: center;
`

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 40px;

  ${media.mobile`
    font-size: 18px;
    margin-bottom: 20px;
  `}
  ${media.desktop`
    font-size: 30px;
    margin-bottom: 40px;
  `}
`

export const PlaylistTitle = styled.h2`
  margin-bottom: 30px;

  ${media.mobile`
    font-size: 18px;
  `}
  ${media.desktop`
    font-size: 25px;
  `}
`

export const WrapperCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`

export const Card = styled.div`
  text-align: center;

  ${media.mobile`
    width: 135px;
    margin: 0 5px 15px 5px;
  `}
  ${media.desktop`
    width: 200px;
    margin: 0 20px 20px 0;
  `}
`

export const LinkSpotify = styled.a``

export const TitleItem = styled.h2`
  font-size: 1rem;
  margin-top: 10px;

  ${media.mobile`
    font-size: 12px;
    margin-top: 5px;
  `}
  ${media.desktop`
    margin-top: 10px;
  `}
`
