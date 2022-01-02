import toast from 'react-hot-toast';
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

    if (countdowns.length < 4) {
      dispatch(addCountdown([...countdowns]));
    } else {
      toast('three saved countdowns is the maxium');
    }
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
