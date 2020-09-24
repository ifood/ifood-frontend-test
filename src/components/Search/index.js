import React, { useState, useRef } from 'react'

import { useFeaturedMusic } from '~/contexts'

import { Form } from '@unform/web'
import Input from '~/components/Input'

import { Container, Row, Col } from '~/components/Bootstrap'
import {
  FontAwesomeIcon,
  faSearch,
  faTimesCircle,
} from '~/components/Fontawesome'

import Loading from '~/components/Loading'

import { Wrapper, Button, Text } from './styles'

export default function Search() {
  const formRef = useRef(null)
  const [search, setSearch] = useState('')
  const [load, setLoad] = useState(false)
  const [error, setError] = useState('')
  const { setPlaylistSearchName } = useFeaturedMusic()

  function handleSubmit() {
    setLoad(true)
    setError('')

    if (!search) {
      setError('O campo não pode ser vazio.')

      setTimeout(() => {
        setLoad(false)
        setError('')
      }, 2500)
    }

    setPlaylistSearchName(search)
    setTimeout(() => {
      setLoad(false)
    }, 500)
  }

  function handleSearchChange(value) {
    setSearch(value)
  }

  function handleSearchClear() {
    setSearch('')
    setPlaylistSearchName('')
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Wrapper>
              <Row>
                <Col>
                  <FontAwesomeIcon icon={faSearch} size="lg" />

                  <Input
                    type="text"
                    name="search"
                    id="search"
                    value={search}
                    placeholder="Pesquisar por nome"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e.target.value)}
                  />

                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    size="lg"
                    className={`icon-right ${search ? 'active' : ''}`}
                    onClick={handleSearchClear}
                  />
                </Col>

                <Col lg="2">
                  <Button type="submit">Buscar</Button>
                </Col>
              </Row>

              {!!load && <Loading width="32" />}

              {!!error && <Text>{error}</Text>}
            </Wrapper>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
