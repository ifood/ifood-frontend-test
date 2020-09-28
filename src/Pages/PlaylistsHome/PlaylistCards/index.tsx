import React from "react";

import { IPlaylistItem } from "../../../Services/spotifyService";

import { Container, Content } from "./styles";

interface IPlaylistProps {
  items: IPlaylistItem[];
}

const PlaylistCards: React.FC<IPlaylistProps> = ({ items }: IPlaylistProps) => {
  return (
    <Container>
      <Content>
        {items.map((item) => (
          <a key={item.id} href={item.external_urls.spotify}>
            <img src={item.images[0].url} alt={item.name} />

            <div>
              <strong>{item.name}</strong>
              <p>{item.description}</p>
            </div>
          </a>
        ))}
      </Content>
    </Container>
  );
};

export default PlaylistCards;
