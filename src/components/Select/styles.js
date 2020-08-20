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
      border-bottom-color: ${(props) => props.theme.blue};
    }

    > options {
      margin-top: 8px;
    }
  }
`
