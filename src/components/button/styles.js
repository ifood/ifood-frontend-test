import styled from 'styled-components'
import media from '../../styles/media-queries'

export const Button = styled.button`
  background-color: ${props => props.theme.palette.green};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    opacity: 0.8
  }

  ${media.mobile`
    border-radius: ${props => props.theme.mobile.button.borderRadius};
    height: ${props => props.theme.mobile.button.height};
    font-size: 12px;
    padding: ${props => props.theme.mobile.button.padding};
    width: ${props => props.theme.mobile.button.width};
  `}
  ${media.desktop`
    border-radius: ${props => props.theme.desktop.button.borderRadius};
    height: ${props => props.theme.desktop.button.height};
    font-size: 14px;
    padding: ${props => props.theme.desktop.button.padding};
    width: ${props => props.theme.desktop.button.width};
  `}
`
export const Children = styled.div`
  display: ${props => props.theme.children.display};
  align-items: ${props => props.theme.children.alignItems};
`

export const Themes = {
  default: {
    mobile: {
      button: {
        borderRadius: '20px',
        fontSize: '12px',
        padding: '8px 20px'
      }
    },
    desktop: {
      button: {
        borderRadius: '20px',
        padding: '10px 20px'
      }
    },
    children: {}
  },
  filter: {
    mobile: {
      button: {
        borderRadius: '100%',
        height: '28px',
        width: '28px'
      }
    },
    desktop: {
      button: {
        borderRadius: '20px',
        padding: '2px 20px'
      }
    },
    children: {
      display: 'flex',
      alignItems: 'center'
    }
  }
}
