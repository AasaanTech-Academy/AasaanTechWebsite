import { useMemo } from 'react';

const useTechiesColor = () => {
  const techiesColor = useMemo(() => {
    const colors = ['#48e180', '#18438e']; // green & blue
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);
  
  return techiesColor;
};

export default useTechiesColor;
