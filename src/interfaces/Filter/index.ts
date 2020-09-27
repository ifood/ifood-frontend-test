import { Dispatch, SetStateAction } from "react";

export interface FilterValue {
  value: string;
  name: string;
}

export interface Validation {
  primitiveType: string;
  entityType: string;
  pattern: string;
  min?: number;
  max?: number;
}

export interface Filter {
  id?: string;
  name?: string;
  values?: FilterValue[];
  validation?: Validation
}

export interface FilterContextProps {
  locales: Filter;
  countries: Filter;
  timestamp: Filter;
  quantity: Filter;
  page: Filter;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export interface FilterParams {
  locale?: string;
  country?: string;
  timestamp?: string;
  limit?: number;
  offset?: number;
}
