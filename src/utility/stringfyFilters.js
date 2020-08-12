/**
 * CODE
 */

// function to reduce applied filters to query string
function stringfyFilters (f) {
    // initialize string
    let s = '?';

    // country is not null: add field to reduced string
    if (f.country !== null) {
        s = s + 'country=' + f.country + '&';
    }

    // limit is not null: add field to reduced string
    if (f.limit !== null) {
        s = s + 'limit=' + f.limit + '&'; 
    }

    // locale is not null: add field to reduced string
    if (f.locale !== null) {
        s = s + 'locale=' + f.locale + '&'; 
    }

    // offset is not null: add field to reduced string
    if (f.offset !== null) {
        s = s + 'offset=' + f.offset + '&'; 
    }

    // timestamp is not null: add field to reduced string
    if (f.timestamp !== null) {
        s = s + 'timestamp=' + encodeURIComponent(f.timestamp) + '&'; 
    }

    // no filters where added: return empty string
    if (s === '?'){
        return '';
    }

    // return result string
    return s;
}


/**
 * EXPORTS
 */
export {stringfyFilters};
