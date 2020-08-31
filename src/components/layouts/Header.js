import React from 'react'
import Navigation from './Navigation.js'

// import './style.scss'

const Header = () => {
    return (
        <>
       <div className="header">
            {/* <Navigation /> */}
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Spotifood</span>
                    {/* <span className="heading-primary--sub"> In Action</span> */}
                </h1>

                <p className="btn btn--white btn--animated">
                    <span>"If music be the food of love, play on."</span>
                    <br/>
                    <span>– William Shakespeare</span>
                </p>
            </div>
       </div>
       </>
    )
}

export default Header;
