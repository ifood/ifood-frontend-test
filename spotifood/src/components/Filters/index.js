// Global
import React, { useState, useEffect } from 'react';
// Components
import { Input } from 'semantic-ui-react'
// Api
import { getFilters } from '../../api';

function Filters({ visible, onChange, filters }) {
    const [locale, setLocale] = useState();
    const [countrys, setCountrys] = useState();

    useEffect(() => {
        async function fetchData() {
            const response = await getFilters();
            const data = response.filters;

            setLocale(data[0]);
            setCountrys(data[1]);
        }

        fetchData();
    }, []);

    const localeValues = locale ? locale.values.map((local, index) => ({ text: local.name, value: local.value, key: index })) : null;
    const countryValues = countrys ? countrys.values.map((country, index) => ({ text: country.name, value: country.value, key: index })) : null;

    const {
        timestamp,
    } = filters;

    return(
        <div className='header'>
            {visible && <div className='filters'>
                <Input
                    label='Data e Horário'
                    type='datetime-local'
                    step='1'
                    value={timestamp}
                    onChange={onChange('timestamp')}
                />
            </div>}
        </div>
    );
}

export default Filters;