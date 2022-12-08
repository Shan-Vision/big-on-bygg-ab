import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Container, Box } from './MobileMenu.styled';

const mobMenuRoot = document.querySelector('#mobile-menu-root');

const MobileMenu = ({ onClose }) => {
  useEffect(() => {
    const onEscapeClick = event => {
      if (event.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', onEscapeClick);
    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [onClose]);

  const onBackDropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <Container onClick={onBackDropClick}>
      <div onClick={onClose}>
        {/* <button type="button">Close</button> */}
        <Box></Box>
      </div>
    </Container>,
    mobMenuRoot
  );
};

export default MobileMenu;
