import React, { ReactElement, ReactNode } from 'react'
import { publish, subscribe, unsubscribe } from 'pubsub-js'
import { publishAll, subscribeAll, unsubscribeAll } from './extended'
import Context from './context'

interface CommunicationProviderProps {
  children: ReactNode;
}

export default function Provider(props: CommunicationProviderProps): ReactElement {
  const { children } = props
  return (
    <Context.Provider value={{
      publish,
      subscribe,
      unsubscribe,
      publishAll,
      subscribeAll,
      unsubscribeAll
    }}>
      {children}
    </Context.Provider>
  )
}