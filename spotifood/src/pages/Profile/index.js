
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
import DatePicker from "react-datepicker";
import './styles.scss';
import "react-datepicker/dist/react-datepicker.css";

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
    const [offset, setOffset] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [searchApi, setSearchApi] = useState(true);
    const history = useHistory();

    const filter = { 
        limit : limit, 
        offset: offset, 
        country: resCountry, 
        locale: resLocale, 
        timestamp:startDate.toISOString() 
    }

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
        if(searchApi){
            spotifyApi.getFeaturedPlaylists(filter)
            .then(
                function (data) {
                    for (let i = 0; i < limit; i++)
                    {
                        const items = data.playlists.items[i];
                        if(items){
                            let filteredPlaylist = data.playlists.items.filter((items) => {
                                        if (items.name.toLowerCase().includes(title)) {
                                            return items;
                                        }
                                        return null;
                                    }    
                                );  
                            setPlaylists(filteredPlaylist);
                            setSearchApi(false);    
                        }  
                    }      
                },
                function (err) {
                    let objeto = JSON.parse(err.response);
                    console.error('Message: ', objeto.error.message);
                    if (err.status === 401) {
                        setMsgError(objeto.error.message);
                        window.location.href = 'https://next-spotifood.herokuapp.com/login';
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
        }    
        setInterval(() => {
            setSearchApi(true);
        }, 30000);
    }, [filter, history, limit, searchApi, spotifyApi, title]);

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

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
                <nav>
                    <section className="logo">
                        <form>
                            <div className="form-group">
                                <div className="pb-3">
                                    <input 
                                        placeholder="Pesquisar"
                                        value={title}
                                        onChange={e => {setTitle(e.target.value);setSearchApi(true);}}
                                    />
                                </div>
                                <div className="pb-3">
                                    <DatePicker dateFormat="Pp" className="font-size-8" showTimeSelect selected={startDate} onChange={date => {setStartDate(date);setSearchApi(true);}} />
                                </div>
                                <div className="pb-3">
                                    <select 
                                        className="form-control" 
                                        id="selectLocale" 
                                        onChange={e => {setResLocale(e.target.value);setSearchApi(true);}}
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
                                        onChange={e => {setResCountry(e.target.value);setSearchApi(true);}}
                                    >
                                        {country.map((item, index) => (
                                            <option key={index} value={item.value}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>  
                                </div>
                                <div className="pb-3">
                                    <input 
                                        type="number" 
                                        id="quantity" 
                                        name="quantity" 
                                        min={min} 
                                        max={max}
                                        value={limit}
                                        onChange={e => {setLimit(e.target.value);setSearchApi(true);}}
                                    />
                                </div>
                                <div className="pb-3">
                                    <input 
                                        type="number" 
                                        id="quantity" 
                                        name="quantity" 
                                        min={min} 
                                        value={offset}
                                        onChange={e => {setOffset(e.target.value);setSearchApi(true);}}
                                    />
                                </div>
                            </div>  
                        </form>
                    </section>
                    <div className="menu">
                        <button onClick={handleLogout} type="button">
                            <FiPower size={18} color='white' />
                        </button>
                    </div>
                </nav>
            </aside>
            <Footer />
        </div>
    )
}
    
export default Profile;