// Global
import React, { memo } from 'react';
import PropTypes from 'prop-types';
// Components
import Card from './Card';
// Stylesheets
import './index.scss';

const List = ({ data }) => {

    return(
        <div className='list'>
            {data.map((item, index) => {
                return(
                    <Card 
                        key={index}
                        name={item.name} 
                        imageUrl={item.images[0].url}
                        owner={item.owner.display_name}
                        tracks={item.tracks.total}
                    />
                )
            })}
        </div>
    );
}

List.propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool,
}

export default memo(List);