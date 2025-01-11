import { PiArrowFatLeftFill } from "react-icons/pi"
import Header from "../components/Header"
import TradutorEnigma from "../components/TradutorEnigma"
import { useNavigate } from "react-router-dom"

import ScanlinesOverlay from "../components/ScanLineOverlay"

const Tradutor = () => {
const nav = useNavigate();
    const onClose = () =>{
       nav('/');
    }
return(
    <ScanlinesOverlay animado = {true}>
    <div className='h-screen bg-emerald-950 flex flex-col justify-center items-center relative'>
    <Header height = {12} index = "4" className = "absolute top-0 left-0"/>
    <div className='group'>
    <div className='absolute flex flex-col top-16 left-6'>
    <PiArrowFatLeftFill className="cursor-pointer text-green-500 group-hover:text-green-400 " onClick = {()=>{nav('/')}}size={52} />
    <p className = "group-hover:text-green-400 text-green-500 font-xl font-bold mt-1 ml-1">Voltar</p>
    </div>
    </div>
    <TradutorEnigma onClose={onClose}/>
    </div>
    </ScanlinesOverlay>
)
}
export default Tradutor