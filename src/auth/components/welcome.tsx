import * as React from 'react'
import { Text, VStack, Heading, Button } from '@chakra-ui/core'
import { MdKeyboardArrowRight } from 'react-icons/md'

export function Welcome({
  state,
  handleOpenSpotifyAccountLogin
}: {
  state: string
  handleOpenSpotifyAccountLogin: () => void
}) {
  return (
    <VStack spacing={4}>
      <Heading size="xl">LISTEN</Heading>
      <Text textAlign="center" px={3}>
        Descubra como é ser um FoodLover e faça parte da nossa revolução!
      </Text>
      <Button
        type="button"
        onClick={handleOpenSpotifyAccountLogin}
        isLoading={state === 'loading'}
        colorScheme="white"
        rightIcon={<MdKeyboardArrowRight />}
      >
        Saiba mais
      </Button>
    </VStack>
  )
}
