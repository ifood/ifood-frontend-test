import { ReactElement, isValidElement, ComponentType, createElement, memo } from 'react'
import { CountryFilter } from '../CountryFilter'
import { LimitFilter } from '../LimitFilter'
import { LocaleFilter } from '../LocaleFilter'
import { OffsetFilter } from '../OffsetFilter'
import { FilterType } from '../../types'

interface FilterSelectionProps {
  filter: FilterType;
}

type FilterComponents = ComponentType<any>

const ComponentByFilter: Record<string, FilterComponents> = {
  'locale': LocaleFilter,
  'limit': LimitFilter,
  'country': CountryFilter,
  'offset': OffsetFilter
}

function FilterSelection(props: FilterSelectionProps): ReactElement {
  const {
    filter
  } = props

  const Component = ComponentByFilter[filter.id]

  const FilterComponent = createElement(Component, props)

  if (!isValidElement(FilterComponent)) {
    throw new Error('Filter not recognized')
  }

  return FilterComponent
}

export default memo(FilterSelection)