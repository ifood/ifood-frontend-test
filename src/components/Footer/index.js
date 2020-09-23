import React from 'react'

import { Container, Row, Col } from '~/components/Bootstrap'

import LogoIfood from '~/components/LogoIfood'

import { Wrapper, Text } from './styles'

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <Wrapper>
            <LogoIfood />

            <Text>
              © Copyright 2020 -
              <a
                href="https://ifood.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                iFood
              </a>
              /
              <a
                href="https://github.com/paesrafael/spotifood"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rafael Paes
              </a>
            </Text>
          </Wrapper>
        </Col>
      </Row>
    </Container>
  )
}
