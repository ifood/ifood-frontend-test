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

export const PlaylistStore = (props: { children: React.ReactNode }) => {
  const [playlist, setPlaylist] = useState<string[]>([]);

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
