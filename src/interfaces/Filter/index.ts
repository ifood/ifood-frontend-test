export interface FilterValue {
  value: string;
  name: string;
}

export interface Filter {
  id?: string;
  name?: string;
  values?: FilterValue[];
}
