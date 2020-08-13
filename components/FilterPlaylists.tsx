import { useState, useReducer, useEffect } from 'react'
import { Select, DatePicker, InputNumber, TimePicker } from 'antd'

import locale from '../public/locale.json'

import { FeaturedPlaylists } from '../components/FeaturedPlaylists'

import { getPlaylistFilters, Filter } from '../data/playlistFilter'
import { extractAccessToken } from '../utils/extractAccessToken'
import { fetchFeaturedPlaylists } from '../data/playlists'

type PlaylistFilter = {
  locale?: string
  country?: string
  timestamp?: string
  limit?: number
  offset?: number
}

export function FilterPlaylists() {
  const [filters, setFilters] = useState<Filter>()
  const [state, dispatch] = useReducer(reducer, {})

  useEffect(() => {
    getPlaylistFilters().then(setFilters)
  }, [])

  useEffect(() => {
    const extractedToken = extractAccessToken(window.location.hash)
    // fetchFeaturedPlaylists(extractedToken).then(setPlaylists)
  }, [state.locale])

  const width = '100%'

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
    >
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

      <FeaturedPlaylists playlists={playlists} />
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
  return (date: any, dateString: string) => {
    dispatch({ type: 'date', payload: dateString })
    console.log(date, dateString)
  }
}

function onChangeTime(dispatch: Dispatch) {
  return (date: any, dateString: string) => {
    dispatch({ type: 'time', payload: dateString })
    console.log(date, dateString)
  }
}

function onChangeLimit(dispatch: Dispatch) {
  return (value: number) => {
    dispatch({ type: 'limit', payload: value })
  }
}

function onChangeOffset(dispatch: Dispatch) {
  return (value: number) => {
    dispatch({ type: 'offset', payload: value })
  }
}

function reducer(state: State, action: Action): State {
  const clonedState = { ...state }
  clonedState[action.type] = action.payload
  return clonedState
}

type Dispatch = (action: Action) => void

type Action = {
  type: string
  payload: any
}

type State = {
  locale?: string
  country?: string
  timestamp?: string
  limit?: number
  offset?: number
}
