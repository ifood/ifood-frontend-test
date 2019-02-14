import React from 'react';
import RenderField from './render-field';
import { shallow } from 'enzyme';

// Mounting - Full DOM rendering including child components
// Shallow - Renders only the single component, not including its children,
// this is useful to isolate the component for pure unit testing.
// Render - Renders to static HTML, including children

it('should render correctly with no props', () => {
    const component = shallow(<RenderField/>);
    expect(component).toMatchSnapshot();
});

it('should render correctly with props', () => {
    const field = {
        "filters": [
            {
                "id": "locale",
                "name": "Locale",
                "values": [
                    {
                        "value": "en_AU",
                        "name": "en_AU"
                    },
                    {
                        "value": "de_DE",
                        "name": "de_DE "
                    },
                    {
                        "value": "pt_BR",
                        "name": "pt_BR"
                    },
                    {
                        "value": "fr_FR",
                        "name": "fr_FR"
                    },
                    {
                        "value": "en_US",
                        "name": "en_US"
                    },
                    {
                        "value": "es_AR",
                        "name": "es_AR"
                    }
                ]
            },
            {
                "id": "country",
                "name": "País",
                "values": [
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
                ]
            },
            {
                "id": "timestamp",
                "name": "Data e Horário",
                "validation": {
                    "primitiveType": "STRING",
                    "entityType": "DATE_TIME",
                    "pattern": "yyyy-MM-ddTHH:mm:ss"
                }
            },
            {
                "id": "limit",
                "name": "Quantidade",
                "validation": {
                    "primitiveType": "INTEGER",
                    "min": 1,
                    "max": 50
                }
            },
            {
                "id": "offset",
                "name": "Página",
                "validation": {
                    "primitiveType": "INTEGER"
                }
            }
        ]
    };
    const filterValues = {"country":"Brasil"};
    const component = shallow(<RenderField {...field} onChange={null} fieldValues={filterValues}/>);
    expect(component).toMatchSnapshot();
});

