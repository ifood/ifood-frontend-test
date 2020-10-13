
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

// Components
import SpotifyWebApi from 'spotify-web-api-js';
import CardPlaylist from '../../components/card-playlist';

// Templates
import Header from '../../components/template/Header/Header';
import Logo from '../../components/template/Logo/Logo';
import Footer from '../../components/template/Footer/Footer';

import { FiPower } from 'react-icons/fi';

// Design
import { Alert } from '@material-ui/lab';
import './styles.scss';

const Profile = () => {
    const [playlists, setPlaylists] = useState([]);
    const spotifyApi = new SpotifyWebApi();
    const [locale, setLocale] = useState([]);
    const [country, setCountry] = useState([]);
    const [title, setTitle] = useState('');
    const [resLocale, setResLocale] = useState('en_AU');
    const [resCountry, setResCountry] = useState('AU');
    const [msgError, setMsgError] = useState('');
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(50);
    const [limit, setLimit] = useState(8);
    const history = useHistory();

    const filter = { limit : limit, offset: 1, country: resCountry, locale: resLocale, timestamp:'2014-10-23T09:00:00' }

    useEffect(() => {
        api.get('5a25fade2e0000213aa90776').then(response => {
          setLocale(response.data.filters[0].values);
          setCountry(response.data.filters[1].values);
          setMin(response.data.filters[3].validation.min);
          setMax(response.data.filters[3].validation.max);
        })
    }, []);

    const getTokenLocal = localStorage.getItem('spotify_token');
    if (getTokenLocal) {
        spotifyApi.setAccessToken(getTokenLocal);
    }

    useEffect(() => {
        spotifyApi
        .getFeaturedPlaylists(filter) // note that we don't pass a user id
          .then(
            function (data) {
                return setPlaylists(data.playlists.items);
            },
            function (err) {
                let objeto = JSON.parse(err.response);
                console.error('Message: ', objeto.error.message);
                if (err.status === 401) {
                    setMsgError(objeto.error.message);
                    window.location.href = 'http://localhost:8888/login';
                }
                if (err.status === 400) {
                    setMsgError(objeto.error.message);
                }
                if (err.status === 404) {
                    setMsgError(objeto.error.message);
                    localStorage.clear();
                    history.push('/');
                }
                return err;
            }
        );
    }, [filter, history, spotifyApi]);

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    console.log('.');
    return (
        <div className="app">
            <Header icon="home" title="Spotifood" subtitle="Juntamos música com a vontade de comer." />
            <main className="container py-4">
                <div className="row equal profile-container">
                    {msgError ? 
                        <Alert severity="error">{msgError}</Alert>
                        :
                        playlists.map((playlist) => (
                            <CardPlaylist key={playlist.id} name={playlist.name} cover={playlist.images[0]} description={playlist.description} more={playlist.external_urls} message={playlist.message} total={playlist.tracks} />
                        ))
                    }
                </div>
            </main>
            <Logo />
            <aside className="menu-area p-3">
                <nav className="menu">
                    <section className="logo">
                        <form>
                            <div className="form-group">
                                <div className="pb-3">
                                    <input 
                                        placeholder="Pesquisar"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="pb-3">
                                    <select 
                                        className="form-control" 
                                        id="selectLocale" 
                                        onChange={e => setResLocale(e.target.value)}
                                    >
                                        {locale.map((item, index) => (
                                            <option key={index} value={item.value}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="pb-3">
                                    <select 
                                        className="form-control" 
                                        id="selectCountry" 
                                        onChange={e => setResCountry(e.target.value)}
                                    >
                                        {country.map((item, index) => (
                                            <option key={index} value={item.value}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>  
                                </div>
                                <input 
                                    type="number" 
                                    id="quantity" 
                                    name="quantity" 
                                    min={min} 
                                    max={max}
                                    value={limit}
                                    onChange={e => setLimit(e.target.value)}
                                />
                            </div>  
                        </form>
                    </section>
                    <button onClick={handleLogout} type="button">
                        <FiPower size={18} color='white' />
                    </button>
                </nav>
            </aside>
            <Footer />
        </div>
    )
}
    
export default Profile;