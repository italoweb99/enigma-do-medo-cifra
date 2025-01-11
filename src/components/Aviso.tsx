const Aviso = ({onClose, texto, buttons = ["fechar"],className=""})=>{
    return(
        <div className="flex flex-col justify-center backdrop-blur-md bg-opacity-50 items-center absolute top-0 left-0 z-10 h-screen w-screen bg-black">
            <div className={`${className} rounded-lg flex flex-col justify-center items-center text-center w-2/4 bg-emerald-950`}>
            <div className="mt-10 p-5">
                <h1 className="text-green-500 font-bold text-4xl mb-3">AVISO</h1>
                <p className="text-green-500 text-2xl font-semibold">{texto}</p>
            </div>
            <div className="flex w-full mt-7 justify-center items-center">
             {buttons.map((btn,index)=>(<button onClick={()=>onClose(index)} key={index} className=" rounded-lg font-semibold text-lg text-green-500 bg-emerald-950 hover:bg-emerald-900 p-4 border-green-500 border-4 flex-grow m-10">{btn}</button>))}
             </div>
            </div>
        </div>
    )

}
export default Aviso;