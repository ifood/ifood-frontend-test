import React from "react";

import { Container, Playlist } from "./styles";
import { IPlaylists } from "../../config/interfaces";

interface IPlaylistsProps {
  listItems: IPlaylists[];
}

const Playlists: React.FC<IPlaylistsProps> = ({ listItems }) => {
  return (
    <Container>
      {listItems.map((playlist) => (
        <Playlist
          key={playlist.id}
          className="appear-from-top"
        >
          <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer" ><img src={playlist.images[0].url} alt={playlist.name} /></a>
          <div className="info">
            <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer" ><strong>{playlist.name}</strong></a>
            <p>{playlist.description}</p>
            <div className="bottom">
              <span>by <a href={playlist.owner.external_urls.spotify} target="_blank" rel="noopener noreferrer">{playlist.owner.display_name}</a></span>
              <span>
                Colaborativa: {playlist.collaborative ? "Sim" : "Não"}
              </span>
              <span>{playlist.tracks.total} Faixas</span>
            </div>
          </div>
        </Playlist>
      ))}
    </Container>
  );
};

export default Playlists;
