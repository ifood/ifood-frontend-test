// Global
import React, { memo } from 'react'
import PropTypes from 'prop-types';
// Stylesheets
import './index.scss';

const Card = ({ name, imageUrl, owner, description, tracks, index }) => {
    return (
        <div className='card-playlist' key={index}>
            <img
                className='card-playlist__image'
                alt='playlist`s description'
                src={imageUrl}
            />
            <div className='card-playlist__description'>
                <div className='card-playlist__description__name'>{name}</div>
                <div className='card-playlist__description__description'>{description}</div>
                <div className='card-playlist__description__owner'>Creator: {owner}</div>
                <div className='card-playlist__description__tracks'>Tracks: {tracks}</div>
            </div>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    owner: PropTypes.string,
    description: PropTypes.string,
    tracks: PropTypes.number,
    index: PropTypes.number,
};

export default memo(Card);