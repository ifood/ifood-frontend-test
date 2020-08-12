import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 16px;

    img{
        display: none;
    }

    p{
        display: none;
    }
    span {

    }
  }

  div.user-info {
    display: flex;

    img {
      width: 48px;
      height: 48px;
      margin-right: 16px;
    }

    span {
      transition: 0.3s;
    }

    span:hover {
      color: ${shade(0.3, "#ffffff")};
      text-decoration: underline ${shade(0.3, "#ffffff")};
      cursor: pointer;
    }
  }
`;
