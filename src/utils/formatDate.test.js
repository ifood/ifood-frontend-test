import { formatDate } from './formatDate';

it('should format date', () => {
  expect(formatDate('Fri Jan 11 2019 11:28:41 GMT-0200 (Horário de Verão de Brasília)')).toBe('2019-01-11T11:28:41Z');
});
