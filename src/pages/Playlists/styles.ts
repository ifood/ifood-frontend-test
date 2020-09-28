import styled from "styled-components";

export const PlaylistContainer = styled.div`
  height: 70vh;
  width: 75%;

  @media screen and (max-width: 990px) {
     margin: 0 auto;
  }
`;

export const PlaylistCardListContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));

  @media(min-width: 960px) {
    grid-gap: 24px;
  }
`;
