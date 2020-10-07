import React from 'react';

import Header from '../../components/template/Header';
import Main from '../../components/template/Main';
import Logo from '../../components/template/Logo';
import Nav from '../../components/template/Nav';
import Footer from '../../components/template/Footer';

const Home = () => {
    return (
        <div className="app">
            <Header icon="home" title="Início" subtitle="Segundo Projeto do capítulo de React." />
            <Main />
            <Logo />
            <Nav />
            <Footer />
        </div>
    )
}
    
export default Home;