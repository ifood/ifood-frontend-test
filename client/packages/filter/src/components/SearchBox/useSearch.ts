import { useState, useCallback, useEffect, ChangeEvent } from 'react'
import { useCommunication } from '@spotifood/communication-sdk'
import { FilterEvents } from '../../events'
import { GlobalConstants } from '../../utils'

interface SearchHook {
  search: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export default function useSearch(): SearchHook {
  const [search, setSearch] = useState('')
  const [touched, setTouched] = useState(false)
  const { publish } = useCommunication()

  useEffect(() => {
    if (!search && touched) {
      publish(FilterEvents.Search)
    }
  }, [search, publish, touched])

  const onSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value),
    []
  )

  const onSearch = useCallback(
    () => {
      publish(FilterEvents.FilterLimit, GlobalConstants.MaxLimit)
      publish(FilterEvents.Search, search)
      publish(FilterEvents.FilterOffset)
      setTouched(true)
    },
    [search, publish]
  )

  return {
    search,
    onSearchChange,
    onSearch
  }
}
