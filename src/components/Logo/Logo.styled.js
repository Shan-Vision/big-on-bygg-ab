import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const LogoLink = styled(NavLink)`
  font-weight: 700;
  font-size: 18px;
  color: ${p => p.theme.colors.titleTextColor};
`;
