import { subscribe } from 'pubsub-js'
import { Topic, SubscribeHandler } from '../types'

export function subscribeAll(topics: Topic[], handler: SubscribeHandler): Topic[] {
  return topics.map((topic: Topic) => subscribe(topic, handler))
}