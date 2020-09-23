import React, { useState, useEffect, useRef } from 'react'

import { useFeaturedMusic } from '~/contexts'

import { Form } from '@unform/web'
import Select from '~/components/Select'
import Input from '~/components/Input'

import moment from 'moment'
import { dateFormattedPattern } from '~/utils'

import { Modal } from '~/components/Bootstrap'
import { FontAwesomeIcon, faAlignLeft } from '~/components/Fontawesome'

import { Container, FilterWrapper, Title, Wrapper, Label } from './styles'
import './styles.css'

export default function Filters() {
  const [isTrue, setIsTrue] = useState(true)
  const formRef = useRef(null)
  const {
    modal,
    showFilters,
    getFiltersList,
    filtersList,
    filtersUpdate,
    getFeaturedList,
    locale,
    country,
    timestamp,
    limit,
    offset,
  } = useFeaturedMusic()

  useEffect(() => {
    if (isTrue) {
      getFiltersList()
    }
  }, [isTrue, getFiltersList])

  useEffect(() => {
    let mount = true

    if (mount) {
      setIsTrue(false)
    }

    return () => (mount = false)
  }, [filtersList])

  useEffect(() => {
    if (isTrue) {
      getFeaturedList()
    }

    const timer = setInterval(async () => {
      await getFeaturedList({
        country,
        locale,
        timestamp,
        limit,
        offset,
      })
    }, 30000)

    return () => clearInterval(timer)
  }, [isTrue, locale, country, timestamp, limit, offset, getFeaturedList])

  function handleShowFilters() {
    if (!showFilters) {
      modal(true)
    } else {
      modal(false)
    }
  }

  function handleFilter(type, values) {
    let localeFilter = locale
    let countryFilter = country
    let timestampFilter = timestamp
    let limitFilter = limit
    let offsetFilter = offset

    switch (type) {
      case 'locale':
        localeFilter = values
        break
      case 'country':
        countryFilter = values
        break
      case 'timestamp':
        timestampFilter = values
        break
      case 'limit':
        limitFilter = values
        break
      case 'offset':
        offsetFilter = values
        break
      default:
        break
    }

    timestampFilter = moment(timestampFilter).format(dateFormattedPattern)

    filtersUpdate({
      locale: localeFilter,
      country: countryFilter,
      limit: limitFilter,
      timestamp: timestampFilter,
      offset: offsetFilter,
    })
  }

  return (
    <Container>
      <FontAwesomeIcon
        icon={faAlignLeft}
        size="2x"
        onClick={handleShowFilters}
      />

      <Modal
        show={showFilters}
        onHide={handleShowFilters}
        dialogClassName="modal-filter"
      >
        <Modal.Body>
          <FilterWrapper>
            <Title>Filtros</Title>

            <Form ref={formRef}>
              {!!filtersList &&
                filtersList.map((item) => (
                  <Wrapper key={item.id}>
                    <Label>{item.name}</Label>

                    {item.values ? (
                      <Select
                        name={item.id}
                        label={item.name}
                        options={item.values}
                        onChange={(value) =>
                          handleFilter(item.id, value.currentTarget.value)
                        }
                      />
                    ) : (
                      item.validation &&
                      (item.validation.entityType ? (
                        <Input
                          type="datetime-local"
                          name={item.name}
                          value={item.value}
                          className="form-control"
                          onChange={(value) => handleFilter(item.id, value)}
                        />
                      ) : (
                        <Input
                          type="number"
                          name={item.name}
                          value={
                            (item.id === 'limit' && limit) ||
                            (item.id === 'offset' && offset)
                          }
                          placeholder={item.name}
                          className="form-control"
                          qtyMin={item.validation.min}
                          qtyMax={item.validation.max}
                          onChange={(value) =>
                            handleFilter(item.id, value.currentTarget.value)
                          }
                        />
                      ))
                    )}
                  </Wrapper>
                ))}
            </Form>
          </FilterWrapper>
        </Modal.Body>
      </Modal>
    </Container>
  )
}
