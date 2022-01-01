export const hours = [
  '12:00',
  '12:30',
  '01:00',
  '01:30',
  '02:00',
  '02:30',
  '03:00',
  '03:30',
  '04:00',
  '04:30',
  '05:00',
  '05:30',
  '06:00',
  '06:30',
  '07:00',
  '07:30',
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
];

export function buildDay(day) {
  if (day < 10) {
    return `0${day}`;
  }
}

export const remaining = (secs) => {
  const minutes = secs / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  const secondsRemaining = Math.floor(secs % 60);
  const minutesRemaining = Math.floor(minutes % 60);
  const hoursRemaining = Math.floor(hours % 24);
  const daysRemaining = Math.floor(days);

  return `
    days remaining: ${daysRemaining} days ${hoursRemaining} hours ${minutesRemaining} minutes ${secondsRemaining} seconds
    hours remaining: ${Math.floor(hours)}
  `;
};

export const getDifference = (str) => {
  let date, time, month, day, year;
  const now = Date.now();
  [date, time] = str.split(' ');
  [month, day, year] = date.split('-');

  const target = new Date(`${month} ${day}, ${year} ${time}`);

  const difference = target - now;

  return difference;
};

export const countdown = (str) => {
  const difference = getDifference(str);

  const seconds = difference / 1000;

  return remaining(seconds);
};
