import styled from 'styled-components';

export const SelectWrapper = styled.div`
	margin-bottom: 3px;
	@media (min-width: 800px) {
		margin-right: 5px;
	}
`;

export const Select = styled.select`
	width: 150px;
	height: 30px;
	border-radius: 6px;
	border: 1px solid #8b8b8b;
	outline: 0;
	font-size: 16px;

	:focus {
		border: 1px solid #ea1d2c;
	}

	@media (min-width: 900px) {
		width: 170px;
	}
`;