import React, { useEffect, useState } from 'react';
import {	useNavigate	} from 'react-router-dom';
import { ButtonLogin, Container, Logo } from './style';
import logo from '../../assets/img/logo.png';
import { AUTHORIZE_URL, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE } from '../../config';
import { getItem, setItem } from '../../services/storage';
import { SPOTIFY_API } from '../../services/api';

function Login () {
	const navigate = useNavigate();
	const [token, setToken] = useState<string | null>(() => {
		const accessToken = getItem();
		if (accessToken) {
			SPOTIFY_API.defaults.headers.authorization = `Bearer ${accessToken}`;
			return accessToken;
		}
		return null;
	});

	useEffect(() => {
		if (token) {
			navigate('/home');
		}

		if (!token && window.location.hash) {
			const data = window.location.hash.substring(1).split('&').map((item) => {
				const info = item.split('=');
				return info[1];
			});

			if (!data) {
				return;
			}

			setToken(data[0]);
			setItem(data[0]);
		}
	}, [token, navigate]);

	return (
		<Container>
			<Logo src={logo} alt="Spotifood" />
			<span>
				Entre com sua conta Spotify para começar
			</span>
			<ButtonLogin href={`${AUTHORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
				Login
			</ButtonLogin>
		</Container>
	);
}

export default Login;