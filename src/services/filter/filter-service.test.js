import { filterResponseMock } from '../utils/mocks/filter.response';
import * as FilterService from '.';

describe('Filter Service', () => {
    it('should contain the expected size of the filters', async () => {
        const response = await FilterService.getFilters();
        expect(response.filters).toHaveLength(5);
    });

    it('should containt values equal to the information mock', async () => {
        const response = await FilterService.getFilters();
        expect(JSON.stringify(response.filters)).toBe(JSON.stringify(filterResponseMock));
        expect(response.filters).toEqual(filterResponseMock);
    });
});
