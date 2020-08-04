import styled from 'styled-components'
import { MdFilterList } from 'react-icons/md'

import media from '../../styles/media-queries'
import Icon from './../icon'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

export const Content = styled.div`
  align-items: center;
  color: ${props => props.theme.palette.white};
  display: flex;
  flex : 1;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1140px;
  padding: 0 15px;
`

export const WrapperIcon = styled.div`
  align-items: center;
  background-color: ${props => props.theme.palette.white};
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${media.mobile`
    height: 28px;
    width: 28px;
    border-radius: 100%;
  `}
  ${media.desktop`
    border-radius: 20px;
    margin-right: 25px;
    padding: 0px 20px;
  `}
`

export const IconCountry = styled(Icon)`
  height: 28px;
  width: 28px;
`

export const Title = styled.span`
  ${media.mobile`
    display: none;
  `}
`

export const IconFilter = styled(MdFilterList)`
  fill: ${props => props.theme.palette.black};
  font-size: 22px;
`

export const SubTitle = styled.label`
  display: block;
  margin-bottom: 5px;
`

export const WrapperFilters = styled.div`
  background-image: linear-gradient(130deg, #c074b2, #8ab5e8);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: absolute;
  overflow: hidden;
  transition: height 0.7s, border 0.6s;
  z-index: 100;

  ${media.mobile`
    background-image: linear-gradient(80deg, #c074b2, #8ab5e8);
    left: 0px;
    top: 47px;
    width: 100%;
  `}
  ${media.desktop`
    background-image: linear-gradient(130deg, #c074b2, #8ab5e8);
    top: 67px;
    width: 380px;
  `}

  ${props => props.opened ? `
      height: 500px;
    ` : `
      height: 0;
    `
  }
`

export const Form = styled.form`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  height: 100%;
`

export const Filtro = styled.div`
  margin-bottom: 20px;
`

export const Values = styled.ul`
  color: ${props => props.theme.palette.black};
  display: flex;
  flex-wrap: wrap;
`

export const WrapperValidation = styled.div``

export const Value = styled.li`
  border-radius: 20px;
  cursor: pointer;
  padding: 3px 15px;
  margin: 0 8px 6px 0;

  ${props => props.selected ? `
      background-color: ${props.theme.palette.green};
    ` : `
      background-color: ${props.theme.palette.white};
    `
  }
`
