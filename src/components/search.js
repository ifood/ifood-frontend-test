/**
 * IMPORTS
 */
import React from 'react';
import {useDispatch} from 'react-redux';
import * as actions from '../actions/searchactions.js';


/**
 * STYLES
 */
import './styles/search.css'


/**
 * CODE
 */
function Search () {
    const dispatch = useDispatch();

    // function to handle change on input
    function handleChange(event) {
        const value = event.target.value;

        // dispatch to store new search value
        dispatch(actions.setSearchValue(value));
    }

    return (
        <div className="search">
            <input className="searchinput"
                   type="text"
                   placeholder="Buscar playlist"
                   onChange={handleChange}></input>
        </div>
    )
}

/**
 * EXPORTS
 */
export {Search};
