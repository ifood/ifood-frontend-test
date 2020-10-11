import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Main.scss';
import SpotifyWebApi from 'spotify-web-api-node';
import PlatformsCard from '../../card-playlist';

function Main() {
    const [playlists, setPlaylists] = useState([] as any);
    const spotifyApi = new SpotifyWebApi();
    const getTokenLocal = localStorage.getItem('spotify_token');
    const history = useHistory();

    if (getTokenLocal) {
        spotifyApi.setAccessToken(getTokenLocal);
    }
    else {
        console.log('Sem token')
        history.push('/');
    }

    useEffect(() => {
        spotifyApi.getFeaturedPlaylists({ limit : 12, offset: 1, country: 'BR', locale: 'pt_BR', timestamp:'2014-10-23T09:00:00' })
          .then(data => {
            return setPlaylists(data.body.playlists.items);
        })
    }, [spotifyApi]);
    
    console.log(playlists);
    return (
        <React.Fragment>
            <main className="content container-fluid">
                <div className="p-3 mt-3">
                    <div className="profile-container">
                        <ul>
                            {playlists.map((playlist: { name: string; id: string; description: string; message: string; external_urls: Object; images: any; }) => (
                            <li key={playlist.id}>
                                <p>{playlist.name}</p>
                                <PlatformsCard name={playlist.name} cover={playlist.images[0]} description={playlist.description} videoUrl="https://player.vimeo.com/video/451623571" more={playlist.external_urls} keys={playlist.message} />
                            </li> 
                            ))}
                        </ul>    
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}
  
export default Main;    
