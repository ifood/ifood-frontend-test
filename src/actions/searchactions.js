/**
 * CODE
 */

// action creator for set search action
function setSearchValue(searchValue) {
    return {payload: searchValue,
            type: 'SET_SEARCH_VALUE'};
}


/**
 * EXPORTS
 */
export {
    setSearchValue
};
