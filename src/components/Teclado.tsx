// src/components/Keyboard.jsx
import React, { useState } from 'react';
import ToggleButton from './ToggleButton';
import { PiArrowCounterClockwiseBold } from 'react-icons/pi';

const keysRow1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const keysRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const keysRow3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

const Key = ({ char, onClick, className, isTranslate, isNormal }) => (
  <button
    onClick={() => onClick(char)}
    className={`bg-emerald-950 ring-green-500 ring-2 hover:ring-4 ring-offset-0 hover:bg-emerald-900  active:bg-gray-400 text-green-500 font-semibold py-2 px-1 md:px-2 rounded shadow-md m-1 transition-colors duration-200 ease-in-out ${className} flex items-center justify-center`}
  >

    {isNormal ? char : (char === " " || char === "Enter" || char === "Backspace") ? char : isTranslate ? <img src={`/images/keys2/${char.toLowerCase()}.svg`}alt = "?" className='2xl:w-10 w-7 2xl:h-10 h-7' /> : <img src={`/images/keys/${char.toLowerCase()}.svg`} alt = "?" className='2xl:w-10 w-7 2xl:h-10 h-7' />}

  </button>
);

const Teclado = ({ isVisible, onClick, isTranslate = false, reset }) => {
  const [isNormal, setNormal] = useState(false);

  const handleCheck = (checked) => {
    setNormal(checked);
  }

  return (

<div className={`fixed bottom-0 left-0 right-0 2xl:h-2/5  p-4 bg-emerald-950 border-2 border-green-500 rounded-t-lg shadow-lg transform transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>     <div className='flex flex-col items-center h-full 2xl:p-2 p-1 2xl:space-y-2 space-y-1'>
        <div className='flex w-screen'>
      {isTranslate && ( 
        <div className='2xl:ml-12 ml-9 float-left'>
        <ToggleButton isChecked={handleCheck} btnColor='bg-green-500' bgColor='bg-emerald-950' bgColorChecked='green-500' outerRingColor="green-500" text = "Alternar teclado" textParams='text-green-500 font-semibold 2xl:text-lg text-md' size='2xl:h-6 2xl:w-11 h-4 w-7'  ringColor='green-500' ringSize='ring-2' key={'tgBtn'}/>
        <div className='group flex'>
        <PiArrowCounterClockwiseBold className="cursor-pointer ml-4 text-green-500 group-hover:text-green-400" size={28} onClick={()=>{reset(true)}}/>
          <p className='ml-1 cursor-pointer text-green-500 font-semibold text-lg group-hover:text-green-400'>Resetar</p>
          </div>
        </div>)}

      </div>
        <div className="flex justify-center space-x-2 w-full h-full">
          {keysRow1.map((key, index) => (
            <Key key={index} isTranslate={isTranslate} char={key} onClick={onClick} className="flex-grow" isNormal={isNormal} />
          ))}
        </div>
        <div className="flex justify-center space-x-2 w-full h-full">
          {keysRow2.map((key, index) => (
            <Key key={index} isTranslate={isTranslate} char={key} onClick={onClick} className="flex-grow" isNormal={isNormal} />
          ))}
        </div>
        <div className="flex justify-center space-x-2 w-full h-full">
          {keysRow3.map((key, index) => (
            <Key key={index} isTranslate={isTranslate} char={key} onClick={onClick} className="flex-grow" isNormal={isNormal} />
          ))}
          <Key char="Backspace" isTranslate={isTranslate} onClick={onClick} className="flex-grow bg-emerald-950" isNormal={isNormal} />
        </div>
        <div className="flex justify-center space-x-2 w-full h-full">
          <Key char=" " isTranslate={isTranslate} onClick={onClick} className="flex-grow bg-emerald-950" isNormal={isNormal} />
          <Key char="Enter" isTranslate={isTranslate} onClick={onClick} className="flex-grow bg-emerald-950" isNormal={isNormal} />
        </div>
      </div>
    </div>
  );
};

export default Teclado;
