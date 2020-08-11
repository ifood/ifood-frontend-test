import { useState, useReducer, useEffect } from 'react'
import { Select, DatePicker, InputNumber, List } from 'antd'

import { getPlaylistFilters, FilterTransformed } from '../data/playlistFilter'

const Index = () => {
  const [filters, setFilters] = useState<FilterTransformed>()
  const [state, dispatch] = useReducer(reducer, {})

  useEffect(() => {
    getPlaylistFilters().then(setFilters)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>Localidade</label>
      <Select
        style={{ width: 120 }}
        onChange={handleChange(dispatch)}
        value={state.locale}
        options={filters?.locale.values}
      />

      <label>País</label>
      <Select
        style={{ width: 120 }}
        onChange={handleChangeCountry(dispatch)}
        value={state.country}
        options={filters?.country.values}
      />

      <label>Date</label>
      <DatePicker
        style={{ width: 120 }}
        onChange={onChange(dispatch)}
        // value={state.timestamp}
      />

      <label>Limit</label>
      <InputNumber
        style={{ width: 120 }}
        value={state.limit}
        min={filters?.limit.min}
        max={filters?.limit.max}
      />

      <label>Quantity</label>
      <InputNumber style={{ width: 120 }} min={0} value={state.offset} />
    </div>
  )
}

export default Index

function handleChange(dispatch: Dispatch) {
  return (value: string) => {
    dispatch({ type: 'locale', payload: value })
  }
}

function handleChangeCountry(dispatch: Dispatch) {
  return (value: string) => {
    dispatch({ type: 'country', payload: value })
  }
}

function onChange(dispatch: Dispatch) {
  return (date: any, dateString: string) => {
    dispatch({ type: 'country', payload: dateString })
    console.log(date, dateString)
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
