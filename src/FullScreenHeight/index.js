import { use100vh } from 'react-div-100vh';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { BREAKPOINT } from 'utils';

const Container = styled.div`
  height: calc(100% - 16px);
  display: flex;
  padding: 1rem;

  ${({ justify }) => justify && `justify-content: ${justify};`}
  ${({ items }) => items && `align-items: ${items};`}
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ noTopPadding }) => noTopPadding && `padding-top: 0;`}
`;

const FullScreenHeight = ({
  children,
  unsetBreakpoint,
  justify,
  items,
  direction,
  noTopPadding,
  addtlOffset
}) => {
  // const FOOTER_HEIGHT = 50;
  const offset = addtlOffset;

  const height = use100vh();

  let breakpoint;

  const mediaQuery = useMediaQuery({
    query: `(min-width: ${BREAKPOINT[unsetBreakpoint]})`
  });

  if (unsetBreakpoint !== 'none') {
    breakpoint = mediaQuery;
  } else {
    breakpoint = 'none';
  }

  const generateHeight = (mediaQuery, height, heightOffset) => {
    if (mediaQuery === 'none') {
      return height - heightOffset;
    }
    return mediaQuery ? height - heightOffset : 'auto';
  };

  return (
    <div style={{ height: generateHeight(breakpoint, height, offset) }}>
      <Container
        noTopPadding={noTopPadding}
        justify={justify}
        items={items}
        direction={direction}
      >
        {children}
      </Container>
    </div>
  );
};

export default FullScreenHeight;
