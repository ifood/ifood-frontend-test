import React from 'react';
import { create, act } from 'react-test-renderer';
import Select from '.';

import { filterResponseMock } from '../../../services/utils/mocks/filter.response';

describe('Select Component', () => {
    const mockFunc = jest.fn();
    let root;
    
    beforeAll(() => {
        act(() => {
            root = create(
                <Select 
                    defaultValue='Click'
                    id='id-test'
                    mountParam={mockFunc}
                    values={filterResponseMock[0].values}
                />
            )
        });
    });

    it('should to be defined', () => {
        expect(Select).toBeDefined();
    });

    it('should to be match Snapshot', () => {
        expect(root.toJSON()).toMatchSnapshot();
    });
});
