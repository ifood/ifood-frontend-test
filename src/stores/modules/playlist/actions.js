import Types from '../types';

export const playlistActions = {
  index: data => {
    return {
      type: Types.playlist.index.REQUEST,
      payload: data,
    };
  },
};
