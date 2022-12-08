import Hero from 'components/Hero';
import OrderModal from 'components/Modals/OrderModal';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [isModalOpen]);

  const onClick = () => {
    setIsModalOpen(true)
  }
  return (
    <main>
      <Hero onClick={onClick} />
      {isModalOpen && <OrderModal onModalClose={() => setIsModalOpen(false)} />}
    </main>
  );
};

export default Home;
