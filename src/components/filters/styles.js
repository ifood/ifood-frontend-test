import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
`

export const Content = styled.div` `

export const WrapperIcon = styled.div`
  align-items: center;
  border: 1px solid ${props => props.theme.palette.gray};
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  padding: 0px 20px;
`

export const Title = styled.span``

export const WrapperFilters = styled.div`
  background-color: ${props => props.theme.palette.white};
  border-radius: 20px;
  padding: 0px 20px;
  position: absolute;
  width: 500px;
  overflow: hidden;
  transition: height 0.7s, border 0.6s;
  top: 40px;
  z-index: 100;

  ${props => props.opened ? `
      height: 500px;
      border: 1px solid ${props.theme.palette.gray};
    ` : `
      border: 0px solid ${props.theme.palette.gray};
      height: 0;
    `
  }
`

export const Filtro = styled.div`
  margin-top: 15px;
`

export const Values = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
`

export const Value = styled.li`
  border: 1px solid ${props => props.theme.palette.gray};
  border-radius: 20px;
  cursor: pointer;
  padding: 3px 15px;
  margin: 0 8px 6px 0;

  ${props => props.selected && `
      background-color: ${props.theme.palette.green};
      color: ${props.theme.palette.white};
    `
  }
`

export const Button = styled.button``
