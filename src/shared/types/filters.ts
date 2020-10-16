export interface Filters {
  filters: Filter[]
}

export interface Filter {
  id: string
  name: string
  values?: Value[]
  validation?: Validation
}

export interface Value {
  value: string
  name: string
}

export interface Validation {
  primitiveType: string
  min?: number
  max?: number
  entityType?: string
  pattern?: string
}
