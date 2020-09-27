import styled from 'styled-components';
import MusicNoteIcon from '@material-ui/icons/MusicNoteRounded';

export const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const TitleWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 16px 0;
	span {
		color: #3e3e3e;
		font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 18px;
		font-weight: bold;

		@media (min-width: 700px) {
			font-size: 22px;
		}
	}
`;

export const MusicNoteIconStyled = styled(MusicNoteIcon)`
	color: #ea1d2c;
`;

export const PlaylistWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

export const Card = styled.div`
	height: 370px;
	margin: 5px;
	max-width: 270px;
	display: flex;
	flex-direction: column;
	padding: 10px;
	border-radius: 6px;
	background: #f5f3f4;
`;

export const ImagePlaylist = styled.img`
	width: 250px;
	height: 250px;
	margin-bottom: 5px;
	border-radius: 8px;
`;

export const Name = styled.span`
	font-family: 'Roboto', sans-serif;
	font-weight: bold;
	text-transform: uppercase;
	margin-bottom: 3px;
	color: #4f4f4f;
`;

export const Description = styled.span`
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	color: #8b8b8b;
`;