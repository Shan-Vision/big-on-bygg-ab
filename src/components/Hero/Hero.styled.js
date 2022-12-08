import styled from 'styled-components';
import img from '../../images/ellenadd-1_websize-1600x600.jpg';

export const HeroSection = styled.div`
  padding: 0;
  max-width: 480px;
  min-height: 400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${img});
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${img});
  }
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${p => p.theme.colors.headerBgcColor};
  @media screen and (min-width: 481px) {
    max-width: 768px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
    }
  }
  @media screen and (min-width: 769px) {
    max-width: 1600px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
    }
  }
  @media screen and(min-width:1200px) {
    height: 600px;
  }
`;

export const HeroContainer = styled.div`
  min-width: 200px;
  margin: 0 auto;
  width: 360px;
  padding: 0;
  text-align: center;
  @media screen and (min-width: 1200px) {
    width: 696px;
  }
`;
export const HeroTitle = styled.h1`
  margin-bottom: 30px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.large};
  line-height: 1.62;
  letter-spacing: 0.06em;
  color: ${p => p.theme.colors.primaryWhiteColor};
  text-transform: uppercase;

  @media screen and (min-width: 1200px) {
    font-size: 44px;
    line-height: 1.36;
  }
`;

export const HeroButton = styled.button`
  padding: 10px 32px;

  background-color: ${p => p.theme.colors.accentColor};
  border-style: none;
  cursor: pointer;
  border-radius: 4px;

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.87;
  letter-spacing: 0.06em;
  color: ${p => p.theme.colors.primaryWhiteColor};
`;
