import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-family: ${p => p.theme.fonts.body};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.primaryTextColor};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ContactButtonTo = ({ mailto, label }) => {
  
  return (
    <StyledLink
      to="#"
      onClick={e => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </StyledLink>
  );
};

export default ContactButtonTo;
