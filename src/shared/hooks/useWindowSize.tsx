import * as React from 'react'

type WindowSize = {
  width?: number
  height?: number
}

export function useWindowSize(): WindowSize {
  const getSize = React.useCallback(
    (): WindowSize => ({
      width: window.innerWidth,
      height: window.innerHeight
    }),
    []
  )

  const [windowSize, setWindowSize] = React.useState<WindowSize>(getSize)
  React.useEffect(
    () => {
      function handleResize() {
        setWindowSize(getSize())
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  return windowSize
}
