import styled from 'styled-components';

const StyledFooter = styled.footer`
  ${'' /* min-height: 22px; */}
  padding: 2rem;
  p {
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        a website by&nbsp;
        <a
          href="http://www.youngandnauseo.us"
          target="_blank"
          rel="noopener noreferrer"
        >
          young and nauseous
        </a>
        &nbsp;
        <a
          href="https://github.com/danhemerlein/countdown-garden"
          target="_blank"
          rel="noopener noreferrer"
        >
          view on GitHub
        </a>
      </p>
    </StyledFooter>
  );
};
export default Footer;
