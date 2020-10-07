import React, { createContext, useState } from 'react';

interface IPlaylist {
  playlist: Array<string>;
}

export const PlayListContext = createContext<IPlaylist | undefined>(undefined);

PlayListContext.displayName = 'PlaylistContext';

export const PlaylistStore = (props: any) => {
  const [playlist, setPlaylist] = useState();

  return (
    <PlayListContext.Provider
      value={{
        state: {
          playlist
        },
        dispatch: {
          playlist: setPlaylist
        }
      }}
      {...props}
    />
  );
};
