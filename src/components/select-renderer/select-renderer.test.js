import React from 'react';
import SelectRenderer from './select-renderer';
import { shallow } from 'enzyme';

// Mounting - Full DOM rendering including child components
// Shallow - Renders only the single component, not including its children,
// this is useful to isolate the component for pure unit testing.
// Render - Renders to static HTML, including children

it('should render correctly with props', () => {
    const fieldValues = {"country": "Brasil"};
    const name = "País";
    const values = [
        {
            "value": "AU",
            "name": "Australia"
        },
        {
            "value": "DE",
            "name": "Alemanhã"
        },
        {
            "value": "BR",
            "name": "Brasil"
        },
        {
            "value": "PT",
            "name": "Portugal"
        },
        {
            "value": "en_US",
            "name": "EUA"
        },
        {
            "value": "RU",
            "name": "Rússia"
        }
    ];

    const component = shallow(<SelectRenderer
        options={values}
        label={name}
        inputProps={{
          name: 'country',
          id: 'country',
        }}
        value={fieldValues}
        onChange={null}/>);
    expect(component).toMatchSnapshot();
});

