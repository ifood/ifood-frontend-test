import { unsubscribe } from 'pubsub-js'
import { Topic } from '../types'

export function unsubscribeAll(topics: Topic[]): boolean {
  return !topics
    .map((topic: Topic) => unsubscribe(topic))
    .some(result => !result)
}