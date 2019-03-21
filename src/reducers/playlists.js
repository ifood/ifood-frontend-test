const INITIAL_STATE = {
	playlists: []
};

export default function playlists(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'LIST_PLAYLISTS':
			return [action.playlists];
		case 'SEARCH_PLAYLISTS':
			return [action.playlists];
		case 'FILTER_PLAYLISTS':
			return [action.playlists];
		default:
			return state;
	}
}
