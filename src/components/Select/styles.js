import styled from 'styled-components'

export const SelectWrapper = styled.div`
  > select {
    font-size: 14px;
    width: 100%;
    height: 32px;
    background: none;
    border: none;
    outline: none;
    border-bottom: 2px solid;

    &:focus {
      border-bottom-color: #1761B0;
    }

    > options {
      margin-top: 8px;
    }
  }
`
