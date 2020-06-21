import { LocalEvents } from "../events"

const filterByEvent: Record<string, string> = {
  locale: LocalEvents.ShowLocale,
  country: LocalEvents.ShowCountry,
  timestamp: LocalEvents.ShowTimestamp,
  limit: LocalEvents.ShowLimit,
  offset: LocalEvents.ShowOffset
}

export default (filter: string): string => filterByEvent[filter]