import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/template/Header/Header';
import Main from '../../components/template/Main/Main';
import Logo from '../../components/template/Logo/Logo';
import Nav from '../../components/template/Nav/Nav';
import Footer from '../../components/template/Footer/Footer';

const Profile = () => {
    const history = useHistory();
    const getTokenLocal = localStorage.getItem('spotify_token');
    if (!getTokenLocal) { 
        history.push('/');
    }
    return (
        <div className="app">
            <Header icon="home" title="Spotifood" subtitle="Juntamos música com a vontade de comer." />
            <Main />
            <Logo />
            <Nav />
            <Footer />
        </div>
    )
}
    
export default Profile;