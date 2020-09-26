import React, { memo, useState } from "react";
import {
  HeaderAvatar,
  HeaderAvatarContainer,
  HeaderBar,
  HeaderBrand,
  HeaderContainer,
  HeaderMenu,
  HeaderName
} from "./styles";
import brand from '../../assets/img/svg/spotifood_logo_aside_white.svg';
import { User } from "../../interfaces/User";
import { MenuItem } from "@material-ui/core";
import useAuthentication from "../../hooks/useAuthentication";

type HeaderProps = {
  userInfo: User
}

const Header: React.FC<HeaderProps> = ({ userInfo }) => {

  const { logout } = useAuthentication();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderBar position="static">
      <HeaderContainer>
        <HeaderBrand src={ brand } alt='logo aside'/>
        <HeaderAvatarContainer>
          <HeaderName>{ userInfo.displayName }</HeaderName>
          <HeaderAvatar
            src={ userInfo.avatar }
            alt='User Avatar'
            onClick={ handleClick }
          />
          <HeaderMenu
            id="header-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={logout}>Sair</MenuItem>
          </HeaderMenu>
        </HeaderAvatarContainer>
      </HeaderContainer>
    </HeaderBar>
  );
}

export default memo(Header);
