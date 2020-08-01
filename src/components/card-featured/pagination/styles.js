import styled from 'styled-components'

export const Container = styled.section``

export const Content = styled.div`
  margin-top: 20px;
`

export const Numbers = styled.ul`
  display: flex;
  justify-content: center;
`

export const Number = styled.li`
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  height: 20px;
  justify-content: center;
  width: 20px;
  margin: 0 10px;

  ${props => props.selected ? `
    background-color: ${props.theme.palette.green};
  ` : `
    background-color: ${props.theme.palette.white};
  `}
`

export const Text = styled.span``
