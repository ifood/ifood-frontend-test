import styled from "styled-components";
import { blue, black, gray, white } from "../../assets/_colors";

export const Container = styled.div`
  width: 100%;
  height: 166px;
  display: flex;
  background-color: ${white.primary};
`;

export const Grid = styled.div`
  display: flex;
  margin: auto;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

export const Name = styled.h3`
  font-size: 28px;
  margin: 0;
  line-height: 33px;
  color: ${black.mono};

  > span {
    font-size: initial;
    color: ${blue.royal};
  }
`;

export const LiteralNumber = styled.p`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  margin: unset;
  color: ${gray.trout};
`;

export const ProfileImg = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  margin-right: 16px;
`;
