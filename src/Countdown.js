import { countdown } from 'utils';
const Countdown = ({ date }) => {
  console.log(countdown(date));
  return <>{countdown(date)}</>;
};
export default Countdown;
