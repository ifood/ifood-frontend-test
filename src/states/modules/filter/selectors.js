import extend from 'lodash/extend'

import { localeName, countryMap, countryFilter } from 'utils'

export const selectAllFilters = (payload) =>
  payload.filters.map((filter) => {
    if (filter.id === 'locale') {
      filter.values.map((value) =>
        extend(value, { name: localeName(value.name) })
      )
    }
    if (filter.id === 'country') {
      filter.values.map((filterValue) =>
        extend(filterValue, {
          name: countryMap(filterValue.name),
          value: countryFilter(filterValue.value),
        })
      )
    }
    return filter
  })
