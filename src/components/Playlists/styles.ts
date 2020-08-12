import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  margin-top: 40px;
  max-width: 960px;
  align-self: center;
`;

export const Playlist = styled.div`
  background: transparent;
  border-radius: 5px 5px 0 0;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    }

  border-bottom: 1px solid #ffffff;

  display: flex;
  align-items: center;

  transition: 0.5s;

  & + div {
    margin-top: 16px;
  }

  &:hover {
    /* transform: translateX(10px); */
    box-shadow: inset 0 -15px 20px #363636;
  }

  img {
    width: 120px;
    height: 120px;
    transition: 0.5s;

    &:hover {
      background: #363636;
      opacity: 0.7;
      transform: scale(1.05);
    }
  }

  div.info {
    margin: 0 16px;
    flex: 1;

    a {
      color: #ffffff;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.3, "#ffffff")};
        text-decoration: underline ${shade(0.3, "#ffffff")};
      }
    }

    p {
      color: #a8a8b3;
      margin-top: 8px;
    }

    div.bottom {
      display: flex;
      width: 100%;
      margin-top: 16px;
      justify-content: space-between;

      span {
        font-size: 16px;
        color: #a8a8b3;
      }
    }
  }
`;
