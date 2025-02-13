const Display = ({ chars,isTranslate = false}) => (
  <div className="overflow-auto 2xl:max-h-96 max-h-48  flex flex-wrap mt-4">
    {chars.map((char, index) => (
      <div key={index} className="flex flex-col items-center m-2 ">
        {char == " "? (<div className="w-14 h-14"></div>):
        (
          <>
       {!isTranslate ? (<img
          src={`/images/keys/${char.toLowerCase()}.svg`}
          alt={char}
          className="2xl:w-14 2xl:h-14 w-9 h-9"
        /> ): (
        <img src={`/images/keys2/${char.toLowerCase()}.svg`} alt = {char} className="2xl:w-14 w-9 2xl:h-14 h-9"/>)}
        {isTranslate && <p className="2xl:text-2xl text-xl text-green-500 font-semibold m-5">{char}</p>}
        </>
         )}
      </div>
       
    ))}
  </div>
);
export default Display;