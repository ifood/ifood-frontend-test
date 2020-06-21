import styled from "styled-components"
import { ContainerProps } from './Tag'

enum DefaultPalette {
  primary = "#717171",
  secondary = "#dcdcdc"
}

enum DefaultHoverPalette {
  primary = "#f2f2f2",
  secondary = "#444"
}

export const Container = styled.div<ContainerProps>`
  width: fit-content;
  height: 40px;
  background: transparent;
  text-decoration: none;
  padding: 0 20px;
  border-radius: 4px;
  margin: 3px 0;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;

  &:hover {
    background-color: ${DefaultHoverPalette.primary}
  }

  ${({ active, hoverPalette }) => {
    return active
      ? `
        border: 1px solid ${hoverPalette?.primary || DefaultHoverPalette.secondary};
        &:hover {
          background-color: transparent;
        }
      `
      : `
        border: 1px solid ${DefaultPalette.secondary};
      `
  }}
`