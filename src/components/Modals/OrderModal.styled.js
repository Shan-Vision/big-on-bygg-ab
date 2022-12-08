import styled from 'styled-components';
import { Form } from 'formik';

export const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  padding: 40px;
  width: 90%;
  height: auto;

  @media screen and (min-width: 480px) {
    width: 450px;
    height: 609px;
  }

  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  @media screen and(min-width:1200px) {
    min-width: 528px;
    min-height: 581px;
  }
`;
export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.med};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  text-align: center;
  color: ${p => p.theme.colors.modalTitleColor};

  @media screen and(max-width:480px) {
    font-size: 4vw;
  }

  @media screen and(min-width:1200px) {
    line-height: ${p => p.theme.lineHeights.heading};
  }
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* 
  @media screen and () {
    flex-flow: wrap;
  } */
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  border-radius: 50%;

  background: ${p => p.theme.colors.primaryWhiteColor};
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 1px solid ${p => p.theme.colors.accentColor};

    color: ${p => p.theme.colors.accentColor};
  }
`;
