/**
 * Defines if string param is a locale string valid
 * @param {String} str 
 * @returns {boolean} bool result
 */
export function localeRegexTest(str) {
    return /^[a-z]{2}[_][A-Z]{2}$/g.test(str);
}

/**
 * Defines if string param is a country string valid
 * @param {String} str 
 * @returns {boolean} bool result
 */
export function countryRegexTest(str) {
    return /^[A-Z]{2}$/g.test(str);
}