import styled from "styled-components";
import theme from "../../../../theme/theme";

export const PlaylistCard = styled.div`
  margin-top: 20px;
  position: relative;
`;

export const PlaylistCardImage = styled.img`
  max-width: 100%;
  border: 4px solid #fff;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  &:hover {
    border: 4px solid ${theme.palette.primary.main};
  }

  @media screen and (max-width: 990px) {
    width: 85vw;
  }
`;

export const PlaylistCardDescription = styled.div`
  position: absolute;
  bottom: 9px;
  height: 30px;
  background: rgba(255,255,255,0.5);
  color: #000;
  font-family: 'Roboto',sans-serif;
  font-weight: bold;
  font-size: 16px;
  width: 98%;
  left: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

`;
