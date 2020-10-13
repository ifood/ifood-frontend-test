import styled from "styled-components";

import { Field } from "components/core/Filter/styles";

export const FieldSelect = styled(Field)`
  position: relative;
`;

export const Options = styled.ul`
  position: absolute;
  top: 3.8rem;
  width: 100%;
  max-height: 16rem;
  overflow: scroll;
  z-index: 3;
  background: var(--black-rbg);
`;

export const Option = styled.li`
  padding: 1rem;
  list-style: none;
  font-size: 1.4rem;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 0.7s;
  transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
  color: var(--gray);

  &:hover {
    background: var(--black-light);
  }
`;

export const Close = styled.span`
  position: absolute;
  top: 0.4rem;
  right: 0;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--white);
`;

export const Arrow = styled.span`
  position: absolute;
  top: 1.2rem;
  right: 0;
  cursor: pointer;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid var(--white);
`;
