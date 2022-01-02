import { useDispatch } from 'react-redux';
import { addCountdown } from 'store/actions/countdowns';
import styled from 'styled-components';
import { countdown } from 'utils';

const Container = styled.div`
  width: 50%;
`;

const Countdown = ({ date, countdowns }) => {
  const dispatch = useDispatch();

  console.log('stateful countdowns', countdowns);

  const handleClick = () => {
    countdowns.push(date);
    dispatch(addCountdown([...countdowns]));
  };

  return (
    <Container>
      {countdown(date).map((str) => {
        return <p key={str}>{str}</p>;
      })}
      <button onClick={() => handleClick()}>save countdown?</button>
    </Container>
  );
};
export default Countdown;
