import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  p {
    margin: 0;
    width: ;
  }
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
      <p>
        a website by&nbsp;
        <a
          href="http://www.youngandnauseo.us"
          target="_blank"
          rel="noopener noreferrer"
        >
          young and nauseous
        </a>
      </p>
    </StyledFooter>
  );
};
export default Footer;
