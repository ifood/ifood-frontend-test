import React from 'react';

import Login from '../presentation';

class LoginContainer extends React.PureComponent {
	login = () => {
		try {
			window.location.href =
				'https://accounts.spotify.com/authorize?response_type=code&client_id=2a9a60f63adf405ea23ee94d73fc438a&scope=user-read-private%20user-read-email&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauthorize';
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return <Login login={this.login} />;
	}
}

export default LoginContainer;
