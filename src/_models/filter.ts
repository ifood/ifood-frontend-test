type IFilter = {
  id: string;
  name: string;
  values?: IFilterValues[];
  validation?: IFilterValidation;
};
type IFilterValidation = {
  primitiveType: string;
  entityType: string;
  pattern?: string;
};
type IFilterValues = {
  value: string;
  name: string;
};
export default IFilter;
