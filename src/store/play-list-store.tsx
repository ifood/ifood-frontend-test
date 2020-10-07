import React, { createContext, useState } from 'react';

interface IPlaylist {
  state: {
    playlist: string[];
  };
  dispatch: {
    playlist(newPlaylist: string[]): void;
  };
}

export const PlayListContext = createContext<IPlaylist>({} as IPlaylist);

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
