import styled from "styled-components"
import { Button } from '../Button'

export const ActionButton = styled(Button)`
  width: 120px;
`

export const UpperControlSection = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const FiltersSection = styled.div`
  margin: 0 0 20px 0;
`

export const LowerControlSection = styled.div`
  display: flex;
  justify-content: flex-end;
`

interface FiltersOverlayContainerProps {
  show: boolean;
}

export const FiltersOverlayContainer = styled.div<FiltersOverlayContainerProps>`
  display: ${(({ show }) => show ? "flex" : "none")};
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 4px 2px -5px lightgray;
  box-sizing: border-box;
  margin-left: 0 !important;
`