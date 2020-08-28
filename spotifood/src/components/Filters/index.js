// Global
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// Components
import { Input, Dropdown } from 'semantic-ui-react'
// Api
import { getFilters } from '../../api';

const Filters = ({ filters, errors, search, onChange, onSearch }) => {
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

    return(
        <div className='header'>
            <div className='filters'>
                <Input
                    label='Buscar'
                    placeholder='Buscar'
                    type='text'
                    icon='search'
                    value={search}
                    onChange={onSearch}
                />
                <Dropdown
                    options={localeValues}
                    onChange={onChange('locale')}
                    value={filters['locale']}
                    error={errors['localeError']}
                    placeholder='Locale'
                    selection
                    fluid
                />
                <Dropdown
                    options={countryValues}
                    onChange={onChange('country')}
                    value={filters['country']}
                    error={errors['countryError']}
                    placeholder='País'
                    selection
                    fluid
                />
                <Input
                    label='Data e Horário'
                    type='datetime-local'
                    step='1'
                    value={filters['timestamp']}
                    error={errors['timestampError']}
                    onChange={onChange('timestamp')}
                />
                <Input
                    label='Quantidade'
                    type='number'
                    value={filters['limit']}
                    error={errors['limitError']}
                    onChange={onChange('limit')}
                    min={1}
                    max={50}
                />
                <Input
                    label='Página'
                    type='number'
                    value={filters['offset']}
                    error={errors['offsetError']}
                    onChange={onChange('offset')}
                />
            </div>
        </div>
    );
};

Filters.propTypes = {
    filters: PropTypes.object,
    errors: PropTypes.object,
    search: PropTypes.string,
    onChange: PropTypes.func,
    onSearch: PropTypes.func,
};

export default Filters;
