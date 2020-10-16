import * as React from 'react'
import {
  Button,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverFooter,
  PopoverBody
} from '@chakra-ui/core'

type InputProps = {
  children: React.ReactNode
  button: React.ReactNode
  handleChange: (event: React.FormEvent<HTMLFormElement>) => void
}

export const Wrapper = React.forwardRef<HTMLFormElement | null, InputProps>(
  ({ children, button, handleChange }, ref) => {
    return (
      <Popover>
        <PopoverTrigger>
          <Button colorScheme="secondary" color="black">
            Filtros
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent bg="whitesmoke">
            <form ref={ref} onSubmit={handleChange} aria-label="Filtros">
              <PopoverArrow bg="whitesmoke" />
              <PopoverHeader color="brand.500">Filtros</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>{children}</PopoverBody>
              <PopoverFooter>{button}</PopoverFooter>
            </form>
          </PopoverContent>
        </Portal>
      </Popover>
    )
  }
)

Wrapper.displayName = 'Wrapper'
