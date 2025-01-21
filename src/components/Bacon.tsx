import { useState } from "react";
import { PiBackspace } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Bacon = ({ onClose }) => {
  const [inputs, setInputs] = useState('');
  const [text, setText] = useState('');
  const inputStyle = "xl:h-64 h-52 w-2/4 placeholder-emerald-700 m-4 xl:mt-4 m-2  p-1 hover:outline-green-500 hover:outline outline-2 outline-offset-2 hover:ring-0 focus:ring-0 focus:outline-green-500 focus:outline-none text-green-500 rounded text-center text-3xl font-semibold bg-emerald-900 hover:bg-emerald-800";
  const morCod = ["aaaaa", "aaaab", "aaaba", "aaabb", "aabaa", "aabab", "aabba", "aabbb", "abaaa", "abaab", "ababa", "ababb", "abbaa", "abbab", "abbba", "abbbb", "baaaa", "baaab", "baaba", "baabb", "babaa", "babab", "babba", "babbb", " "];
  const alfaDic = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z", " "];
 const txtTitulo = "Cifra de Francis Bacon (nessa cifra i/j e u/v são a mesma letra)";
  const btnStyle = "text-center rounded hover:bg-emerald-900 text-green-500 m-2 bg-emerald-950 border-2 border-green-500";
  const handleInput = (e, val) => {
    if (val) {
      setInputs(e);
      let newText = '';
      const code = e.toLowerCase().split(' ');
      code.map((char) => {
        morCod.map((cod, index) => {
          if (char === cod)
            newText = newText + alfaDic[index];
        })
      })
      setText(newText);
    } else {
      setText(e);
      let aux = e.toLowerCase();
      
      aux = aux.replaceAll('v','u');
      aux = aux.replaceAll('j','i');

      const code = aux.split("");
      let newText = '';
      code.map((char) => {
        alfaDic.map((cod, index) => {
          if (char === cod) {
            newText = newText + morCod[index]+" ";
          }
        })
      })
      setInputs(newText.toUpperCase());
    }
  }

  const clickHandle = (type) => {
    if (type === "bck") {
      const newText = inputs.slice(0, -1);
      handleInput(newText, true);
    } else {
      const newText = inputs + type;
      handleInput(newText, true);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center bg-emerald-950 w-full h-screen">
      <p className="text-green-500 font-semibold xl:text-xl text-lg text-left w-2/4 ">{txtTitulo.toLocaleUpperCase()}</p>
      <input
        type="text"
        value={inputs}
        name="value"
        placeholder="Escreva aqui para traduzir de cifra de Bacon para texto"
        onChange={(e) => handleInput(e.target.value, true)}
        className={inputStyle}
      />
      <div className="flex w-full justify-center">
        <button className={`xl:w-10 xl:h-10 w-9 h-9 ${btnStyle}`} onClick={() => clickHandle("A")}>A</button>
        <button className={`xl:w-10 xl:h-10 w-9 h-9${btnStyle}`} onClick={() => clickHandle("B")}>B</button>
        <button className={`w-24 xl:h-10 h-9${btnStyle}`} onClick={() => clickHandle(" ")}></button>
        <button className={`xl:w-10 xl:h-10 h-9 w-9 flex flex-col justify-center items-center ${btnStyle}`} onClick={() => clickHandle("bck")}> <PiBackspace className="text-green-500" size={24} /></button>
      </div>
      <input
        type="text"
        value={text}
        name="translate"
        placeholder="Escreva aqui para traduzir de texto para cifra de Bacon"
        onChange={(e) => handleInput(e.target.value, false)}
        className={inputStyle}
      />
    </div>
  );
}

export default Bacon;
