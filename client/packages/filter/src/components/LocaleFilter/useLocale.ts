import { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useCommunication } from '@spotifood/communication-sdk'
import { FilterEvents, LocalEvents } from '../../events'
import { FilterValue } from '../../types'

interface LocaleHook {
  showLocale: boolean;
  handleOverlayClose: () => void;
  isActive: (locale: FilterValue) => boolean;
  handleDeactivate: (item: string) => void;
  handleActivate: (item: string) => void;
}

export default function useLocale(): LocaleHook {
  const [locales, setLocales] = useState([] as string[])
  const [showLocale, setShowLocale] = useState(false)
  
  const { subscribe, unsubscribeAll } = useCommunication()
  const { i18n } = useTranslation()

  useEffect(() => {
    const show = subscribe(LocalEvents.ShowLocale, () => setShowLocale(true))
    const filter = subscribe(FilterEvents.FilterLocale, (_topic, value) => {
      if (!value) {
        setLocales([])
      }
    })

    return () => {
      unsubscribeAll([show, filter])
    }
  }, [subscribe, unsubscribeAll])

  const handleOverlayClose = useCallback(
    () => setShowLocale(false),
    []
  )
  
  const handleActivate = useCallback(
    (item: string) => {
      i18n.changeLanguage(item)
      setShowLocale(false)
    },
    [i18n]
  )

  const handleDeactivate = useCallback(
    (item: string) => setLocales(
      locales.filter((locale: string) => locale !== item)
    ),
    [locales]
  )

  const isActive = useCallback(
    (locale: FilterValue) => locales.includes(locale.value),
    [locales]
  )

  return {
    showLocale,
    handleOverlayClose,
    isActive,
    handleDeactivate,
    handleActivate
  }
}
