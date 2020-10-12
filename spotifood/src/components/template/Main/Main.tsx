import { time } from 'console';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import CardPlaylist from '../../card-playlist';

export default function Main() {
    const [playlists, setPlaylists] = useState([] as any);
    const spotifyApi = new SpotifyWebApi();
    const history = useHistory();

    const getTokenLocal = localStorage.getItem('spotify_token');
    if (getTokenLocal) {
        spotifyApi.setAccessToken(getTokenLocal);
    }

    spotifyApi
    .getFeaturedPlaylists() // note that we don't pass a user id
      .then(
        async function (data) {
            setTimeout(async () => {
                await setPlaylists(data.playlists.items);
            }, 30000);
            return data;
        },
        function (err) {
            console.error('O erro é ', err);
        }
    );

    console.log('.');

    return (
        <React.Fragment>
            <main className="container py-4">
                <div className="row equal profile-container">
                    {playlists.map((playlist: { name: string; id: string; description: string; message: string; external_urls: Object; images: any; tracks: Object }) => (
                        <CardPlaylist key={playlist.id} name={playlist.name} cover={playlist.images[0]} description={playlist.description} more={playlist.external_urls} message={playlist.message} total={playlist.tracks} />
                    ))}
                </div>
            </main>
        </React.Fragment>
    );
}

