import styled from 'styled-components';

export const InputWrap = styled.div`
	margin-bottom: 5px;
	@media (min-width: 800px) {
		margin-right: 5px;
	}
`;

export const Input = styled.input`
	width: 150px;
	height: 30px;
	padding: 16px;
	font-size: 16px;
	border: 1px solid #8b8b8b;
	border-radius: 16px;

	:focus {
		border: 1px solid #ea1d2c;
	}

	@media (min-width: 900px) {
		width: 170px;
	}
`;

