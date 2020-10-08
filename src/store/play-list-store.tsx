import React, { createContext, useState } from 'react'; //eslint-disable-line

interface IPlaylist {
  state: {
    playlist: string[];
    filteredList: string[];
    emptyFilterList: boolean;
  };
  dispatch: {
    playlist(newPlaylist: string[]): void;
    filteredList(newFilteredList: string[]): void;
    emptyFilterList(value: boolean): void;
  };
}

export const PlayListContext = createContext<IPlaylist>({} as IPlaylist);

PlayListContext.displayName = 'PlaylistContext';

export const PlaylistStore = (props: { children: React.ReactNode }) => {
  const [playlist, setPlaylist] = useState<string[]>([]);
  const [filteredList, setFilteredList] = useState<string[]>([]);
  const [emptyFilterList, setEmptyFilterList] = useState(false);

  return (
    <PlayListContext.Provider
      value={{
        state: {
          playlist,
          filteredList,
          emptyFilterList
        },
        dispatch: {
          playlist: setPlaylist,
          filteredList: setFilteredList,
          emptyFilterList: setEmptyFilterList
        }
      }}
      {...props}
    />
  );
};
