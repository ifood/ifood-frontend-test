import styled from "styled-components";
import { AppBar, Avatar, Menu, Toolbar } from "@material-ui/core";

export const HeaderBar = styled(AppBar)``;

export const HeaderContainer = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
     width: 97%;
  }
`;

export const HeaderBrand = styled.img`
    width: 200px;
    margin-bottom: 5px;
`;

export const HeaderAvatarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
     padding: 10px 0;
  }

`;

export const HeaderAvatar = styled(Avatar)`
  width: 50px !important;
  height: 50px !important;
  border: 1px solid #fff;
  margin-left: 15px;
`;

export const HeaderName = styled.h1`
  font-size: 16px;

  @media screen and (max-width: 767px) {
     display: none;
  }
`;

export const HeaderMenu = styled(Menu)``;
