import styled, { keyframes } from "styled-components";

const show = keyframes`
  from {
    transform: scale(0);
    opacity:0;
    z-index:-1
  }

  to {
    transform: scale(1);
    opacity: 1;
      z-index:2;
  }
`;

const hide = keyframes`
  from{
    z-index:2;
    transform: scale(1);
    opacity:1;
  } to{
    z-index:-1;
    transform: scale(0);
    opacity: 0;
  }
`;

export const Container = styled.div`
  position: fixed;
  width: 40rem;
  background: #222934;
  right: 0;
  color: #fff;
  font-size: 1.6rem;
  pointer-events: none;
  padding: 2rem;
  overflow-y: auto;
  z-index: 8;
  transform: translateX(0);
  pointer-events: all;
  animation: ${(props) => (props.active ? show : hide)} 0.3s;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Title = styled.h2`
  padding-bottom: 2rem;
`;

export const XIcon = styled.img`
  cursor: pointer;
  width: 1.8rem;

  :hover {
    border-bottom: 1px solid #fff;
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
`;
