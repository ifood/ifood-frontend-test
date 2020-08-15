type FilterValue = {
  value: string;
  name: string;
};

export interface FilterInterface {
  id: string;
  name: string;
  values?: FilterValue[];
  validation?: any;
}
