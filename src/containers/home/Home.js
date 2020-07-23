import React from 'react';
import {
  Row,
  Col,
  Layout,
  Card,
  message,
} from 'antd';
import { I18n } from 'react-redux-i18n';
import { connect } from 'react-redux';
import { LoadingSelectors } from '../../app/redux/reducers';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      window.location = I18n.t('routes.panel.users.url');
    }
  }

  userAuth(e) {
    e.preventDefault();

    const { authenticate } = this.props;
    const { email, password } = this.state;

    if (!(email && password)) {
      return message.error(I18n.t('routes.home.errors.fields'));
    }

    authenticate({ email, password }, () => {
      message.success(I18n.t('routes.home.messages.welcome'));
    });
  }

  render() {
    const { Content } = Layout;

    return (
      <Content className="home__container">
        <Row
          type="flex"
          justify="center"
        >
          <Col
            span={6}
          >
            <Row className="home__logo">
              <Col>
                <img
                  alt="home logo"
                  className="home__logo__img"
                  src="/assets/img/LogoAug2Red.png"
                />
              </Col>
            </Row>
            <Card>
              <form onSubmit={(e) => this.userAuth(e)}>
                <Row>
                  <Col>
                    <h5 className="text-center home__logo__title">
                      {I18n.t('application.title')}
                    </h5>
                  </Col>
                </Row>
                <Row className="home__input">
                  <Col />
                </Row>
                <Row className="home__input">
                  <Col />
                </Row>
                <Row
                  type="flex"
                  justify="end"
                  className="home__input home__input__button"
                >
                  <Col span={24} />
                </Row>
              </form>
            </Card>
          </Col>
        </Row>
      </Content>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: LoadingSelectors.getLoading(state),
});


export default connect(
  mapStateToProps,
  null,
)(
  Home,
);
