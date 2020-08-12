/**
 * IMPORTS
 */
import React from 'react';
import {Filter} from './filter.js';

/**
 * STYLES
 */
import './styles/sidebar.css'
import spotifood from '../assets/spotifood_name.png';

/**
 * CODE
 */
function Sidebar () {

    return (
        <div className="sidebar">
            <img alt="logo" className="sidelogo" src={spotifood} height="80" width="192"></img>
            <Filter />
        </div>
    )
}

/**
 * EXPORTS
 */
export {Sidebar};
