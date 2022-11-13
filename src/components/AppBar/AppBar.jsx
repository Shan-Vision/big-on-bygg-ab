import { Header } from './AppBar.styled';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import ContactLinks from 'components/ContactLinks';
import Container from 'components/Container';
import ContainerFlex from 'components/ContainerFlex';

export const AppBar = () => {
  return (
    <>
      <Header>
        <Container>
          <ContainerFlex>
            <Logo />
            <Navigation />
            <ContactLinks />
          </ContainerFlex>
        </Container>
      </Header>
    </>
  );
};

export default AppBar;
