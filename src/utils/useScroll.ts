import { useEffect, useState } from 'react';

const useScroll = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [atBottom, setAtBottom] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);

      const pageHeight = document.body.scrollHeight;
      setAtBottom(window.innerHeight + window.scrollY >= pageHeight);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return { scrollY, atBottom, scrollToTop };
};

export default useScroll;
