import React from 'react';
//import './tailwind.css';

const ScanlinesOverlay = ({ children, animado = false}) => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className={`w-full h-full ${animado == true ? "animate-scanlines": ""}`} style={{ background: 'repeating-linear-gradient(transparent 0px, transparent 1px, rgba(0, 0, 0, 0.25) 2px, rgba(0, 0, 0, 0.25) 4px)' }}></div>
      </div>
      {children}
    </div>
  );
};

export default ScanlinesOverlay;
