import { useState } from "react";
import { PiBackspace } from "react-icons/pi";

const Vigenere = ({ onClose }) => {
  const [inputs, setInputs] = useState({
    code: '',
    key: '',
    translate: ''
  });
  const [pref,setPref] = useState("")
  const inputStyle = "placeholder-emerald-700 m-4 mt-4 p-1 hover:outline-green-500 hover:outline outline-2 outline-offset-2 hover:ring-0 focus:ring-0 focus:outline-green-500 focus:outline-none text-green-500 rounded text-center text-3xl font-semibold bg-emerald-900 hover:bg-emerald-800";
  const alfaDic = "abcdefghijklmnopqrstuvwxyz".split("");
  const txtTitulo = "Cifra de Vigenere (Tabula Recta)";

  const handleInput = (e) => {
    const { name, value } = e.target;
    const newInputs = {
      ...inputs,
      [name]: value,
    };
    if(name == 'code'){
      setPref('code');
    }
    else if (name == 'translate'){
      setPref('translate')
    }
    
   
    if(pref === 'code'){
      newInputs.translate = transformText(newInputs.code,newInputs.key,true);
    }else if(pref === 'translate'){
      newInputs.code = transformText(newInputs.translate,newInputs.key,false);
    }

    setInputs(newInputs);
  };

  const transformText = (text, key, isEncrypt) => {
    let newText = "";
    const keyArr = key.split("");
    const textArr = text.toLowerCase().split("");
    const alfaLength = alfaDic.length;

    for (let i = 0; i < textArr.length; i++) {
      const char = textArr[i];
      const textIndex = alfaDic.indexOf(char);
      const keyIndex = alfaDic.indexOf(keyArr[i % keyArr.length]);

      if (textIndex !== -1 && keyIndex !== -1) {
        const newIndex = isEncrypt
          ? (textIndex - keyIndex + alfaLength) % alfaLength
          : (textIndex + keyIndex) % alfaLength;
        newText += alfaDic[newIndex];
      } else {
        newText += char;
      }
    }

    return newText;
  };

  return (
    <div className="flex flex-col justify-center items-center bg-emerald-950 w-full h-screen">
      <p className="text-green-500 font-semibold text-xl text-left w-2/4 ">{txtTitulo.toLocaleUpperCase()}</p>
      <input
        type="text"
        value={inputs.code}
        name="code"
        placeholder="Escreva aqui para traduzir de Vigenere para texto"
        onChange={(e) => handleInput(e)}
        className={`h-64 w-2/4 ${inputStyle}`}
      />
      <div className="flex  justify-left items-center w-2/4">
        <input
          type="text"
          name="key"
          value={inputs.key}
          placeholder="Chave"
          onChange={(e) => handleInput(e)}
          className={`h-10 ${inputStyle}`}
        />
        <p className="text-green-500 font-semibold text-xl text-center  ">Insira a chave e o texto será traduzido automaticamente</p>
      </div>
      <input
        type="text"
        value={inputs.translate}
        name="translate"
        placeholder="Escreva aqui para traduzir de texto para Vigenere"
        onChange={(e) => handleInput(e)}
        className={`h-64 w-2/4 ${inputStyle}`}
      />
    </div>
  );
};

export default Vigenere;
