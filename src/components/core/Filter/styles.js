import styled from "styled-components";

export const Div = styled.div`
  padding: 4rem;
  margin: 5rem 0;
  border: 1px solid #313131;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

export const Label = styled.label`
  position: absolute;
  top: -2rem;
  line-height: 1.9rem;
  font-size: 1.4rem;
  color: var(--gray);
  transform-origin: 0 0;
  transition-property: transform;
  transition-duration: 0.7s;
  transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
  pointer-events: none;
`;

export const Field = styled.input`
  padding: 0.8rem 0;
  margin-bottom: 1.8rem;
  width: 100%;
  border: none;
  appearance: none;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid var(--gray);
  color: var(--white);

  &:focus {
    border-color: var(--red);

    ~ label {
      color: var(--red);
    }
  }
`;

export const Format = styled.span`
  position: absolute;
  bottom: -0.5rem;
  font-size: 1.2rem;
`;
