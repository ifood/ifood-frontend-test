export type FilterValue = {
  value: string;
  name: string;
}

export type Validation = {
  primitiveType: string;
  entityType: string;
  pattern: string;
  min: number;
  max: number;
}

export type FilterType = {
  id: string;
  name: string;
  values: FilterValue[];
  validation: Validation;
}
