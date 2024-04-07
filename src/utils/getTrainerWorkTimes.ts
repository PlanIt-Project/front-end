export const getTrainerWorkTimes = (startAt: string, endAt: string) => {
  const times = [];
  const startTime = Number(startAt.split(":")[0]);
  const endTime = Number(endAt.split(":")[0]);

  for (let i = 0; i <= endTime - startTime; i++) {
    times.push(`${startTime + i}:00`);
  }

  return times;
};
