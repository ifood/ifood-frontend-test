import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #f5f3f4;

	span {
		font-weight: bold;
		font-size: 18px;
		padding: 30px;
		text-align: center;
		color: #3e3e3e;
	}
`;

export const Logo = styled.img`
	width: 200px;
`;

export const ButtonLogin = styled.a`
	width: 100px;
	padding: 8px;
	border-radius: 16px;
	font-size: 14px;
	font-weight: bold;
	letter-spacing: 0.1rem;
	text-transform: uppercase;
	text-align: center;
	text-decoration: none;

	:focus {
		outline: 0;
	}

	:hover {
		transition: 0.6s;
		background: #bb1723;
	}
`;