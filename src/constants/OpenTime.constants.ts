export const OPEN_TIME = () => {
  // Generates times from 0:00 to 23:00
  const openTimes = Array.from({ length: 24 }, (_, i) => i).map((hour) => {
    return `${hour < 10 ? "0" : ""}${hour}:00`;
  });

  const dawnTimes = openTimes.slice(0, 6); // 0:00 to 5:00
  const morningTimes = openTimes.slice(6, 12); // 6:00 to 11:00
  const afternoonTimes = openTimes.slice(12, 18); // 12:00 to 17:00
  const nightTimes = openTimes.slice(18); // 18:00 to 23:00

  return { dawnTimes, morningTimes, afternoonTimes, nightTimes };
};
