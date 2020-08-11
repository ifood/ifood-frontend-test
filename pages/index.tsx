import { useState, useReducer, useEffect } from 'react'
import { Select, DatePicker, InputNumber, List } from 'antd'

import { getPlaylistFilters, FilterTransformed } from '../data/playlistFilter'

const Index = () => {
  const [filters, setFilters] = useState<FilterTransformed>()
  const [date, setDate] = useState()
  const [state, dispatch] = useReducer(reducer, {})

  useEffect(() => {
    getPlaylistFilters().then(setFilters)
  }, [])

  const width = '100%'

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>{filters?.locale.name}</label>
      <Select
        style={{ width }}
        onChange={onChangeLocale(dispatch)}
        value={state.locale}
        options={filters?.locale.values}
      />
      <label>{filters?.country.name}</label>
      <Select
        style={{ width }}
        onChange={onChangeCountry(dispatch)}
        value={state.country}
        options={filters?.country.values}
      />
      <label>{filters?.timestamp.name}</label>
      <DatePicker
        style={{ width }}
        onChange={onChangeTimestamp(dispatch, setDate)}
        value={date}
      />
      <label>{filters?.limit.name}</label>
      <InputNumber
        style={{ width }}
        onChange={onChangeLimit(dispatch)}
        value={state.limit}
        min={filters?.limit.min}
        max={filters?.limit.max}
      />
      <label>{filters?.offset.name}</label>
      <InputNumber
        style={{ width }}
        onChange={onChangeOffset(dispatch)}
        min={0}
        value={state.offset}
      />

      <List
        itemLayout="vertical"
        size="large"
        dataSource={[
          {
            href: 'https://ant.design',
            title: `ant design part`,
            avatar:
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
              'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          },
          {
            href: 'https://ant.design',
            title: `ant designrt`,
            avatar:
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
              'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          },
        ]}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
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

function onChangeTimestamp(dispatch: Dispatch, setState: Function) {
  return (date: any, dateString: string) => {
    dispatch({ type: 'timestamp', payload: dateString })
    setState(date)
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
