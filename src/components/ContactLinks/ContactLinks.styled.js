import styled from 'styled-components';

export const ContactList = styled.ul`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    margin-left: auto;
    gap: 50px;
  }
`;
export const ContactItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
