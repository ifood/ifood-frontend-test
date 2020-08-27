const TEMPLATE_NAME = 'PLAYLIST'

export const list = data => {
    return({ type: `${TEMPLATE_NAME}_LIST`, data });
};

export const search = term => {
    return({ type: `${TEMPLATE_NAME}_SEARCH`, term });
};
