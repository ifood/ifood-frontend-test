import { IStoreState } from '../store';

export const isSignedIn = (state: IStoreState) => state.auth.token !== null;
export const getToken = (state: IStoreState) => state.auth.token;
