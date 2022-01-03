import _ from 'lodash';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { removeCountdown } from 'store/actions/countdowns';
import styled from 'styled-components';
import { countdown } from 'utils';

const P = styled.p`
  font-weight: bold;
`;

const Button = styled.button`
  margin-bottom: 1rem;
`;

const SavedCountdown = ({ date, countdowns, title }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const cdsRemove = countdowns;

    _.pull(cdsRemove, title);

    if (countdowns.length < 4) {
      dispatch(removeCountdown([...countdowns]));
    } else {
      toast('three saved countdowns is the maxium');
    }
  };

  return (
    <div>
      <P>{title}</P>
      {countdown(date).map((str) => {
        return <p key={str}>{str}</p>;
      })}
      <Button onClick={() => handleClick()}>remove countdown</Button>
    </div>
  );
};

export default SavedCountdown;
