// Global
import React, { useState, useEffect } from 'react';
// Components
import { Input, Dropdown } from 'semantic-ui-react'
// Api
import { getFilters } from '../../api';

const Filters = ({ visible, onChange, filters }) => {
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
    const countryValues = countrys ? countrys.values.map((country, index) => ({ text: country.name, value: country.value, key: index })) : null; // tratar erro pra US

    const {
        timestamp,
        locale: localeState,
        country: countryState,
        limit,
        offset,
    } = filters;

    return(
        <div className='header'>
            {visible && <div className='filters'>
                <Dropdown
                    options={localeValues}
                    onChange={onChange('locale')}
                    value={localeState}
                    placeholder='Locale'
                    selection
                    fluid
                />
                <Dropdown
                    options={countryValues}
                    onChange={onChange('country')}
                    value={countryState}
                    placeholder='País'
                    selection
                    fluid
                />
                <Input
                    label='Data e Horário'
                    type='datetime-local'
                    step='1'
                    value={timestamp}
                    onChange={onChange('timestamp')}
                />
                <Input
                    label='Quantidade'
                    type='number'
                    value={limit}
                    onChange={onChange('limit')}
                    min={1}
                    max={50}
                />
                <Input
                    label='Página'
                    type='number'
                    value={offset}
                    onChange={onChange('offset')}
                />
            </div>}
        </div>
    );
}

export default Filters;