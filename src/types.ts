export interface IFilters {
  id: string;
  name: string;
  values?: [{
    value: string;
    name: string;
  }],
  validation?: {
    primitiveType: string;
    entityType: string;
    pattern: string;
  }
}
