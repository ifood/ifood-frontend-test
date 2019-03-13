import jest from 'jest';
import AuthenticationService from "../../src/services/Authentication";

/* Mocks */
const buildMockFetcher = () => ({
  get: async () => Promise.resolve({
    data: true
  })
});

describe("Authentication Service", () => {

  test("getUserInformation", async() => {
    const mockFetcher = buildMockFetcher();
    const service = new AuthenticationService(mockFetcher);

    const userInfo = await service.getUserInformation('dumb-access-token');
    expect(userInfo).toBe(true);
  });

});
