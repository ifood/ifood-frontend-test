import React from 'react';
import PropTypes from 'prop-types';

import { Container, Button, Row, Col } from 'bootstrap-4-react';

import style from './style.scss';

const Login = ({ login }) => {
	return (
		<Container className={style.Login}>
			<Row>
				<Col col="12">
					<h2>iFood Frontend Test</h2>
					<Button primary onClick={login}>
						Login Spotify
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

Login.propTypes = {
	login: PropTypes.func
};

export default Login;
