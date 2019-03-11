import constantes from '../constantes';

export function changeList(data) {
    return {
        type: constantes.UPDATE_LIST,
        payload: data
    };
}