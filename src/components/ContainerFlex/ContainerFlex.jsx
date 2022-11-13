import styled from 'styled-components';

const WrapperFlex = styled.div`
  display: flex;
  align-items: center;
  @media screen and(max-width:1200px) {
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContainerFlex = ({ children }) => {
  return <WrapperFlex>{children}</WrapperFlex>;
};

export default ContainerFlex;
