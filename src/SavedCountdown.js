import _ from 'lodash';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { removeCountdown } from 'store/actions/countdowns';
import styled from 'styled-components';
import { countdown } from 'utils';

const Container = styled.div`
  margin-top: 1rem;
`;

const P = styled.p`
  font-weight: bold;
  margin-top: 0;
`;

const RemoveButton = styled.button`
  margin-right: 0.5rem;
`;

const LinkButton = styled.button`
  margin-left: 0.5rem;
`;

const SavedCountdown = ({ countdowns, title }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const cdsRemove = countdowns;

    _.pull(cdsRemove, title);

    if (countdowns.length < 4) {
      dispatch(removeCountdown([...cdsRemove]));
    } else {
      toast('three saved countdowns is the maxium');
    }
  };

  const createLink = (title) => {
    navigator.clipboard.writeText(
      `http://localhost:3000/d${title.replace(' ', 't')}`
    );
    toast('link copied to clipboard');
  };

  return (
    <Container>
      <P>{title}</P>

      {countdown(title).map((str) => {
        return <p key={str}>{str}</p>;
      })}

      <RemoveButton onClick={() => handleClick()}>
        remove countdown
      </RemoveButton>
      <LinkButton onClick={() => createLink(title)}>copy link</LinkButton>
    </Container>
  );
};

export default SavedCountdown;
