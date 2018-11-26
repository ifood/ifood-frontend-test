import { IStoreState } from '../store';

export const isSignedIn = (state: IStoreState) => state.auth.token !== null;
