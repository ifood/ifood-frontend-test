// Global
import { isValid as isValidDate } from 'date-fns';
import { byIso } from 'country-code-lookup'
// Regex
import { localeRegexTest, countryRegexTest, timeRegexTest } from './regex';

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
            if (params[p] || params[p] === 0) {
                queryString += `${!queryString.length ? '?' : '&'}${p}=${params[p]}`;
            }
        });
        return queryString;
    } else {
        return '';
    }
};
/**
 * Defines if value of field is valid
 * @param {String} field 
 * @param {any} value
 * @returns {boolean} bool result
 */
export function isValid(field, value) {
    switch(field) {
        case 'limit':
            value = parseInt(value);
            return value >= 1 && value <= 50;
        case 'offset': 
            value = parseInt(value)
            return value >= 1;
        case 'timestamp':
            const time = value.split('T')[1];
            if (!timeRegexTest(time)) {
                return false;
            }
            return isValidDate(new Date(value));
        case 'locale':
            return localeRegexTest(value)
        case 'country':
            return countryRegexTest(value) && byIso(value);
        default:
            return true;
    }
}