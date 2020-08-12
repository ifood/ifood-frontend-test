/**
 * CONSTANTS
 */
const INITIAL_STATE = {
    country: null,
    limit: null,
    locale: null,
    offset: null,
    timestamp: null
};

/**
 * CODE
 */

// reducer for filters state
function filterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_FILTERS':
            const filters = action.payload;
            const {country, limit, locale, offset, timestamp} = filters;
            return {...state, country, limit, locale, offset, timestamp}
        
        default:
            return state;
    }
}


/**
 * EXPORTS
 */
export {filterReducer};
