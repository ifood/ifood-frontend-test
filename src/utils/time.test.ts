import { convertMillisecondsToMinutesAndSeconds } from './time';

it('Convert milliseconds to minutes and seconds', () => {
  const milliseconds = 288391;
  const minutesAndSeconds = convertMillisecondsToMinutesAndSeconds(milliseconds);
  expect(minutesAndSeconds).toBe('4:48');
});
