import axios from 'axios';

export interface IFilter {
  id: string;
  name: string;
  values?: IFilterItem[];
  validation?: {
    primitiveType: string;
    entityType?: string;
    pattern?: string;
    min?: number;
    max?: number;
  };
}

export interface IFilterItem {
  name: string;
  label: string;
}

interface IFilterResponse {
  id: string;
  name: string;
  values?: IFilterResponseItem[];
  validation?: {
    primitiveType: string;
    entityType?: string;
    pattern?: string;
    min?: number;
    max?: number;
  };
}

interface IFilterResponseItem {
  name: string;
  value: string;
}

export const getFilters = async (): Promise<IFilter[]> => {
  const response = await axios.get(
    'http://www.mocky.io/v2/5a25fade2e0000213aa90776',
  );

  const { filters } = response.data;

  return filters.map((filter: IFilterResponse) => {
    let valueItems = null;

    if (filter.values) {
      valueItems = filter.values.map(value => {
        return {
          name: value.value,
          label: value.name,
        };
      });
    }

    return {
      id: filter.id,
      name: filter.name,
      values: valueItems,
      validation: filter.validation,
    } as IFilter;
  });
};
