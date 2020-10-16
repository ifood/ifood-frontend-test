import * as React from 'react'
import { CircularProgress, Text, Flex } from '@chakra-ui/core'

const ComponentWrap = ({
  condition,
  children,
  wrap
}: {
  condition: boolean
  wrap: (children: JSX.Element) => JSX.Element
  children: JSX.Element
}): JSX.Element => (condition ? React.cloneElement(wrap(children)) : children)

export function Loader({ wrapComponent = false }: { wrapComponent?: boolean }) {
  return (
    <ComponentWrap
      condition={!!wrapComponent}
      wrap={(children) => (
        <Flex
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
          zIndex={20}
          position="relative"
        >
          {children}
        </Flex>
      )}
    >
      <div>
        <Text mb={3}>carregando...</Text>
        <CircularProgress isIndeterminate />
      </div>
    </ComponentWrap>
  )
}
