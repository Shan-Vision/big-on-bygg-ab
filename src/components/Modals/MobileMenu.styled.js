import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  border: 1px solid green;
  top: 0;
  left: 0;
  width: 100vw;
  height: 110vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* transform: scale(0.5);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1); */

  &.is-open {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
    pointer-events: visible;
  }
  @media screen and(min-width:768px) {
    display: none;
  }
`;

export const Box = styled.div`
  width: 150px;
  height: 150px;
  text-align: center;
  background-color: green;
  border-radius: 10px;
`;
