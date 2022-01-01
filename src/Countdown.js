import { useDispatch } from 'react-redux';
import { addCountdown } from 'store/actions/countdowns';
import styled from 'styled-components';
import { countdown } from 'utils';

const Container = styled.div``;

const Countdown = ({ date }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addCountdown(date));
  };

  return (
    <div>
      {countdown(date).map((str) => {
        return <p>{str}</p>;
      })}
      <button onClick={handleClick()}>save countdown?</button>
    </div>
  );
};
export default Countdown;
