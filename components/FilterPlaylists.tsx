import { useState, useReducer, useEffect } from 'react'
import { Select, DatePicker, InputNumber, TimePicker } from 'antd'

import locale from '../public/locale.json'

import { extractAccessToken } from '../utils/accessToken'
import { createPlaylistFilter } from '../utils/timestamp'
import { getPlaylistFilters, Filter } from '../data/playlistFilter'
import { fetchFeaturedPlaylists, Playlist } from '../data/playlists'

type Props = {
  setPlaylists: (value: Playlist[]) => void
  setIsTokenInvalid: (value: boolean) => void
  setMessage: (value: string) => void
}

export function FilterPlaylists(props: Props) {
  const [filters, setFilters] = useState<Filter>()
  const [state, dispatch] = useReducer(reducer, {})

  useEffect(() => {
    if (!filters) {
      getPlaylistFilters().then(setFilters)
    }

    const extractedToken = extractAccessToken(window.location.hash)
    const playlistFilter = createPlaylistFilter(state)

    fetchFeaturedPlaylists(extractedToken, playlistFilter)
      .then((response) => {
        const [message, playlists] = response
        props.setPlaylists(playlists)
        props.setMessage(message)
        props.setIsTokenInvalid(false)
      })
      .catch(() => {
        props.setIsTokenInvalid(true)
      })
  }, [
    state.locale,
    state.country,
    state.date,
    state.time,
    state.limit,
    state.offset,
  ])

  const width = '100%'

  return (
    <div className="main">
      <label>
        {filters?.locale.name}
        <Select
          style={{ width }}
          onChange={onChangeLocale(dispatch)}
          value={state.locale}
          options={filters?.locale.values}
        />
      </label>

      <label>
        {filters?.country.name}
        <Select
          style={{ width }}
          onChange={onChangeCountry(dispatch)}
          value={state.country}
          options={filters?.country.values}
        />
      </label>

      <label>
        {filters?.timestamp.name}
        <div style={{ display: 'flex' }}>
          <DatePicker
            style={{ width }}
            locale={locale as any}
            onChange={onChangeDate(dispatch)}
          />
          <TimePicker
            style={{ width }}
            locale={locale as any}
            onChange={onChangeTime(dispatch)}
          />
        </div>
      </label>

      <label>
        {filters?.limit.name}
        <InputNumber
          style={{ width }}
          onChange={onChangeLimit(dispatch)}
          value={state.limit}
          min={filters?.limit.min}
          max={filters?.limit.max}
        />
      </label>

      <label>
        {filters?.offset.name}
        <InputNumber
          style={{ width }}
          onChange={onChangeOffset(dispatch)}
          min={0}
          value={state.offset}
        />
      </label>
    </div>
  )
}

function onChangeLocale(dispatch: Dispatch) {
  return (value: string) => {
    dispatch({ type: 'locale', payload: value })
  }
}

function onChangeCountry(dispatch: Dispatch) {
  return (value: string) => {
    dispatch({ type: 'country', payload: value })
  }
}

function onChangeDate(dispatch: Dispatch) {
  return (_: any, date: string) => {
    if (date.length !== 0) dispatch({ type: 'date', payload: date })
  }
}

function onChangeTime(dispatch: Dispatch) {
  return (_: any, time: string) => {
    if (time.length !== 0) dispatch({ type: 'time', payload: time })
  }
}

function onChangeLimit(dispatch: Dispatch) {
  return (value: unknown) => {
    if (typeof value === 'number') dispatch({ type: 'limit', payload: value })
  }
}

function onChangeOffset(dispatch: Dispatch) {
  return (value: unknown) => {
    if (typeof value === 'number') dispatch({ type: 'offset', payload: value })
  }
}

function reducer(state: FilterState, action: Action): FilterState {
  const clonedState = { ...state }
  clonedState[action.type] = action.payload
  console.log(clonedState)
  return clonedState
}

type Dispatch = (action: Action) => void

type Action = {
  type: string
  payload: string | number
}

export type FilterState = {
  locale?: string
  country?: string
  date?: string
  time?: string
  limit?: number
  offset?: number
}
