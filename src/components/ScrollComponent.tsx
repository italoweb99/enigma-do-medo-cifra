import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const ScrollComponent = ({onComplete,children,className = ''}) => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;

      if (scrollPosition + screenHeight >= document.body.scrollHeight) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
        onComplete(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Chamada inicial para verificar a posição do scroll ao carregar a página
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showComponent && <div className={`fixed bottom-0 h-fit w-screen ${className}`}>{children}</div>}
    </div>
  );
};

export default ScrollComponent;
