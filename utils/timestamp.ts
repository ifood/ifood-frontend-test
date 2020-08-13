export function createPlaylistFilter(state: FilterWithDateTime): FilterWithTimestamp {
  const playlistFilter = {
    timestamp: convertDateTimeToTimestamp(state.date, state.time)
  }
  const filterKeys = ['locale', 'country', 'limit', 'offset', 'query']

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
