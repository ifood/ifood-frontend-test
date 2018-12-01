import { IFilterConfig } from '../../api/filter';
import * as types from './types';

interface IFetchFilterConfig {
  type: typeof types.FILTER_CONFIG_FETCH;
  config: IFilterConfig;
}
const fetchFilterConfig = (config: IFilterConfig): IFetchFilterConfig => ({
  config,
  type: types.FILTER_CONFIG_FETCH,
});

export type FilterAction = IFetchFilterConfig;

export { fetchFilterConfig };
