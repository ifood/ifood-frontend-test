import styled from "styled-components";
import { Toolbar } from "@material-ui/core";


export const CustomToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 95%;
  }

`;
export const ToolbarBrand = styled.img`
  width: 140px;
  margin-bottom: 5px;
`;

export const ToolbarMenuIcon = styled.i`
  font-size: 2.1em;
  cursor: pointer;
`;

export const ToolbarAvatarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
     padding: 10px 0;
  }
`;

export const ToolbarAvatarName = styled.h1`
  font-size: 16px;
  margin-right: 10px;

  @media screen and (max-width: 442px) {
     display: none;
  }
`;
