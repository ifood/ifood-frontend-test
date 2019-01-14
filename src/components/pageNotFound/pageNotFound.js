import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Header from '../header/header';

class PageNotFound extends Component {
  componentDidMount() {
    document.title = "SpotiFood - Página Não Encontrada"
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Container>
          <br />
          <Row>
            <Col>
              <h1 aria-level="1" aria-label="Não achamos a página que está procurando!">
                Não achamos a página que está procurando!
                            <span role="img" aria-label="carinha triste">😟</span>
              </h1>
            </Col>
            <br />
            <Col sm="12" md={{ size: 6, offset: 4 }}>
              <Button
                outline
                color="danger"
                role="button"
                aria-label="Clique aqui e volte a página Inicial!"
                onClick={() => this.props.history.push("/playlists")}
              >
                Clique aqui e volte a página Inicial! <span role="img" aria-label="icone de casa">🏡</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default PageNotFound;