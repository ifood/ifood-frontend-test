import React, { createContext, useState } from 'react'; //eslint-disable-line

interface IPlaylist {
  state: {
    playlist: string[];
    filteredList: string[];
  };
  dispatch: {
    playlist(newPlaylist: string[]): void;
    filteredList(newFilteredList: string[]): void;
  };
}

export const PlayListContext = createContext<IPlaylist>({} as IPlaylist);

PlayListContext.displayName = 'PlaylistContext';

export const PlaylistStore = (props: { children: React.ReactNode }) => {
  const [playlist, setPlaylist] = useState<string[]>([]);
  const [filteredList, setFilteredList] = useState<string[]>([]);

  return (
    <PlayListContext.Provider
      value={{
        state: {
          playlist,
          filteredList
        },
        dispatch: {
          playlist: setPlaylist,
          filteredList: setFilteredList
        }
      }}
      {...props}
    />
  );
};
