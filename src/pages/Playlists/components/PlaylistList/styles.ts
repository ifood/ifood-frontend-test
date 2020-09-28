import styled from "styled-components";

export const PlaylistCard = styled.div`
  margin-top: 20px;
  position: relative;
  text-align: center;

  &:hover {
    margin-top: 10px;
    transition: all 0.2s;
  }
`;

export const PlaylistCardImage = styled.img`
  max-width: 100%;
  border: 4px solid #fff;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  @media screen and (max-width: 990px) {
    width: 85vw;
  }
`;

export const PlaylistCardDescription = styled.div`

`;
