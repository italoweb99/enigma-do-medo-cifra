import {  useState } from "react";
import { PiBackspace } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Morse = ({onClose}) => {
    const [inputs, setInputs] = useState('')
    const [text,setText] = useState('')
    const inputStyle = "h-64 w-2/4 placeholder-emerald-700 m-4 mt-4 p-1 hover:outline-green-500 hover:outline outline-2 outline-offset-2 hover:ring-0 focus:ring-0 focus:outline-green-500 focus:outline-none text-green-500 rounded text-center text-3xl font-semibold bg-emerald-900 hover:bg-emerald-800bg-emerald-900 hover:bg-emerald-800"
    const morCod = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-","-.-","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....-",".....","-....","--...","---..","----.","-----"," "];
    const alfaDic = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"," "];
    const nav = useNavigate();
    const btnStyle = "text-center rounded hover:bg-emerald-900 text-green-500 m-2 bg-emerald-950 border-2 border-green-500"
    const txtTitulo = "Codigo Morse";
    const handleInput = (e,val) =>{
       if(val){
        setInputs(e);
       let newText = '';
       const code = e.split(' ');
       code.map((char)=>{
        morCod.map((cod,index)=>{
            if(char==cod)
                newText = newText + alfaDic[index];
        })
       })
       setText(newText);
    }
    else{
        setText(e);
        const code = e.split("");
        let newText = '';
        code.map((char)=>{
           alfaDic.map((cod,index)=>{
             if(char==cod){
                newText = newText + morCod[index]+" ";
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
<button className={`w-10 h-10${btnStyle}`} onClick={()=>clickHandle("-")}>-</button>
<button className={`w-24 h-10${btnStyle}`} onClick={()=>clickHandle(" ")}></button>
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
export default Morse;