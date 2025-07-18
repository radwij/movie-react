export const minutesToHourAndMinutes = (totalMinutes) => {
  if (!totalMinutes || typeof totalMinutes !== 'number' || totalMinutes <= 0) {
    return "N/A"
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const hourString = (hours > 0) ? `${hours} hour` : '';
  const minuteString = (minutes >0) ? `${minutes} minutes` : ''; 

  return `${hourString} ${minuteString}`.trim();
}