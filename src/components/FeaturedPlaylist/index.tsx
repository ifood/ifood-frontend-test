import { ItemsProps } from './types.d';
import React from 'react';
import {
	Card,
	Container,
	Description,
	ImagePlaylist,
	MusicNoteIconStyled,
	Name,
	PlaylistWrapper,
	TitleWrapper
} from './style';

interface FeaturedPlaylistProps {
	playlists: ItemsProps[] | undefined;
	message: string | undefined;
}

function FeaturedPlaylist ({ playlists, message	}: FeaturedPlaylistProps) {
	return (
		<>
			<Container>
				<TitleWrapper>
					<span> {message} </span>
					<MusicNoteIconStyled />
				</TitleWrapper>
				<PlaylistWrapper>
					{playlists?.map((playlist) => (
						<div key={Math.random()}>
							{playlist.isVisible && (
								<Card>
									<ImagePlaylist
										src={playlist.images[0].url}
										alt="Playlist Spotify"
									/>
									<Name> {playlist.name} </Name>
									<Description> {playlist.description} </Description>
								</Card>
							)}
						</div>
					))}
				</PlaylistWrapper>
			</Container>
		</>
	);
}

export default FeaturedPlaylist;