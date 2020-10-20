import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaListAlt,
  FaCompactDisc,
  FaUserFriends,
  FaAngleDown,
  FaAngleUp,
} from 'react-icons/fa';
import { IoIosMusicalNotes } from 'react-icons/io';
import { logout } from '../../../helpers/auth';
import useWindowDimensions from '../../../utils/windowDimensions';

import { Container } from './styles';

import userAvatar from '../../../assets/images/user-avatar.png';

function Header() {
  const [profileNav, setProfileNav] = useState(false);
  const { width: windowWidth } = useWindowDimensions();

  function handleProfileNav(value) {
    setProfileNav(value);
  }

  return (
    <Container profileNav={profileNav}>
      <div className="header-wrapper">
        <div className="header-content">
          <a href="/dashboard" className="header-title">
            Spotifood
          </a>
          <div className="header-main-nav">
            <ul>
              <li>
                <NavLink to="/dashboard" activeClassName="active">
                  <FaListAlt size={20} className="fa fa-list-alt" />
                  Playlists
                </NavLink>
              </li>
              <li>
                <NavLink to="/artists" activeClassName="active">
                  <FaUserFriends size={20} className="fa fa-user-friends" />
                  Artistas
                </NavLink>
              </li>
              <li>
                <NavLink to="/albums" activeClassName="active">
                  <FaCompactDisc size={20} className="fa fa-compact-disc " />
                  Albums
                </NavLink>
              </li>
              <li>
                <NavLink to="/songs" activeClassName="active">
                  <IoIosMusicalNotes size={24} className="fa fa-music" />
                  Músicas
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className="header-profile"
            onMouseEnter={() => windowWidth >= 990 && handleProfileNav(true)}
            onMouseLeave={() => windowWidth >= 990 && handleProfileNav(false)}
          >
            <button
              type="button"
              onClick={() => handleProfileNav(!profileNav)}
              className="header-profile-item"
            >
              <img src={userAvatar} alt="User avatar" className="avatar" />
              <span>Felipe</span>
              {profileNav ? (
                <FaAngleUp size={16} className="fa fa-angle-down" />
              ) : (
                <FaAngleDown size={16} className="fa fa-angle-down" />
              )}
            </button>
            <div className="header-profile-nav">
              <ul>
                <li>
                  <NavLink to="/account">Minha conta</NavLink>
                </li>
                <li>
                  <NavLink to="/help">Ajuda</NavLink>
                </li>
                <li>
                  <NavLink to="/login" onClick={logout}>
                    Sair
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;
