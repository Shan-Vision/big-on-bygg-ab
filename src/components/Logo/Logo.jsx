import { HiHomeModern } from 'react-icons/hi2';
import { LogoWrapper, LogoLink } from './Logo.styled';

export const Logo = () => {
  return (
    <>
      <LogoWrapper>
        <HiHomeModern size="30px" color="red"/>
        <LogoLink to="/">Big-on Bygg AB</LogoLink>
      </LogoWrapper>
    </>
  );
};

export default Logo;
