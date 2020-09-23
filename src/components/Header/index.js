import React from 'react'

import { Container, Row, Col } from '~/components/Bootstrap'

import Logo from '~/components/Logo'
import Filters from '~/components/Filters'

import { HeaderContent, Wrapper } from './styles'

export default function Header({ scroll }) {
  return (
    <HeaderContent>
      <Container fluid>
        <Wrapper className={scroll ? 'fixed' : ''}>
          <Container>
            <Row>
              <Col>
                <Logo />
              </Col>

              <Col xs lg="2">
                <Filters />
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </Container>
    </HeaderContent>
  )
}
