import React, { useState, useEffect } from 'react';

const texts = ["\u2588", 'b', 'c', 'd'];
const text = "asdsddf".split("");

const Encript = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationIndex, setAnimationIndex] = useState(0);
  const [completedText, setCompletedText] = useState([]);

  useEffect(() => {
    
    if (animationIndex < texts.length) {
      const interval = setInterval(() => {
        setAnimationIndex((prevIndex) => prevIndex + 1);
      }, 100); // Altere o valor para ajustar o intervalo de tempo em milissegundos

      return () => clearInterval(interval);
    
}
  }, [animationIndex]);

  useEffect(() => {
    if(currentIndex < text.length){
    if (animationIndex === texts.length) {
      setAnimationIndex(0);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setCompletedText((prevCompletedText) => [
        ...prevCompletedText,
        text[currentIndex]
      ]);
    }
  }
  }, [animationIndex]);

  return (
    <div className="flex justify-center items-center ">
      <p className="text-2xl text-green-500">
        {completedText.join('')}
        {currentIndex < text.length ? text[currentIndex] : ''}
      </p>
      <p className="text-2xl text-green-500">
        {animationIndex < text.length ? texts[animationIndex] : ''}
      </p>
    </div>
  );
};

export default Encript;
