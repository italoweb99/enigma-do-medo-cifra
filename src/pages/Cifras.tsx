import { useState } from "react";
import Morse from "../components/Morse";
import { PiArrowFatLeftFill,PiMagnifyingGlassBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Bacon from "../components/Bacon";
import Vigenere from "../components/Vigenere";
import Header from "../components/Header";
import Aviso from "../components/Aviso";
import Dropdown from "../components/Dropdown";
import TapCipher from "../components/TapCipher";
import ScanlinesOverlay from "../components/ScanLineOverlay";
import TradutorEnigma from "../components/TradutorEnigma";

const Cifras = () => {
    const[isMorse,setMorse] = useState(false)
    const[searchTerm,setSearch] = useState('');
    const nav = useNavigate();
    const [isNotFound,setNotFound]= useState(false);
    const [isIniPag,setIniPag]= useState(true);
    //const[isBacon,setBacon] = useState(false);
    //const[isVigenere,setVigenere] = useState(false);
    const [cifras,setCifras] = useState([{nome: 'morse', status:false},{nome: 'vigenere', status:false},{nome: 'bacon',status: false},{nome: 'tap code',status:false},{nome:'enigma do medo',status:false}]);
    const [margin,setMargin] = useState('mt-0');
    const [isAviso,setAviso] = useState(true);
    const btns = ["Barra de pesquisa","Dropdown menu"];
    const items = ["Morse","Vigenere","Bacon","Tap Code","Enigma do medo"];
    const [isSearchBar,setSearchBar] = useState(false);
    const avisoText = "O uso do drop down menu pode ocasionar spoilers, se você não quiser dicas de quais cifras são utilizadas para a resolução dos enigmas selecione barra de pesquisa."
    const avisoHandle = (index) =>{
        console.log(index);
        index == 0 ? setSearchBar(true) : setSearchBar(false);
        setAviso(false);
    }
    const handleDropDown=(e)=>{
        setMargin('mt-24');
        setIniPag(false);
        const nCifra = cifras.map((cifra)=>{
            if(cifra.nome == e.toLocaleLowerCase()){
                return{
                    ...cifra,
                    status: true
                }
            }else{
                return{
                    ...cifra,
                    status: false
                }
            }
        })
        console.log(nCifra);
        setCifras(nCifra);
       /* setIniPag(false);
        setMargin('mt-24');
       if(e=="Morse"){
        setMorse(true);
        setBacon(false);
        setVigenere(false);

       }else if(e=="Vigenere"){
        setMorse(false);
        setVigenere(true);
        setBacon(false);
       }else{
        setMorse(false);
        setVigenere(false);
        setBacon(true);
       }*/
    }
    const onClose = () =>{
    
    setMargin('mt-0');
    let count = 0;
    const nCifra = cifras.map((cifra)=>{
        if(cifra.status){
            return{
                ...cifra,
                status: false
            }
        }else{
            count++;
            return{
                ...cifra,
            }
        }
    })
    if(count == cifras.length){
        nav('/');
    }
    else{
   
        setCifras(nCifra);
    }
  /* if(isMorse){
    setMorse(false);
   }
   else if (isBacon){
    setBacon(false);
   }
   else if(isVigenere){
    setVigenere(false);
   }
   else{
    nav('/');
   }*/
     setIniPag(true);
    }
    const search = () =>{
        setSearch('');
        setMargin('mt-24');
        let count = 0;
       const nCifra = cifras.map((cifra)=>{
       // console.log(cifra.nome);
            if(searchTerm.toLocaleLowerCase().includes(cifra.nome)){
                return{
                  
                ...cifra,
                status: true
                }    
            }
            else{
                count++;
                return{
                ...cifra,
                status : false
                }
            }
        })
        if(count==cifras.length){
            setNotFound(true);
        }else{
            setNotFound(false);
            setIniPag(false);
        }
        //console.log(nCifra);
       
        setCifras(nCifra);
       /* setCiphers(
            {
                ...isCiphers
                []
            }
        )
        
      /*  if(searchTerm.toLocaleLowerCase().includes("morse")){
            setMorse(true);
            setBacon(false);
            setVigenere(false);
            setNotFound(false);
            setIniPag(false);
            
        }
        else if(searchTerm.toLocaleLowerCase().includes("bacon")){
            setMorse(false)
            setBacon(true);
            setVigenere(false);
            setNotFound(false);
            setIniPag(false);
         
        }else if(searchTerm.toLocaleLowerCase().includes("vigenere")){
            setMorse(false);
            setBacon(false);
            setVigenere(true);
            setNotFound(false);
            setIniPag(false);
         
        }
        else{
            setNotFound(true);
        }
      /* switch(searchTerm.toLocaleLowerCase()){
        case "morse": 
            setMorse(true);
            setNotFound(false)
            setIniPag(false)
            setSearch('');
        break;
        case "bacon":

        default:
          setNotFound(true);
       }*/
    }
    //setCifrasIni();
    return(  
        <>
        <ScanlinesOverlay animado = {true}>
        {isAviso&&(<Aviso texto = {avisoText} buttons={btns} onClose={avisoHandle}/>)}
       <div className="flex flex-col justify-center relative z-0 items-center h-screen bg-emerald-950">
        <Header index = "2" height={12} className=" absolute top-0 left-0"/>
        <div className='group'>
      <div className='absolute flex flex-col top-16 left-6'>
      <PiArrowFatLeftFill className="cursor-pointer text-green-500 group-hover:text-green-400 " onClick = {()=>{onClose()}}size={52} />
      <p className = "group-hover:text-green-400 text-green-500 font-xl font-bold mt-1 ml-1">Voltar</p>
</div>
</div>
<div className={`w-2/4 ${margin} flex flex-col justify-center items-center`}>
{isSearchBar ? (<>
{isIniPag&&(<p className="m-6 text-green-500 font-semibold text-2xl">Digite o nome da cifra desejada</p>)}

<div className="group  flex flex-inline justify-center h-12 w-full rounded-e border-green-500 bg-emerald-950 group-hover:outline group-hover:outline-green-500 outline-offset-2 ">
       <input
       type ="text"
       value={searchTerm}
       onChange = {(e)=>setSearch(e.target.value)}
       className=" h-10 w-full placeholder-emerald-700  p-1  hover:outline-none hover:ring-0 focus:ring-0  focus:outline-none text-green-500 rounded-s text-center text-xl font-semibold bg-emerald-900 hover:bg-emerald-800 hover:bg-emerald-800"
       />
       <button className="bg-emerald-900 w-14 h-10 rounded-e flex justify-center items-center hover:bg-emerald-800 group"onClick={search}><PiMagnifyingGlassBold className="text-green-500 group-hover:text-green-400" size={20}/></button>
       </div></>):(
        <>
        {isIniPag&&(<p className="m-6 text-green-500 font-semibold text-2xl">Selecione o a cifra desejada</p>)}
        <Dropdown onChange={handleDropDown} items={items} />
        </>
       )}
       {isNotFound && (<p className="text-green-500 mt-0 font-semibold">Cifra não encontrada, tente novamente</p>)}
       </div>
       {cifras[0].status &&( <Morse onClose = {onClose}/>)}
       {cifras[2].status && (<Bacon onClose ={onClose}/>)}
       {cifras[1].status && (<Vigenere onClose={onClose}/>)}
       {cifras[3].status&&(<TapCipher onClose={onClose}/>)}
       {cifras[4].status&&(<TradutorEnigma onClose = {onClose}/>)}
       </div>
       </ScanlinesOverlay>
       </>
    );
}
export default Cifras;