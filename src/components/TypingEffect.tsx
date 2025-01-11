import { useState, useEffect } from "react";

const TypingEffect = ({ texts, index = 1 ,speed = 100, textClass = "", divClass = "", onComplete }) => {
  const [displayedTexts, setDisplayedTexts] = useState([]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typeNextChar = () => {
      if (currentTextIndex < texts.length) {
        if (currentCharIndex < texts[currentTextIndex].length) {
          setDisplayedTexts((prev) => {
            const newTexts = [...prev];
            if (!newTexts[currentTextIndex]) newTexts[currentTextIndex] = "";
            newTexts[currentTextIndex] += texts[currentTextIndex].charAt(currentCharIndex);
            return newTexts;
          });
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          setCurrentTextIndex(currentTextIndex + 1);
          setCurrentCharIndex(0);
        }
      }
    };

    const interval = setInterval(typeNextChar, speed);
    return () => clearInterval(interval);
  }, [texts, speed, currentTextIndex, currentCharIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentTextIndex >= texts.length && currentCharIndex === 0) {
      setShowCursor(false);
      if (onComplete) {
        onComplete(index);
      }
    }
  }, [currentTextIndex, currentCharIndex, texts.length, onComplete]);

  return (
    <div className={`flex flex-col p-5 ${divClass}`}>
      {displayedTexts.map((line, index) => (
        <p className={textClass} key={index}>
          {line}
          {index === currentTextIndex && showCursor && <span className="bg-green-500">|</span>}
        </p>
      ))}
    </div>
  );
};

export default TypingEffect;
