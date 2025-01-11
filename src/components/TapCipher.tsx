import {  useState } from "react";
import { PiBackspace } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const TapCipher = ({onClose}) => {
    const [inputs, setInputs] = useState('')
    const [text,setText] = useState('')
    const inputStyle = "h-64 w-2/4 placeholder-emerald-700 m-4 mt-4 p-1 hover:outline-green-500 hover:outline outline-2 outline-offset-2 hover:ring-0 focus:ring-0 focus:outline-green-500 focus:outline-none text-green-500 rounded text-center text-3xl font-semibold bg-emerald-900 hover:bg-emerald-800bg-emerald-900 hover:bg-emerald-800"
    //const morCod = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-","-.-","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....-",".....","-....","--...","---..","----.","-----","  "];
    const alfaDic = [["a","b","c","d","e"],["f","g","h","i","j"],["l","m","n","o","p"],["q","r","s","t","u"],["v","w","x","y","z"]];
    //const nav = useNavigate();
    const btnStyle = "text-center rounded hover:bg-emerald-900 text-green-500 m-2 bg-emerald-950 border-2 border-green-500"
    const txtTitulo = "Codigo Tap (Tap Code)";
    const[isNum, setNum] = useState(false);
    const handleInput = (e,val) =>{
       if(val){
        setInputs(e);
       let newText = '';
       const code = isNum? e.split(''):e.split(' ');
       
       for(let i = 0; i< code.length-code.length%2; i = i+2){  
                if(code[i+1] != '')
                newText = newText + alfaDic[isNum ? code[i]-1:code[i].length-1][isNum ? code[i+1]-1:code[i+1].length-1];      
    }
       setText(newText);
    }
    else{
        setText(e);
        const code = e.split("");
        let newText = '';
        code.map((char)=>{
           alfaDic.map((cod,index)=>{
             if(cod.includes(char)){
                if(isNum){
                    newText = newText +`${index+1} ${cod.indexOf(char)+1} `;
                }else{
                for(let i = 0; i< index+1; i++){
                    newText = newText + '.';
                    
                    }
                    newText = newText + ' ';
                for(let x = 0; x< cod.indexOf(char)+1; x++){
                  newText = newText + '.';
             }
             newText = newText + ' ';
            }
            }
           } )
        })
        setInputs(newText);
    }
  
    }
    const clickHandle = (type) =>{
        if(type == "bck"){
            const newText = inputs.slice(0,-1);
            handleInput(newText,true);
        }else if(type=="toggle"){
            setNum(true);
        }
        else{
            const newText = inputs + type;
            handleInput(newText,true);
        }
    }
    return(
<div className="flex flex-col justify-center items-center bg-emerald-950 w-full h-screen">
<p className="text-green-500 font-semibold text-xl text-left w-2/4 ">{txtTitulo.toLocaleUpperCase()}</p>
<input
type="text"
value={inputs}
name="value"
placeholder="Escreva aqui para traduzir de Morse para texto"
onChange={(e)=>handleInput(e.target.value,true)}
className={inputStyle}/>
<div className=" flex w-full justify-center">
<button className={`w-10 h-10 ${btnStyle}`} onClick={()=>clickHandle(".")}>.</button>
<button className={`px-2 h-10${btnStyle}`} onClick={()=>clickHandle("toggle")}>Ponto/Numero</button>
<button className={`w-10 h-10 flex flex-col justify-center items-center ${btnStyle}`} onClick={()=>clickHandle("bck")}> <PiBackspace className="text-green-500" size={24}/></button>
</div>
<input
type="text"
value={text}
name="translate"
placeholder="Escreva aqui para traduzir de texto para Morse"
onChange={(e)=>handleInput(e.target.value,false)}
className={inputStyle}
/>
</div>
    );  
}
export default TapCipher;