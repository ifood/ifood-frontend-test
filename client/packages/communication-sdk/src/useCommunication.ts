import { useContext } from 'react'
import communication from './context'
import { Communication } from './types'

export default function useCommunication(): Communication {
  const communicationContext = useContext(communication)
  if (!communicationContext) {
    throw new Error('Communication context was not passed')
  }
  return communicationContext
}
