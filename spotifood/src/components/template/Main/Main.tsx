import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Main.scss';
import SpotifyWebApi from 'spotify-web-api-node';

function Main() {
    const [incidents, setIncidents] = useState([] as any);
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
        spotifyApi.getFeaturedPlaylists()
          .then(data => {
            return setIncidents(data.body.playlists.items);
        })
    }, [getTokenLocal]);
    
    console.log(incidents);
    return (
        <React.Fragment>
            <main className="content container-fluid">
                <div className="p-3 mt-3">
                    <div className='display-4'>Bem Vindo!</div>
                    <hr />
                    <p className="mb-0">Sistema para exemplificar a construção
                    de um cadastro desenvolvido em React!</p>
                    <div>
                        {incidents.map((incident: { name: React.ReactNode; }) => (
                           <li>
                               <strong>Caso</strong>
                            <p>{incident.name}</p>
                           </li> 
                        ))}
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}
  
export default Main;    
