const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export const PLAYLISTS = createRequestTypes('PLAYLISTS');
export const FILTERS_METADATA = createRequestTypes('FILTERS_METADATA');

export function action(type, payload = {}) {
  return { type, ...payload };
}

export function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export const playlists = {
  request: filters => action(PLAYLISTS[REQUEST], { filters }),
  success: response => action(PLAYLISTS[SUCCESS], { data: response }),
  failure: error => action(PLAYLISTS[FAILURE], { error }),
};

export const filtersMetadata = {
  request: () => action(FILTERS_METADATA[REQUEST]),
  success: metadata => action(FILTERS_METADATA[SUCCESS], { metadata }),
  failure: error => action(FILTERS_METADATA[FAILURE], { error }),
};
