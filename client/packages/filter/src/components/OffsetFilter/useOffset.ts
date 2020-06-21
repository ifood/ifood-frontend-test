import { useState, useCallback, useEffect, useMemo } from 'react'
import { useCommunication } from '@spotifood/communication-sdk'
import { FilterEvents, LocalEvents } from '../../events'
import { GlobalConstants } from '../../utils'

interface OffsetHook {
  showOffset: boolean;
  handleClose: () => void;
  currentPage: number;
  pagesNumber: number;
  handleAction: (page: number) => void;
}

interface PlaylistsTotal {
  playlists: {
    total: number;
  };
}

export default function useOffset(data: PlaylistsTotal): OffsetHook {
  const [showOffset, setShowOffset] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(GlobalConstants.DefaultLimit)
  const [playlistTotal, setPlaylistTotal] = useState(0)

  const {
    publish,
    subscribe,
    subscribeAll,
    unsubscribeAll
  } = useCommunication()

  useEffect(() => {
    const showTopic = subscribe(LocalEvents.ShowOffset, () => setShowOffset(true))
    const offsetTopic = subscribe(FilterEvents.FilterOffset, (_topic, value) => {
      if (!value) {
        setCurrentPage(1)
      }
    })
    const limitTopic = subscribeAll([
      FilterEvents.FilterLimit,
      FilterEvents.ResetLimit
    ],
    (_topic, value) => {
      if (value) {
        setLimit(value)
      }
    })

    return () => {
      unsubscribeAll([showTopic, offsetTopic, ...limitTopic])
    }
  }, [subscribe, unsubscribeAll, subscribeAll])

  useEffect(() => {
    if (data?.playlists) {
      setPlaylistTotal(data.playlists.total)
    }
  }, [data])

  const handleClose = useCallback(
    () => setShowOffset(false),
    []
  )

  const pagesNumber = useMemo(
    () => {
      const pages = playlistTotal / limit
      return Math.ceil(pages)
    },
    [playlistTotal, limit]
  )

  const getOffsetFromPage = useCallback(
    (page: number) => (page - 1)  * limit || GlobalConstants.DefaultOffset,
    [limit]
  )

  const handleAction = useCallback(
    (page: number) => {
      setCurrentPage(page)
      publish(FilterEvents.FilterOffset, getOffsetFromPage(page))
    },
    [publish, getOffsetFromPage]
  )

  return {
    showOffset,
    handleClose,
    currentPage,
    pagesNumber,
    handleAction
  }
}
