import { toSearchableString } from '../../utils'

const TEMPLATE_NAME = 'PLAYLIST'

const filterByTerm = (item, term) => toSearchableString(item).includes(toSearchableString(term));

const filterData = (data, term) => {
    const result = data.filter(item => {
        const playlistName = item.name ? filterByTerm(item.name, term) : false;
        return filterByTerm(item.key, term) || playlistName;
    });

    return result;
};

const INITIAL_STATE ={
    data: [],
    filter: {
        data: [],
        term: '',
    }
};

function playlist(state = INITIAL_STATE, action) {
    switch(action.type) {
        case `${TEMPLATE_NAME}_LIST`:
            const data = [...action.data]; 
            return { 
                ...state, 
                data,
                filter: {
                    data: filterData(data, state.filter.term),
                }
            }
        case `${TEMPLATE_NAME}_SEARCH`:
            const term = action.term;
            return {
                ...state,
                filter: {
                    ...state.filter,
                    term,
                    data: filterData(state.data, term),
                }
            }
        default:
            return state;
    }
}

export default playlist;
