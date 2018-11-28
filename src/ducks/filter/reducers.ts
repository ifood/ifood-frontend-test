import { FilterAction } from './actions';
import * as types from './types';

export interface IParsedFilterConfig {
  countries: Array<{ name: string; value: string }>;
  locales: Array<{ name: string; value: string }>;
  timestamp: string | null;
  limitBounds: {
    max: number;
    min: number;
  };
}

export type IFilterState = IParsedFilterConfig & {
  currentLocale: string | null;
  currentCountry: string | null;
  currentLimit: number;
  offset: number;
};

// set default state values
export const initialState: IFilterState = {
  countries: [],
  currentCountry: null,
  currentLimit: 20,
  currentLocale: null,
  limitBounds: {
    max: 50,
    min: 1,
  },
  locales: [],
  offset: 0,
  timestamp: 'yyyy-MM-ddTHH:mm:ss',
};

export default (
  state: IFilterState = initialState,
  action: FilterAction,
): IFilterState => {
  switch (action.type) {
    case types.FILTER_CONFIG_FETCH: {
      // FIXME: could parse configs to be more 'access-performatic'

      // makes config accessible by id in O(1), with cost of O(n)
      const { locale, country, timestamp, limit } = action.config.reduce(
        (acc, curr) => {
          acc[curr.id] = { ...curr };
          return acc;
        },
        {} as any, // TODO: do we really need to set an efemeral type?
      );

      return {
        ...state,
        ...(country && { countries: country.values }),
        ...(limit && {
          limitBounds: { max: limit.validation.max, min: limit.validation.min },
        }),
        ...(locale && { locales: locale.values }),
        ...(timestamp && { timestamp: timestamp.validation.pattern }),
      };
    }
    default:
      return { ...state };
  }
};
