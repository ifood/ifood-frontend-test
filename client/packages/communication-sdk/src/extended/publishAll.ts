import { publish } from 'pubsub-js'
import { Topic } from '../types'

export function publishAll(topics: Topic[], value: any): boolean {
  return !topics
    .map((topic: Topic) => publish(topic, value))
    .some(result => !result)
}