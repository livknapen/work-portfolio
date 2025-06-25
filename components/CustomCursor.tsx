import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // pas aan indien nodig
    };

    checkMobile(); // bij laden
    window.addEventListener('resize', checkMobile); // bij resizen

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      if (cursor) {
        cursor.style.left = `${currentX}px`;
        cursor.style.top = `${currentY}px`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  if (isMobile) return null;

  return <div className="custom-cursor" />;
}
