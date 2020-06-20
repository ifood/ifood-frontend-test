import { useState, useCallback, useEffect } from 'react'
import { useCommunication } from '@spotifood/communication-sdk'
import { FilterEvents, LocalEvents } from '../../events'
import { FilterValue } from '../../types'

interface CountryHook {
  showCountry: boolean;
  handleOverlayClose: () => void;
  handleOverlayAction: () => void;
  isActive: (country: FilterValue) => boolean;
  handleDeactivate: (item: string) => void;
  handleActivate: (item: string) => void;
}

export default function useCountry(): CountryHook {
  const [countries, setCountries] = useState([] as string[])
  const [showCountry, setShowCountry] = useState(false)
  const { publish, unsubscribeAll, subscribe } = useCommunication()

  useEffect(() => {
    const show = subscribe(LocalEvents.ShowCountry, () => setShowCountry(true))
    const filter = subscribe(FilterEvents.FilterCountry, (_topic, value) => {
      if (!value) {
        setCountries([])
      }
    })

    return () => {
      unsubscribeAll([show, filter])
    }
  }, [subscribe, unsubscribeAll])

  const handleOverlayClose = useCallback(
    () => setShowCountry(false),
    []
  )

  const handleOverlayAction = useCallback(
    () => {
      publish(FilterEvents.FilterCountry, { countries })
      setShowCountry(false)
    },
    [publish, countries]
  )

  const handleActivate = useCallback(
    (item: string) => setCountries([...countries, item]),
    [countries]
  )

  const handleDeactivate = useCallback(
    (item: string) => setCountries(
      countries.filter((country: string) => country !== item)
    ),
    [countries]
  )

  const isActive = useCallback(
    (country: FilterValue) => countries.includes(country.value),
    [countries]
  )

  return {
    showCountry,
    handleOverlayClose,
    handleOverlayAction,
    isActive,
    handleDeactivate,
    handleActivate
  }
}