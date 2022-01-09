import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  p {
    margin: 0;
  }
`;

const Attribution = styled.p`
  text-align: right;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        view code on&nbsp;
        <a
          href="https://github.com/danhemerlein/countdown-garden"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>

      <Attribution>
        a website by&nbsp;
        <a
          href="http://www.danhemerlein.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          dan hemerlein
        </a>
        <span>&nbsp;c/o&nbsp;</span>
        <a
          href="http://www.youngandnauseo.us"
          target="_blank"
          rel="noopener noreferrer"
        >
          young and nauseous
        </a>
      </Attribution>
    </StyledFooter>
  );
};
export default Footer;
