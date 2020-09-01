import styled, { keyframes } from "styled-components";

const grow = keyframes`
to{
    transform: translateX(-50%) scale(0);
  }
`;

export const Spinner = styled.div`
  width: 10rem;
  height: 2.3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  margin: 0 auto;
`;

export const Bounce = styled.div`
  will-change: transform;
  height: 2.3rem;
  width: 2.3rem;
  border-radius: 50%;
  background-color: #ffffff;
  position: absolute;
  animation: ${grow} 1s ease-in-out infinite alternate;
`;

export const BounceOne = styled(Bounce)`
  left: 0;
  transform-origin: 100% 50%;
`;

export const BounceTwo = styled(Bounce)`
  left: 50%;
  transform: translateX(-50%) scale(1);
  animation-delay: 0.33s;
`;

export const BounceThree = styled(Bounce)`
  right: 0;
  animation-delay: 0.66s;
`;
