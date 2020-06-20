export type Topic = string;
  
export type SubscribeHandler = (topic: Topic, value: any) => void;

export interface Communication {
  publish: (topic: Topic, value?: any) => boolean;
  subscribe: (topic: Topic, handler: SubscribeHandler) => Topic;
  unsubscribe: (topic: Topic) => boolean;
  publishAll: (topic: Topic[], value?: any) => boolean;
  subscribeAll: (topics: Topic[], handler: SubscribeHandler) => Topic[];
  unsubscribeAll: (topic: Topic[]) => boolean;
}