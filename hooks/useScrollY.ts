import { useEffect, useState } from "react";


export const useScrollY = (): number => {

  const isBrowser = typeof window !== 'undefined';

  const [scrollY, setscrollY] = useState<number>(0);

  const handlScroll = () => {
    const currentScrollY = isBrowser ? window.scrollY : 0;
    setscrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handlScroll, { passive: true});
    return () => window.removeEventListener ('scroll', handlScroll);
  }, []);
  return scrollY;
};
