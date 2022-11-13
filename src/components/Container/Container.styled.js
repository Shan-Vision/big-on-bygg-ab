import styled from 'styled-components';

export const WrapperBox = styled.div`
  min-width: 200px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 0;
  padding-bottom: 0;
  
  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
