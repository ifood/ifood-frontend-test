import { FilterEvents } from "../events"

const filterByEvent: Record<string, string> = {
  locale: FilterEvents.FilterLocale,
  country: FilterEvents.FilterCountry,
  timestamp: FilterEvents.FilterTimestamp,
  limit: FilterEvents.FilterLimit,
  offset: FilterEvents.FilterOffset
}

export default (filter: string): string => filterByEvent[filter]