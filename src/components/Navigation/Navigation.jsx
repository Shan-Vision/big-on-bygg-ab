import { Nav, NavItems } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <Nav>
        <NavItems to="/">Home</NavItems>
        <NavItems to="/portfolio">Portfolio</NavItems>
        <NavItems to="/contacts">Contacts</NavItems>
      </Nav>
    </>
  );
};

export default Navigation;
