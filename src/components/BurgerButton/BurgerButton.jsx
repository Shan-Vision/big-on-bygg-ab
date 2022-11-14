import { MenuButton } from './BurgerButton.styled'
import { GiHamburgerMenu } from 'react-icons/gi';

export const BurgerButton = ({ onClick }) => {
  return (
    <>
      <MenuButton type="button" onClick={onClick}>
          <GiHamburgerMenu size='24px' color="black"/> 
      </MenuButton>
    </>
  );
};

export default BurgerButton;
