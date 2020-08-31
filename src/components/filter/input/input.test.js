import React from 'react';
import { create, act } from 'react-test-renderer';
import Input from '.';

describe('Input Component', () => {
    const mockFunc = jest.fn();
    let root;
    
    beforeAll(() => {
        act(() => {
            root = create(
                <Input 
                    id='id-test'
                    mountParam={mockFunc}
                    type='text'
                />
            )
        });
    });

    it('should to be defined', () => {
        expect(Input).toBeDefined();
    });

    it('should to be match Snapshot', () => {
        expect(root.toJSON()).toMatchSnapshot();
    })
});
