import styled from 'styled-components'
import { ButtonProps } from './Button'

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ primaryColor }) => primaryColor};
  color: ${({ secondaryColor }) => secondaryColor};
  text-decoration: none;
  border: none;
  padding: 0 20px;
  border-radius: 4px;
  margin: 3px 0;
  height: 40px;
  font-weight: 500;
  font-size: 12px;
  transition: 100ms;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`