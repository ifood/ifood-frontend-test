import { useState, useCallback, useEffect, useMemo, ChangeEvent } from 'react'
import { useCommunication } from '@spotifood/communication-sdk'
import { buildSchema } from './validation'
import { FilterEvents, LocalEvents } from '../../events'
import { GlobalConstants } from '../../utils'
import { Validation } from '../../types'

interface LimitHook {
  showLimit: boolean;
  handleClose: () => void;
  handleAction: () => void;
  limit: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  errorMessage: string;
}

export default function useLimit(validation: Validation): LimitHook {
  const [showLimit, setShowLimit] = useState(false)
  const [limit, setLimit] = useState(GlobalConstants.DefaultLimit.toString())
  const [errorMessage, setErrorMessage] = useState('')
  const { publish, subscribe, unsubscribeAll } = useCommunication()

  useEffect(() => {
    const showTopic = subscribe(LocalEvents.ShowLimit, () => setShowLimit(true))
    const filterTopic = subscribe(FilterEvents.FilterLimit, (_topic, value) => {
      if (!value) {
        setLimit(GlobalConstants.DefaultLimit.toString())
        publish(FilterEvents.ResetLimit, GlobalConstants.DefaultLimit)
      }
    })

    return () => {
      unsubscribeAll([showTopic, filterTopic])
    }
  }, [subscribe, unsubscribeAll, publish])

  const schema = useMemo(
    () => buildSchema(validation.min, validation.max),
    [validation]
  )

  const handleClose = useCallback(
    () => setShowLimit(false),
    []
  )

  const validate = useCallback(
    async (newLimit: string) => {
      try {
        await schema.validate({ limit: newLimit })
        setErrorMessage('')
      } catch(error) {
        setErrorMessage(error.message)
      }
    },
    [schema]
  )

  const handleAction = useCallback(
    () => {
      if (!schema.isValidSync({ limit })) {
        validate(limit)
        return
      }
      publish(FilterEvents.FilterLimit, parseInt(limit))
      setShowLimit(false)
    },
    [publish, limit, schema, validate]
  )

  const handleChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const newLimit = event.target.value
      setLimit(newLimit)

      if (!newLimit) return
      validate(newLimit)
    },
    [validate]
  )

  return {
    showLimit,
    handleClose,
    handleAction,
    limit,
    handleChange,
    errorMessage
  }
}
