import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Main.scss';
import SpotifyWebApi from 'spotify-web-api-node';
import PlatformsCard from '../../card-playlist';

function Main() {
    const [playlists, setPlaylists] = useState([] as any);
    const spotifyApi = new SpotifyWebApi();
    const history = useHistory();

    try {
        const getTokenLocal = localStorage.getItem('spotify_token');
        if (getTokenLocal) {
            spotifyApi.setAccessToken(getTokenLocal);
            spotifyApi.getFeaturedPlaylists({ limit : 12, offset: 1, country: 'BR', locale: 'pt_BR', timestamp:'2014-10-23T09:00:00' })
                .then(data => {
                setPlaylists(data.body.playlists.items);
            })
        }
    } catch (error) {
        history.push('/');
    }

    console.log(playlists);
    return (
        <React.Fragment>
            <main className="container py-4">
                <div className="row equal profile-container">
                    {playlists.map((playlist: { name: string; id: string; description: string; message: string; external_urls: Object; images: any; tracks: Object }) => (
                        <PlatformsCard key={playlist.id} name={playlist.name} cover={playlist.images[0]} description={playlist.description} more={playlist.external_urls} message={playlist.message} total={playlist.tracks} />
                    ))}
                </div>
            </main>
        </React.Fragment>
    );
}
  
export default Main;    
