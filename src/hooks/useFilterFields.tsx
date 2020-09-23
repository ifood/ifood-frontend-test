import { useCallback } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

interface FilterFieldDTO {
  filters: {
    id: string;
    name: string;
    values?: {
      value: string;
      name: string;
    }[];
    validation?: {
      primitiveType: 'STRING' | 'INTEGER';
      entityType?: 'DATE_TIME';
      pattern?: string;
      min?: number;
      max?: number;
    };
  }[];
}

export interface FilterField {
  id: string;
  name: string;
  type: 'datetime' | 'select' | 'integer' | 'text';
  validation?: {
    min?: number;
    max?: number;
  };
  options?: {
    value: string;
    name: string;
  }[];
}

const fetchFilterFields = async (): Promise<FilterField[]> => {
  const { data } = await axios.get<FilterFieldDTO>(process.env.REACT_APP_FILTER_URL as string);
  return data.filters.map((filterField) => {
    const field: FilterField = {
      id: filterField.id,
      name: filterField.name,
      options: filterField.values,
      type: 'text',
      validation: undefined,
    };

    if (filterField.validation?.entityType === 'DATE_TIME') {
      field.type = 'datetime';
    } else if (filterField.values) {
      field.type = 'select';
    } else if (filterField.validation?.primitiveType === 'INTEGER') {
      field.type = 'integer';
    }

    if (filterField.validation) {
      field.validation = {
        min: filterField.validation.min,
        max: filterField.validation.max,
      };
    }

    return field;
  });
};

export const useFilterFields = () => {
  const { data: filterFields, isLoading, isSuccess, isError } = useQuery(
    'filter-fields',
    fetchFilterFields
  );

  const validateFilterField = useCallback(
    (id: string, value: any): string | undefined => {
      const filterField = filterFields?.find((field) => field.id === id);
      if (filterField?.validation) {
        const { min, max } = filterField.validation;
        if (min !== undefined && value && value < min) {
          return `Valor menor que o mínimo (${min})`;
        }
        if (max !== undefined && value && value > max) {
          return `Valor maior que o máximo (${max})`;
        }
      }
      return undefined;
    },
    [filterFields]
  );

  return { filterFields, isLoading, isSuccess, isError, validateFilterField };
};
