import Visor from '../components/Visor';
import Teclado from '../components/Teclado';
import Aviso from'../components/Aviso';
import { useState } from 'react';
const TradutorEnigma = ({onClose}) =>{
     const [isKeyboardVisible, setKeyboardVisible] = useState(false);
     const [chars, setChars] = useState ([]);
     //const [btnText,setBtnText] = useState('Começar');
     const btnText = 'Começar'
     const [isAviso,setAviso] = useState(true);
     const[instructions,setInst] = useState(true);
     const avisoTxt = 'Esse pagina traduz os simbolos de Enigma do medo para o alfabeto latino, se quiser descobrir as correspondencias por conta propria utilize a seção criptograma.'
    const handleKeyClick = (char) => {
        if (char === 'Backspace') {
          setChars(chars.slice(0, -1));
        } else if (char === 'Enter') {
          toggleKeyboard();
        } else if (char === ' ') {
          setChars([...chars, ' ']);
        } else {
          setChars([...chars, char]);
        }
      };
      const handleClose = (index) =>{
       index == 1 ? setAviso(false) : onClose();
      }
      const toggleKeyboard = () => {
        setKeyboardVisible(!isKeyboardVisible);
        setInst(!instructions);
       // btnText=="Começar" ? setBtnText("Fechar"):setBtnText("Começar");
      };
    return(
        <div className='bg-emerald-950 h-screen w-screen flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center h-full w-full'>
            {isAviso && <Aviso texto = {avisoTxt} buttons={["Voltar","Continuar"]} onClose = {handleClose}/>}
            {chars.length == 0 && instructions && (
          <p className=' p-5 lg:mx-64 lg:mb-24 xl:mx-64 xl:mb-64 md:mx-32 md:mb-12 text-center relative font-semibold text-2xl text-green-500'>Clique em começar para abrir o teclado e digite a mensagem de deseja traduzir. Clique em Alternar Teclado para alternar entre os teclados de enigma do medo e o latino.</p>
      )}
{chars.length !=0 && (<div className='mb-64'>
<Visor isTranslate={true} chars = {chars}/>
</div>)}
{instructions && <button onClick = {toggleKeyboard} className='mb-4 bg-emerald-950 hover:bg-emerald-900 border-2 border-green-500 text-green-500 font-bold py-2 px-4 rounded'>{btnText}</button>}
</div>
<Teclado isTranslate={true} isVisible={isKeyboardVisible} onClick={handleKeyClick}/>
</div>
    );
}
export default TradutorEnigma