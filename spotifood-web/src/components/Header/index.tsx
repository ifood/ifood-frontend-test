import React, { useState } from 'react';
import {Header} from './styles';
import { FiLogOut,FiMusic} from "react-icons/fi";
import imgDefault from "../../assets/imagem.jpg";
  
import { Link } from "react-router-dom";


interface PreventPlaylist {
    name: string;
    description: string;
    tracks: number;
    url: string;
  }

  interface User {
       display_name: string;
     }

  interface IProps{
    preventPlaylist?:PreventPlaylist,
    user?:  User
  }   



const HeaderPlaylist = ({preventPlaylist, user}: IProps) => {
   // const [preventPlaylist, setPreventPlaylist] = useState<PreventPlaylist>();


      //Logout
  function handleLogout() {
    localStorage.removeItem("@IFood:token");
    localStorage.removeItem("@IFood:refreshToken");
    localStorage.removeItem("@IFood:user");
  }
      

    return(
        <Header>
            <div className="header">
              <div className="headerImgTitle">
                <img
                  src={
                    preventPlaylist?.url.length
                      ? preventPlaylist?.url
                      : imgDefault
                  }
                  alt="imagem"
                />
                <div className="headerTitle">
                  <span>
                    Faixas {preventPlaylist?.tracks}
                    <FiMusic size={10} color="#ea1d2c" />
                  </span>
                  <strong> {preventPlaylist?.description}</strong>
                </div>
              </div>
              <div className="headerUser">
                <div className="headerUserName">
                  <span>{user?.display_name}</span>
                </div>
                <div className="headerLogout">
                  <Link to="" onClick={handleLogout}>
                    <FiLogOut />
                  </Link>
                </div>
              </div>
            </div>
            <div className="HeaderLine" />
          </Header>
    )
}


export default HeaderPlaylist