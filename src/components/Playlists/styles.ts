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

  border-bottom: 1px solid #ffffff;

  display: flex;
  align-items: center;

  transition: 0.3s;

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
  }

  div.info {
    margin: 0 16px;
    flex: 1;

    a {
      color: #ffffff;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.3, '#ffffff')};
        text-decoration: underline ${shade(0.3, '#ffffff')};
      }
    }

    p {
      color: #a8a8b3;
      margin-top: 8px;
    }

    div.bottom {
      display: flex;
      width: 100%;
      margin-top: 8px;
      justify-content: space-between;

      span {
        font-size: 16px;
        color: #a8a8b3;
      }
    }
  }
`;
