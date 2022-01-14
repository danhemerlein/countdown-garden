import styled from 'styled-components';
import FullScreenHeight from './FullScreenHeight';

const P = styled.p`
  text-align: center;
`;

const Closed = ({ footerHeight }) => (
  <FullScreenHeight
    unsetBreakpoint="none"
    items="center"
    justify="center"
    direction="column"
    addtlOffset={footerHeight}
  >
    <P>
      <em>countdown garden is closed 7AM - 9PM</em>
    </P>
    <P>
      <em>touch some grass and check back later</em>
    </P>
  </FullScreenHeight>
);
export default Closed;
