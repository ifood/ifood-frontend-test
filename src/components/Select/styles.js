import styled from 'styled-components'

export const SelectWrapper = styled.div`
  display: grid;

  > select {
    grid-row: 2;
    font-size: 14px;
    width: 100%;
    height: 32px;
    background: none;
    border: none;
    outline: none;
    border-bottom: 2px solid;

    > options {
      margin-top: 8px;
    }
  }
`
