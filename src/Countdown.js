import { countdown } from 'utils';
// import { addCountdown } from '
const Countdown = ({ date }) => {
  console.log(countdown(date));
  return <>{countdown(date)}</>;
};
export default Countdown;
