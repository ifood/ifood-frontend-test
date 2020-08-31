import React from 'react'


const Header = ({button, icon, headersize}) => {
    return (
        <>
       <div className={`header ${headersize}`}>
            <div className="header__text-box">
                <h1 className="header__text-box__spotifood">
                    <span className="welcome">Welcome to </span>
                    <span>Spotifood</span>
                </h1>

                <p>
                    <span className="quote">"If music be the food of love, play on."</span>
                    <br/>
                    <span className="quote italic">– William Shakespeare</span>
                </p>
                {button ? button : icon}
                
            </div>
       </div>
       </>
    )
}

export default Header;
