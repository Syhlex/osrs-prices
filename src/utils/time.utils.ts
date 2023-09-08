export const minutesAgo = (unixTimestampInSeconds: number) => {
  const currentTime = Date.now() / 1000;
  const timeDifference = currentTime - unixTimestampInSeconds;
  const minutes = Math.floor(timeDifference / 60);
  return minutes;
};
