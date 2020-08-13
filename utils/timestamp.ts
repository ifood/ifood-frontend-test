import { FilterState } from '../components/FilterPlaylists'

export function createPlaylistFilter(state: FilterState): PlaylistFilter {
  const playlistFilter = {
    timestamp: convertDateTimeToTimestamp(state.date, state.time)
  }
  const filterKeys = ['locale', 'country', 'limit', 'offset']

  for (const key of filterKeys) {
    if (state[key])
      playlistFilter[key] = state[key]
  }

  return playlistFilter
}

export function convertDateTimeToTimestamp(stateDate: string, stateTime: string): string {
  const isoDateTime = new Date().toISOString()
  const [isoDate, isoTime] = isoDateTime.split('T')
  const date = stateDate || isoDate
  const time = stateTime || isoTime.split('.')[0]
  return `${date}T${time}`
}

type PlaylistFilter = {
  locale?: string
  country?: string
  limit?: number
  offset?: number
  timestamp?: string
}