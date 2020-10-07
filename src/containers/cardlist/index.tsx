import React, { useContext } from 'react';
import { Card } from 'components/card';
import { PlayListContext } from 'store/play-list-store';

export const CardList: React.FC = () => {
  const playlistContext = useContext(PlayListContext);
  const playlist = playlistContext.state.playlist;

  return (
    <>
      {playlist.map((item: any) => (
        <Card>
          <span>{item.name}</span>
        </Card>
      ))}
    </>
  );
};
