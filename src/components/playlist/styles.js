import styled from 'styled-components'

import { colors } from 'styles'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px;
  @media (max-width: 800px) {
    justify-content: center;
  }
`

export const Container = styled.div`
  display: flex;
  flex: 0 1 calc(20% - 20px);
  flex-direction: column;
  margin: 10px;
  padding: 5px;
  opacity: ${(props) => (props.hide ? 1 : 0.4)};
`

export const Image = styled.img`
  width: 250px;
  margin-bottom: 10px;
`

export const Title = styled.h1`
  font-size: 16px;
  margin-bottom: 5px;
  color: ${colors.white};
`

export const Description = styled.h2`
  min-height: 80px;
  font-size: 13px;
  line-height: 18px;
  color: ${colors.grayLight};

  a {
    text-decoration: none;
    color: ${colors.white};
    :hover {
      color: ${colors.grayLight};
    }
  }
`

export const NotFound = styled.h2`
  margin-left: 20px;
`
