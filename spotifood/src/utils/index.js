/**
 * Function to define a string in a pattern to be used in all search inputs.
 * @param {String} str term to search.
 */
export function toSearchableString(str) {
    return str ? str.trim().toLowerCase() : '';
}

/**
 * define if array is empty
 * @param {Array} array 
 */
export function isEmpty(array) {
    return !array || array.length === 0;
}

/**
 * Mount a query string params
 * @param {Object} params 
 * @returns {String} query string
 */
export function mountQueryString(params) {
    if (params) {
        let queryString = '';
        Object.keys(params).forEach(p => {
            if (params[p]) {
                queryString += `${!queryString.length ? '?' : '&'}${p}=${params[p]}`;
            }
        });
        return queryString;
    } else {
        return '';
    }
};