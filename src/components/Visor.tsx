const Display = ({ chars,isTranslate = false}) => (
  <div className="flex flex-wrap mt-4">
    {chars.map((char, index) => (
      <div key={index} className="flex flex-col items-center m-2 ">
        {char == " "? (<div className="w-14 h-14"></div>):
        (
          <>
       {!isTranslate ? (<img
          src={`/images/keys/${char.toLowerCase()}.svg`}
          alt={char}
          className="w-14 h-14"
        /> ): (
        <img src={`/images/keys2/${char.toLowerCase()}.svg`} alt = {char} className="2xl:w-14 w-10 2xl:h-14 h-10"/>)}
        {isTranslate && <p className="text-2xl text-green-500 font-semibold m-5">{char}</p>}
        </>
         )}
      </div>
       
    ))}
  </div>
);
export default Display;