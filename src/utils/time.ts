export const convertMillisecondsToMinutesAndSeconds = (milliseconds: number): string => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  return `${minutes}:${("0" + seconds).slice(-2)}`;
}
