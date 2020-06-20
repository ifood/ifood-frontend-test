import Bugsnag from '@bugsnag/js'

export default function logOnBugsnag(error: Error): void {
  Bugsnag.notify(new Error(error?.message))
}
