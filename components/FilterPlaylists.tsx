import { useState, useReducer, useEffect, useRef } from 'react'
import { Select, DatePicker, InputNumber, TimePicker, Input } from 'antd'
import debounce from 'lodash.debounce'

import locale from '../public/locale.json'

import { extractAccessToken } from '../utils/accessToken'
import { createPlaylistFilter } from '../utils/timestamp'
import { getPlaylistFilters, Filter } from '../data/playlistFilter'
import { fetchFeaturedPlaylists } from '../data/playlists'

type Props = {
  setPlaylists: (value: Playlist[]) => void
  setIsTokenInvalid: (value: boolean) => void
  setMessage: (value: string) => void
}

// Based in this research https://lawsofux.com/doherty-threshold
const DEBOUNCE_TIME = 400

export function FilterPlaylists(props: Props) {
  const [filters, setFilters] = useState<Filter>()
  const [state, dispatch] = useReducer(reducer, {})
  const delayedQuery = debounce(getPlaylists, DEBOUNCE_TIME)
  const intervalId = useRef(null)

  const filterDependencies = [
    state.locale,
    state.country,
    state.date,
    state.time,
    state.limit,
    state.offset,
  ]

  useEffect(() => {
    const extractedToken = extractAccessToken(window.location.hash)
    if (extractedToken.length === 0) {
      props.setIsTokenInvalid(true)
      return
    }

    if (!filters) {
      getPlaylistFilters().then(setFilters)
    }

    clearInterval(intervalId.current)
    getPlaylists()
  }, filterDependencies)

  useEffect(() => {
    clearInterval(intervalId.current)
    delayedQuery()

    return delayedQuery.cancel
  }, [state.query])

  useEffect(() => {
    const thirtySeconds = 30_000
    const interval = setInterval(getPlaylists, thirtySeconds)

    intervalId.current = interval

    return () => clearInterval(interval)
  }, [...filterDependencies, state.query])

  function getPlaylists() {
    const extractedToken = extractAccessToken(window.location.hash)
    if (extractedToken.length === 0) {
      props.setIsTokenInvalid(true)
      return
    }

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
  }

  const width = '100%'
  const [dateLabel, _, timeLabel] = filters?.timestamp.name.split(' ')

  return (
    <div className="main">
      <div className="input-group">
        <label>
          Idioma
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
      </div>

      <div className="input-group">
        <label>
          {dateLabel}
          <DatePicker
            style={{ width }}
            locale={locale as any}
            onChange={onChangeDate(dispatch)}
          />
        </label>

        <label>
          {timeLabel}
          <TimePicker
            style={{ width }}
            locale={locale as any}
            onChange={onChangeTime(dispatch)}
          />
        </label>
      </div>

      <div className="input-group">
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

      <label>
        Pesquisar por nome
        <Input style={{ width }} onChange={onChangeQuery(dispatch)} />
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

function onChangeQuery(dispatch: Dispatch) {
  return ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'query', payload: target.value })
  }
}

function reducer(
  state: FilterWithDateTime,
  action: Action
): FilterWithDateTime {
  const clonedState = { ...state }
  clonedState[action.type] = action.payload
  return clonedState
}

type Dispatch = (action: Action) => void

type Action = {
  type: string
  payload: string | number
}
