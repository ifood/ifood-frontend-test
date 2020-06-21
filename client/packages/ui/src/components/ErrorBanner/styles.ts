import styled from 'styled-components'

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  align-items:center;
`;

export const Message = styled.div`
  padding: 0 10px;
`;

export const DisplayErrorWrapper = styled.div`
  background: #ea1d2c;
  color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 15px 0;
  margin: 0.4375rem 0;
  padding: 11px;

  &::before {
    border-color: transparent transparent #ea1d2c transparent;
    border-style: solid;
    border-width: 0 0.4375rem 0.4375rem;
    content: '';
    height: 0;
    left: 0.625rem;
    position: absolute;
    top: -0.4375rem;
    width: 0;
  }
`