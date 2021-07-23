import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <a href="https://login.cridb.com">CRIDB</a>
    </FooterContainer>
  );
};

export default Footer;
