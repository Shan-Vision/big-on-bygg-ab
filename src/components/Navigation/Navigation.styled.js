import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 93px;
    margin-right: 0;
  }
  display: flex;
  gap: 50px;
`;
export const NavItems = styled(NavLink)`
  position: relative;
  display: block;
  padding-bottom: 32px;
  padding-top: 32px;

  font-family: ${p => p.theme.fonts.body};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.titleTextColor};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentColor};
  }
  &.active {
    color: ${p => p.theme.colors.accentColor};
  }
  &.active::after {
    content: ' ';
    width: 100%;
    height: 4px;
    position: absolute;
    bottom: -2px;
    left: 0;

    background-color: ${p => p.theme.colors.accentColor};
    border-radius: 2px;
  }
`;