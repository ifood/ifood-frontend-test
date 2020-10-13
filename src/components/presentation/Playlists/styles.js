import styled from "styled-components";

import { ReactComponent as IcPlay } from "assets/svg/icon-play.svg";

export const WrapperPlay = styled.a`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  background: var(--red-rbg);
`;

export const Playlist = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem;
  height: 35rem;
  z-index: 1;
  background: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: rgb(0 0 0 / 65%);
  }

  &:hover ${WrapperPlay} {
    z-index: 2;
    opacity: 1;
    transition: opacity 0.5s ease-out;
  }
`;

export const IconPlay = styled(IcPlay)`
  width: 5rem;
  height: auto;
`;

export const Error = styled.div`
  padding: 2rem;
  margin-bottom: 4rem;
  background: var(--black-light);
`;
