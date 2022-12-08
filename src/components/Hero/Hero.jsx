import {
  HeroSection,
  HeroTitle,
  HeroButton,
  HeroContainer,
} from './Hero.styled';

export const Hero = ({ onClick }) => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroTitle>Эффективные решения для вашего бизнеса</HeroTitle>
        <HeroButton onClick={() => onClick()}>Заказать услугу</HeroButton>
      </HeroContainer>
    </HeroSection>
  );
};
export default Hero;
