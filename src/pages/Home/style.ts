import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 35px;
	padding-bottom: 15px;
	border-bottom: 1px solid #ffffff;
	background: #f5f3f4;

	span {
		font-size: 26px;
		font-weight: bold;
		text-align: center;
		max-width:260px;
		color: #3e3e3e;

		strong {
			color: #ea1d2c;
		}
	}

	@media (min-width: 500px) {
		span {
			max-width: 400px;
		}
	}

	@media (min-width: 700px) {
		span {
			max-width: 600px;
			font-size: 32px;
		}
	}
`;

export const Logo = styled.img`
	max-width: 160px;
	margin-bottom: 15px;
	@media (min-width: 700px) {
		max-width: 200px;
	}
`;

export const SearcherWrapper = styled.div`
	width: 260px;
	flex-shrink: 0;
	flex-direction: column;
	display: flex;
	align-items: center;
	margin-top: 10px;

	@media (min-width: 500px) {
		max-width: 400px;
	}
`;

export const SearcherInput = styled.div`
	width: 260px;
	padding: 10px;
	border-radius: 0px 0px 16px 16px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

	:focus {
		outline: 0;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	}

	@media (min-width: 500px) {
		width: 400px;
	}
`;

export const ButtonFilter = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	outline: 0;
	margin-top: 5px;
	margin-bottom: 5px;

	> svg {
		color: #3e3e3e;
	}

	span {
		font-size: 15px;
		padding-left: 5px;
	}

	:hover {
		cursor: pointer;
	}
`;