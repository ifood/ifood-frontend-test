import { IStoreState } from '../store';

export const getCountryList = (state: IStoreState) => state.filter.countries;
export const getLocaleList = (state: IStoreState) => state.filter.locales;
export const getTimestamp = (state: IStoreState) => state.filter.timestamp;
export const getLimitBoundaries = (state: IStoreState) =>
  state.filter.limitBounds;
export const getCurrentLimit = (state: IStoreState) =>
  state.filter.currentLimit;
