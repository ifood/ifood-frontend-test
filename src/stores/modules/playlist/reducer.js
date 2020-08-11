import produce from 'immer';
import Types from '../types';

const INITIAL_STATE = {
  data: [],
  loading: false,
  success: false,
  pagination: { offset: 1, limit: 6, total: 0 },
};

export default function playlist(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      /**================================================================================
       * INDEX
       * =============================================================================**/
      case Types.playlist.index.REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.playlist.index.SUCCESS: {
        const { offset, limit, total } = action.payload.playlists;
        draft.data = action.payload.playlists.items;
        draft.pagination = { offset, limit, total };
        draft.loading = false;
        draft.success = true;
        break;
      }
      /**================================================================================
       * FAILURE
       * =============================================================================**/
      case Types.playlist.FAILURE: {
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
