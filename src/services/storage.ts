export const getItem = () => localStorage.getItem('@token');

export const setItem = (item: string) => localStorage.setItem('@token', item);