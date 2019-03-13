import jest from 'jest';
import SpotifyService from "../../src/services/Spotify";

/* Mocks */
const buildMockFetcher = () => ({
  get: async () => Promise.resolve({
    data: {
      filters: [{ foo: 'bar' }]
    }
  })
});

describe("Authentication Service", () => {

  test("getUserInformation", async() => {
    const mockFetcher = buildMockFetcher();
    const service = new SpotifyService(mockFetcher);

    const filters = await service.fetchFilters();
    expect(filters.length).toBe(1);
  });

});
