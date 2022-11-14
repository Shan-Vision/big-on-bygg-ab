import styled from 'styled-components';

export const MenuButton = styled.button`
  display: inline-flex;
  margin: 0;
  padding: 16px;
  background-color: transparent;
  border: none;
  color: ${p => p.theme.colors.mobileMenuColor};
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: auto;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
