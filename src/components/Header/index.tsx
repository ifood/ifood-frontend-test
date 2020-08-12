import React, { HTMLAttributes } from "react";

import { Container } from "./styles";
import { ISpotifyUser } from "../../config/interfaces";

interface IHeaderProps extends HTMLAttributes<HTMLDivElement> {
  user: ISpotifyUser | null;
  logOut(): void;
}

const Header: React.FC<IHeaderProps> = ({ user, logOut, ...restProps }) => {
  return (
    <Container>
      <h1>Spotifood</h1>

      { user && (
        <div className="user-info">
          <img src={user.images[0].url} alt={user.display_name} />
          <div>
            <p>{user.display_name}</p>
            <span onClick={logOut}>sair</span>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Header;
