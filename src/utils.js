import { css } from 'styled-components';

/**
 * Returns string - a number of greater than four digits will have appropriate comma separation
 * @param {number} num
 */
export function numberWithCommas(num) {
  return typeof num === 'number'
    ? num
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : undefined;
}

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

  return [
    `${daysRemaining} days ${hoursRemaining} hours ${minutesRemaining} minutes ${secondsRemaining} seconds`,
    `total hours remaining: ${numberWithCommas(hours)}`,
    `total minutes remaining: ${numberWithCommas(minutes)}`,
    // `total seconds remaining: ${numberWithCommas(secs)}`,
  ];
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

// media queries in styled components
const sizes = {
  mobile: 320,
  tablet: 720,
  desktop: 1024,
  'desktop-max': 1440,
};

export const above = Object.keys(sizes).reduce((accumulater, label) => {
  accumulater[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return accumulater;
}, {});

export const BREAKPOINT = {
  mobile: '320px',
  tablet: '720px',
  desktop: '1024px',
  desktopMax: '1440px',
};

export const quotes = [
  '"So it is: We are not given a short life but we make it short, and we are not ill-supplied but wasteful of it...Life is long know if you know how to use it." - Seneca',

  '"To be idle is a short toad to death and to be dilligent is a way of life; foolish people are idle, wise people are dilligent" - Buddah',

  '"A man who wastes and hour of time has not discovered the value of life" - Charles Darwin',

  `"O Allah, I seek refuge if you from incapability and laziness" - Islamic Du'a -`,

  '"Go to the ant, O sluggard, Observe her ways and be wise, Which, having no chief, Officer or ruler, Prepares her food in the summer And gathers her provision in the harvest" - Proverbs 6:6-8',
];

export const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
