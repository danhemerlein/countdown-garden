import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addCountdown } from 'store/actions/countdowns';
import styled from 'styled-components';
import { above, countdown } from 'utils';

const Container = styled.div`
  width: 100%;

  ${above.desktop`
    width: 50%;
  `}
`;

const StyledButton = styled.button`
  background: transparent;
  margin: 0 auto;
  display: block;
  border: 1px solid black;
  border-radius: 0;
  color: black;
  padding: 0.5rem;
`;

const Countdown = ({ date, countdowns }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const included = countdowns.includes(date);

    if (!included) {
      countdowns.push(date);

      if (countdowns.length < 4) {
        dispatch(addCountdown([...countdowns]));
      } else {
        toast('three saved countdowns is the maxium');
      }
    } else {
      toast('a countdown with that date and time has already been saved');
    }
  };

  return (
    <Container>
      {countdown(date).map((str) => {
        return <p key={str}>{str}</p>;
      })}
      <StyledButton onClick={() => handleClick()}>save countdown?</StyledButton>
    </Container>
  );
};
export default Countdown;
