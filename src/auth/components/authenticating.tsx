import * as React from 'react'
import { Text, VStack } from '@chakra-ui/core'
import { MdSecurity } from 'react-icons/md'

export function Authenticating() {
  return (
    <VStack spacing={4}>
      <MdSecurity />
      <Text>Autenticando</Text>
    </VStack>
  )
}
