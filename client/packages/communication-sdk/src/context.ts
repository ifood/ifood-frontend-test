import { createContext } from 'react'
import { Communication } from './types'

export default createContext<Communication | undefined>(undefined)
