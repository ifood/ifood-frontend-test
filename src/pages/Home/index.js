import React, { useState, useEffect } from 'react'

import { useFeaturedMusic } from '~/contexts'
import { isAuthenticated } from '~/services/auth'

import Header from '~/components/Header'
import FoodLovers from '~/components/FoodLovers'
import Search from '~/components/Search'
import MusicCardList from '~/components/MusicCardList'
import Footer from '~/components/Footer'

import { Container, Row, Col } from '~/components/Bootstrap'
import { Title } from './styles'

export default function Home() {
  const { auth } = useFeaturedMusic()
  const [pageScroll, setPageScroll] = useState(false)

  useEffect(() => {
    function scrollListener() {
      if (window.scrollY > 80) {
        setPageScroll(true)
      } else {
        setPageScroll(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  useEffect(() => {
    if (!isAuthenticated()) {
      auth()
    }
  }, [auth])

  return (
    <>
      <Header scroll={pageScroll} />

      <Container>
        <Row className="text-center">
          <Col>
            <Title>
              Agora nossos FoodLovers podem <strong>ouvir músicas</strong>
            </Title>
          </Col>
        </Row>

        <Row>
          <Col>
            <FoodLovers />

            <Search />

            <MusicCardList />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}
