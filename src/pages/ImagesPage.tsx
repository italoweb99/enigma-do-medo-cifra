// src/components/ImagesPage.jsx
import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { PiArrowFatLeftFill } from "react-icons/pi";
import Header from '../components/Header';
import ScanlinesOverlay from '../components/ScanLineOverlay';
const ImagesPage = () => {
  const location = useLocation();
  const { chars } = location.state || { chars: [] };
  const [inputs, setInputs] = useState({});
  const size = "xl:h-16 h-12 xl:w-16 w-12";
  const nav = useNavigate();
  useEffect(() => {
    const initialInputs = {};
    chars.forEach((char, index) => {
      initialInputs[index] = '';
    });
    setInputs(initialInputs);
  }, [chars]);

  const handleInputChange = (index, value) => {
    const updatedInputs = { ...inputs };
    updatedInputs[index] = value;

    // Update all similar characters
    chars.forEach((char, i) => {
      if (chars[index] === char) {
        updatedInputs[i] = value;
      }
    });

    setInputs(updatedInputs);
  };

  return (
    <ScanlinesOverlay animado = {true}>
    <div className='h-screen bg-emerald-950 flex flex-col justify-center items-center relative'>
      <Header height = {12} index = "1" className = "absolute top-0 left-0"/>
      <div className='group'>
      <div className='absolute flex flex-col top-16 left-6'>
      <PiArrowFatLeftFill className="cursor-pointer text-green-500 group-hover:text-green-400 " onClick = {()=>{nav('/criptograma')}}size={52} />
      <p className = "group-hover:text-green-400 text-green-500 font-xl font-bold mt-1 ml-1">Voltar</p>
      </div>
      </div>
      <div className="flex flex-wrap mt-4 p-4">
        {chars.map((char, index) => (
          char === " " ? (
            <div className={`${size}`}></div>
          ) : (
            <div key={index} className="flex flex-col items-center m-2">
              <img
                src={`/images/keys/${char.toLowerCase()}.svg`}
                alt={char}
                className={`${size}`}
              />
              <input
                type="text"
                value={inputs[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className={`mt-4 p-1 hover:outline-green-500 hover:outline outline-2 outline-offset-2 hover:ring-0 focus:ring-0 focus:outline-green-500 focus:outline-none text-green-500 rounded text-center text-3xl font-semibold bg-emerald-900 hover:bg-emerald-800 ${size}`}
              />
            </div>
          )
        ))}
      </div>
    </div>
    </ScanlinesOverlay>
  );
};

export default ImagesPage;
