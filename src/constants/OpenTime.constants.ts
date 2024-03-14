export const OPEN_TIME = () => {
  const openTimes = Array.from({ length: 18 }, (_, i) => 6 + i).map((hour) => {
    return `${hour < 10 ? "0" : ""}${hour}:00`;
  });

  const morningTimes = openTimes.slice(0, 6); // 6AM to 11AM
  const afternoonTimes = openTimes.slice(6, 12); // 12PM to 5PM
  const eveningTimes = openTimes.slice(12); // 6PM to 11PM

  return { morningTimes, afternoonTimes, eveningTimes };
};
