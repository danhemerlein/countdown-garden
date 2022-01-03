import Footer from 'Footer';
import FullScreenHeight from './FullScreenHeight';

const Closed = () => {
  return (
    <>
      <FullScreenHeight
        unsetBreakpoint="desktop"
        items="center"
        justify="center"
      >
        countdown garden is closed 7AM - 9PM, please check back later
      </FullScreenHeight>
      <Footer />
    </>
  );
};
export default Closed;
