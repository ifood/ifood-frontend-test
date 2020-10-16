import * as React from 'react'
import {
  Stack,
  Select,
  Input,
  Button,
  FormControl,
  FormLabel
} from '@chakra-ui/core'
import { useSearchParams } from 'react-router-dom'

import { Filters } from 'shared/types/filters'

import { Wrapper } from './components/filter/wrapper'

export default function FilterContainer({ filters }: { filters: Filters }) {
  const [, setSearchParams] = useSearchParams()

  const formRef = React.useRef<HTMLFormElement | null>(null)

  function handleChange(event: React.SyntheticEvent) {
    event.preventDefault()
    if (formRef.current) {
      const data = new FormData(formRef.current) as URLSearchParams
      const timestamp = data.get('timestamp') as string | null

      if (timestamp) {
        const newDate = new Date(timestamp).toISOString()
        data.set('timestamp', newDate)
      }

      setSearchParams(new URLSearchParams(data).toString())
    }
  }

  return (
    <Wrapper
      handleChange={handleChange}
      button={
        <Button type="submit" isFullWidth colorScheme="brand">
          BUSCAR
        </Button>
      }
      ref={formRef}
    >
      <Stack color="black">
        {filters.filters.map((item) =>
          item.values ? (
            <FormControl key={item.id}>
              <FormLabel fontSize="xs" htmlFor={item.id}>
                {item.name}
              </FormLabel>
              <Select
                placeholder={`Selecione o ${item.name}`}
                name={item.id}
                key={item.id}
                id={item.id}
              >
                {item.values?.map((oi) => (
                  <option key={oi.value} value={oi.value}>
                    {oi.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          ) : (
            <FormControl key={item.id}>
              <FormLabel fontSize="xs" htmlFor={item.id}>
                {item.name}
              </FormLabel>
              <Input
                name={item.id}
                id={item.id}
                {...{
                  type:
                    item?.validation?.primitiveType === 'INTEGER'
                      ? 'number'
                      : 'date',
                  max: item?.validation?.max,
                  min: item?.validation?.min
                }}
              />
            </FormControl>
          )
        )}
      </Stack>
    </Wrapper>
  )
}
