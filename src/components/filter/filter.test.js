import React from 'react';
import { create, act } from 'react-test-renderer';

import Filter from '.';

import { playlistResponseMocks } from '../../services/utils/mocks/playlist.response';

describe('Filter Component', () => {
    const mockFunc = jest.fn();
    let root;
    
    beforeAll(() => {
        act(() => {
            root = create(
                <Filter 
                    parameters='?'
                    playlists={playlistResponseMocks}
                    setFilteredPlaylist={mockFunc}
                    setParameters={mockFunc}
                />
            )
        });
    });

    it('should to be defined', () => {
        expect(Filter).toBeDefined();
    });
});
