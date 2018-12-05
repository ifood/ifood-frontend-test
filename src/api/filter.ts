import axios from 'axios';
import settings from '../settings';

export type IFilterConfig = Array<{
  id: string;
  name: string;
  values?: Array<{
    name: string;
    value: string;
  }>;
  validation?: {
    primitiveType: string;
    [validationName: string]: any;
  };
}>;

async function getFilterConfig(): Promise<IFilterConfig> {
  return axios({
    method: 'GET',
    url: settings.filterApiUrl,
  }).then(response => response.data.filters);
}

export { getFilterConfig };
