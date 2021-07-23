import styled from 'styled-components';

const HeaderContainer = styled.h1`
  text-align: center;
`;

const Header: React.FC = () => {
  return <HeaderContainer>CRIDB - Wiki importer</HeaderContainer>;
};

export default Header;
