
import Visor from '../components/Visor';
import Keyboard from '../components/Teclado';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ScanlinesOverlay from '../components/ScanLineOverlay';
import { PiArrowFatLeftFill } from 'react-icons/pi';

function MainPage() {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [chars, setChars] = useState([]);
    const[instructions,setInst] = useState(true);
    const[btnText,setBtnText]=useState("Começar");
    const navigate = useNavigate();
  
    const toggleKeyboard = () => {
      setKeyboardVisible(!isKeyboardVisible);
      setInst(!instructions);
      btnText=="Começar" ? setBtnText("Fechar"):setBtnText("Começar");
    };
  
    const handleKeyClick = (char) => {
      if (char === 'Backspace') {
        setChars(chars.slice(0, -1));
      } else if (char === 'Enter') {
        navigate('/images/', { state: { chars } });
      } else if (char === ' ') {
        setChars([...chars, ' ']);
      } else {
        setChars([...chars, char]);
      }
    };
  
    return (
      <ScanlinesOverlay animado = {true}>
      <div className="h-screen flex flex-col items-center justify-center bg-emerald-950">
        <Header index= '3' height = {12} className="absolute top-0 left-0" />
         <div className='group'>
              <div className='absolute flex flex-col top-16 left-6'>
              <PiArrowFatLeftFill className="cursor-pointer text-green-500 group-hover:text-green-400 " onClick = {()=>{navigate('/')}}size={52} />
              <p className = "group-hover:text-green-400 text-green-500 font-xl font-bold mt-1 ml-1">Voltar</p>
        </div>
        </div>
        {instructions && (
          <p className=' p-5 m-64 mt-96 text-center relative font-semibold text-2xl text-green-500'>Esse pagina foi cria para ajudar na tradução do alfabeto de Enigma do Medo, para utilizar clique em começar para abrir a teclado digite o codigo desejado e aperte ENTER.</p>
      )}
        <div className=" mb-[550px]">
          <Visor chars={chars} />
        </div>
      
        <button
          onClick={toggleKeyboard}
          className=" fixed mb-4 bg-emerald-950 hover:bg-emerald-900 border-2 border-green-500 text-green-500 font-bold py-2 px-4 rounded"
        >
          {btnText}
        </button>
        <div className="w-full">
          <Keyboard isVisible={isKeyboardVisible} onClick={handleKeyClick} />
        </div>
      </div>
      </ScanlinesOverlay>
    );
  }
  export default MainPage;