import { extend } from 'lodash'

const paramsFactory = (object, [key, value]) => {
  if (value) return extend(object, { [key]: value })
  return object
}

export default paramsFactory
