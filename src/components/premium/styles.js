import styled from 'styled-components'
import media from '../../styles/media-queries'

export const Container = styled.section`
  margin: 0 auto;
  max-width: 1140px;
  padding: 0 15px;
`

export const Content = styled.div`
  color: ${props => props.theme.palette.white};
  text-align: center;

  ${media.mobile`
    margin-top: 40px;

  `}
  ${media.desktop`
    margin-top: 80px;
  `}
`

export const Title = styled.h1`
  margin-bottom: 10px;

  ${media.mobile`
    font-size: 25px;
  `}
  ${media.desktop`
    font-size: 30px;
  `}
`

export const Description = styled.p`

  ${media.mobile`
    font-size: 14px;
    margin-bottom: 20px;
  `}
  ${media.desktop`
    font-size: 16px;
    margin-bottom: 30px;
  `}
`

export const WrapperCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  
`

export const LinkPremium = styled.a`
  background-color: ${props => props.theme.palette.green};
  border-radius: 10px;
  color: white;
  cursor: pointer;
  margin: 0 10px 10px 0;

  &:hover {
    opacity: 0.8
  }

  ${media.mobile`
    width: 130px;
  `}
  ${media.desktop`
    width: 180px;
  `}
`

export const Card = styled.div`
  border-radius: 10px;
  color: ${props => props.theme.palette.black};
  padding: 10px 0;
`

export const PlanTitle = styled.h1`
  margin-bottom: 10px;

  ${media.mobile`
    font-size: 14px;
  `}
`

export const Price = styled.p`
  ${media.mobile`
    font-size: 12px;
  `}
`
