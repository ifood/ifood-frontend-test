import React, { Component, Fragment } from 'react';
import { Table, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

class List extends Component {

  constructor(props) {
    super(props);
    this.setLimit = this.setLimit.bind(this);
  }

  setLimit(e) {
    this.props.setLimit(e.target.value);
  }

  render() {
    const { playlists, limits, items } = this.props;
    return (
      <Fragment>
        <Container>
          <Row>
            <Col xs="8"><h4 aria-level="1">Playlists {playlists && ` - ${playlists.message}`}</h4></Col>
            <Col xs="4">
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="limit" className="mr-sm-2">Items por Página: </Label>
                  <Input onChange={this.setLimit} type="select" name="limit" id="limit" aria-label="Selecionar quantidade de items a ser exibida"
                    aria-required="true">
                    {
                      limits
                      &&
                      limits.map((value) =>
                        (<option key={`${value}`}> {value} </option>)
                      )
                    }
                  </Input>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
        <br />
        <Table role="table" hover responsive>
          <caption>Lista de playlists - {playlists && playlists.message}</caption>
          <thead>
            <tr>
              <th scope="col">Playlist</th>
              <th scope="col">Criada Por</th>
              <th scope="col">Músicas</th>
            </tr>
          </thead>
          <tbody>
            {
              items
              &&
              items.map((item) =>
                (<tr key={item.id}>
                  <td>
                    <Container>
                      <Row>
                        <Col xs="auto">
                          <img src={item.images[0].url} alt="" height="64" width="64" />
                        </Col>
                        <Col>
                          {item.name}
                        </Col>
                      </Row>
                    </Container>
                  </td>
                  <td aria-label={`criada por ${item.owner.display_name}`}>{item.owner.display_name}</td>
                  <td aria-label={`tem ${item.tracks.total} músicas`}>{item.tracks.total}</td>
                </tr>)
              )
            }
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

export default List;