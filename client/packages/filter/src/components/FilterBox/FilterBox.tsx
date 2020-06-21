import React, { ReactElement, useCallback, useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { useCommunication } from '@spotifood/communication-sdk'
import { Tag } from '@spotifood/ui'
import { getEventByFilter, getLocalEventByFilter } from '../../utils'
import { FilterSelection } from '../FilterSelection'
import { FilterType } from '../../types'
import { Container } from './styles'

interface FilterBoxProps {
  filter: FilterType;
}

export default function FilterBox(props: FilterBoxProps): ReactElement {
  const { filter } = props
  const [active, setActive] = useState(false)
  const { publish, subscribe, unsubscribe } = useCommunication()
  const theme = useTheme()

  useEffect(() => {
    const topic = subscribe(getEventByFilter(filter.id), (_topic, value) => {
      if (value) {
        setActive(true)
      }
    })

    return () => {
      unsubscribe(topic)
    }
  }, [subscribe, unsubscribe, filter.id])

  const handleClick = useCallback(
    () => {
      if (active) {
        setActive(false)
        publish(getEventByFilter(filter.id))
      } else {
        publish(getLocalEventByFilter(filter.id))
      }
    },
    [filter, active, publish]
  )

  return (
    <Container>
      <Tag
        active={active}
        value={filter.id}
        onClick={handleClick}
        hoverPalette={theme.filter.color}
      >
        {filter.name}
      </Tag>
      <FilterSelection filter={filter} />
    </Container>
  )
}
