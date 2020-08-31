import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const returnOptions = (data) => {
    let options = [];
    data && data.length > 0 &&
    data.forEach(element => {
        let option = {
            key: element.value,
            text: element.name,
            value: element.value
        };
    options.push(option)    
    }); 
    return options;
}


const FilterPlaylists = ({playlistsFilters, handleChange}) => {
    const locale = playlistsFilters.filter((item) => item.id === 'locale')
    let values
    if(locale && locale.length > 0){
        values = returnOptions(locale[0].values)
    }
    const country = playlistsFilters.filter((item) => item.id === 'country')
    let countries
    if(country && country.length > 0){
        countries = returnOptions(country[0].values)
    }

    return (
        <div className='plyalist-filters'>
            <Dropdown
                placeholder='Select Locale'
                name='locale'
                fluid
                search
                selection
                className="filter-dropdown"
                onChange={handleChange}
                options={values || []}
            />

            <Dropdown
                placeholder='Select Country'
                selection
                search
                name='country'
                fluid
                className="filter-dropdown"
                options={countries || []}
                onChange={handleChange}
            />

            <input
                className='filter-limit'
                min='1'
                type='number'
                max="50"
                placeholder='Limit number'
                name='limit'
                onChange={handleChange}
            />

            <input
                className='filter-limit'
                type='date'
                name='timestamp'
                onChange={handleChange}
            />
            

            <input
                className='filter-limit'
                min={1}
                type='number'
                max={50}
                placeholder='Offset Number'
                name='offset'
                onChange={handleChange}
            />
        </div>
    )
}

export default FilterPlaylists
