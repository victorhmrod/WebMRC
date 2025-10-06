import { useEffect, useState } from 'react';
import { IoArrowUpCircleOutline } from 'react-icons/io5';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`scroll-up-btn ${isVisible ? 'show' : ''}`}
      onClick={handleClick}
      aria-label="Voltar ao topo"
    >
      <IoArrowUpCircleOutline />
    </button>
  );
};

export default ScrollToTop;
