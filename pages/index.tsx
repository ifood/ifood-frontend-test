import { useState, useReducer, useEffect } from 'react'
import { Select, DatePicker, InputNumber, List, TimePicker } from 'antd'

import { getPlaylistFilters, FilterTransformed } from '../data/playlistFilter'
import playlists from '../domain/playlists.json'
import locale from '../domain/locale.json'

const Index = () => {
  const [filters, setFilters] = useState<FilterTransformed>()
  const [date, setDate] = useState()
  const [state, dispatch] = useReducer(reducer, {})

  useEffect(() => {
    getPlaylistFilters().then(setFilters)
  }, [])

  const width = '100%'

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img src={'logo.png'} width="50%" />
      </div>

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
            onChange={onChangeDate(dispatch, setDate)}
          />
          <TimePicker
            style={{ width }}
            locale={locale as any}
            onChange={onChangeTime(dispatch, setDate)}
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

      <List
        itemLayout="vertical"
        size="large"
        dataSource={playlists.playlists.items}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            extra={<img width={272} alt="" src={item.images[0].url} />}
          >
            <List.Item.Meta
              title={
                <a target="_blank" href={item.external_urls.spotify}>
                  {item.name}
                </a>
              }
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default Index

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

function onChangeDate(dispatch: Dispatch, setState: Function) {
  return (date: any, dateString: string) => {
    dispatch({ type: 'date', payload: dateString })
    // setState(date)
    console.log(date, dateString)
  }
}

function onChangeTime(dispatch: Dispatch, setState: Function) {
  return (date: any, dateString: string) => {
    dispatch({ type: 'time', payload: dateString })
    // setState(date)
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
