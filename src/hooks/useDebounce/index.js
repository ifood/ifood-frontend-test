import { useState, useEffect } from 'react'

import { debounceTime } from 'rxjs/operators'
import { Subject } from 'rxjs'

const useDebounce = (time, defaultValue) => {
  const [value, setValue] = useState(defaultValue)
  const [values] = useState(() => new Subject())
  useEffect(() => {
    const sub = values.pipe(debounceTime(time)).subscribe(setValue)
    return () => sub.unsubscribe()
  }, [time, values])
  return [value, (v) => values.next(v)]
}

export default useDebounce
