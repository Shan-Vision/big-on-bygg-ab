import { Header } from './AppBar.styled';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import ContactLinks from 'components/ContactLinks';
import Container from 'components/Container';
import ContainerFlex from 'components/ContainerFlex';
import BurgerButton from 'components/BurgerButton';
import  MobileMenu  from 'components/Modals/MobileMenu';
import { useState } from 'react';

export const AppBar = () => {
  const [mobileMenu, SetMobileMenu] = useState(false);
 const onMobileMenuOpen = event => {
   SetMobileMenu(true);
 };
  const onMobileMenuClose = event => {
    SetMobileMenu(false);
  };
  return (
    <>
      <Header>
        <Container>
          <ContainerFlex>
            <Logo />
            <BurgerButton  onClick={onMobileMenuOpen}/>
                      
            {mobileMenu && <MobileMenu onClose={onMobileMenuClose} />}
            <Navigation />
            <ContactLinks />
          </ContainerFlex>
        </Container>
      </Header>
    </>
  );
};

export default AppBar;
