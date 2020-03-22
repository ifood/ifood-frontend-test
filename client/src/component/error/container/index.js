import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Container } from 'bootstrap-4-react';

const ErrorPage = ({ location }) => (
	<Container>
		<p>
			Tivemos um pequeno imprevisto ao acessar o caminho{' '}
			<code>{location.pathname}</code>
		</p>
		<Link to="/autenticar">Tente logar novamente</Link>
	</Container>
);

ErrorPage.propTypes = {
	location: PropTypes.object
};

export default ErrorPage;
