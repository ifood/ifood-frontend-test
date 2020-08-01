import styled from 'styled-components'
import media from '../../styles/media-queries'

export const Container = styled.div`
  ${media.mobile`
    margin: 0 15px;
  `}
  ${media.desktop`
    width: 50%;
  `}
`

export const Content = styled.div``

export const Form = styled.form``

export const Input = styled.input`
  border-radius: 24px;
  border: 1px solid ${props => props.theme.palette.gray};
  font-size: 16px;
  height: 26px;
  letter-spacing: 1px;
  outline: none;
  padding: 0 20px;
  width: 100%
`
