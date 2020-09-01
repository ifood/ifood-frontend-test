import * as PlaylistService from '.';

describe('Playlist Service', () => {
    it('should contain the expected default informations', async () => {
        const data = await PlaylistService.getPlaylist();
        expect(data.playlists.limit).toBe(20);
        expect(data.playlists.total).toBe(12);
        expect(data.playlists.offset).toBe(0);
    });

    it('should contain the expected 5 playlists according to parameters', async () => {
        const parameters = '?&limit=5';
        const data = await PlaylistService.getPlaylist(parameters);
        expect(data.playlists.limit).toBe(5);
    });

    it('should contain the expected 3 offset according to parameters', async () => {
        const parameters = '?&offset=3';
        const data = await PlaylistService.getPlaylist(parameters);
        expect(data.playlists.offset).toBe(3);
    });
});
