import React, { memo, useCallback, useEffect, useState } from "react";
import {
  CustomToolbar,
  ToolbarAvatarContainer,
  ToolbarAvatarName,
  ToolbarBrand,
  ToolbarMenuIcon
} from "./styles";
import brand from '../../assets/img/svg/spotifood_logo_aside_white.svg';
import { User } from "../../interfaces/User";
import Badge from '@material-ui/core/Badge';
import useAuthentication from "../../hooks/useAuthentication";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles
} from '@material-ui/core/styles';
import { AppBar, Avatar, Menu, MenuItem } from "@material-ui/core";

type HeaderProps = {
  userInfo: User,
  openSidebar: () => void;
}

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${ theme.palette.background.paper }`,
      bottom: 0,
      top: 0,
      '&::after': {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }),
)(Badge);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      '&:hover': {
        cursor: 'pointer'
      },
    },
  }),
);

const Header: React.FC<HeaderProps> = ({ userInfo, openSidebar }) => {
  const classes = useStyles();

  const { logout } = useAuthentication();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [showMenuIcon, setShowMenuIcon] = useState<boolean>(window.innerWidth <= 768);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const avatarLogoBrandListener = useCallback(() => {
    window.addEventListener('resize', () => {
      setShowMenuIcon(window.innerWidth <= 768);
    })
  }, [setShowMenuIcon]);

  useEffect(() => {
    avatarLogoBrandListener();
  }, [avatarLogoBrandListener])

  return (
    <AppBar position="static">
      <CustomToolbar>
        { showMenuIcon
          ? (<ToolbarMenuIcon className="material-icons"
                              onClick={ openSidebar }>menu</ToolbarMenuIcon>)
          : (<ToolbarBrand src={ brand } alt='logo aside'/>)
        }
        <ToolbarAvatarContainer>
          <ToolbarAvatarName>{ userInfo.displayName }</ToolbarAvatarName>
          <StyledBadge
            overlap="circle"
            anchorOrigin={ {
              vertical: 'bottom',
              horizontal: 'right',
            } }
            variant="dot"
          >
            <Avatar
              src={ userInfo.avatar }
              alt='User Avatar'
              onClick={ handleClick }
              className={ classes.avatar }
            />
          </StyledBadge>
          <Menu
            id="header-menu"
            anchorEl={ anchorEl }
            keepMounted
            open={ Boolean(anchorEl) }
            onClose={ handleClose }
          >
            <MenuItem
              onClick={ logout }>Sair</MenuItem>
          </Menu>
        </ToolbarAvatarContainer>
      </CustomToolbar>
    </AppBar>
  );
}

export default memo(Header);
