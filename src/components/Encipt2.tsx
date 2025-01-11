import { useState, useEffect } from "react";

const Encript2 = ({ text, onClose, speed = 500, delay = 1000 }) => {
  const [array, setArray] = useState([]);
  const [aIndex,setAIndex] = useState(0);
  const [currentIndex,setCurrentIndex] = useState(0)
  const texts = ['a','b','c','d','\u2466','\u20AC','f','\u0026','g'];
  useEffect(() => {
    const tempArray = [];
    for (let i = 0; i < text.length; i++) {
      tempArray.push("\u2588");
    }
    setArray(tempArray);
  }, [text]);
  useEffect(()=>{
    if(aIndex < texts.length){
const interval = setInterval(()=>{
   // console.log('assasd');
   
    setAIndex((prevIndex)=>prevIndex+1);
},speed);
return()=>clearInterval(interval);
    }
    
  },[aIndex])
  useEffect(()=>{
    if(currentIndex < text.length){
        if(aIndex === texts.length){
            setAIndex(0);
            const temp = array.map((a,i)=>{
            
              return  i == currentIndex ? text[i]: a;
            });
            setArray(temp);
            setCurrentIndex((prev)=>prev+1);
        }
        else{
            //console.log(texts[aIndex]);
            const aTemp = array.map((a,i)=>{
               return i == currentIndex ? texts[aIndex] : a;
            });
            //console.log(aTemp);
            if(aTemp.length != 0){
             setArray(aTemp);
            }
        }
    }
  },[aIndex]);
  useEffect(()=>{
    if(currentIndex == text.length){
      const interval =  setInterval(()=>{
            onClose();
        },delay);
        return () => clearInterval(interval);
    }

  },[currentIndex]);
//console.log(aIndex);
  return (
    <div className="flex justify-center items-center">
      {array.map((a, index) => (
        <p className="m-0.5 text-5xl font-semibold text-green-500" key={index}>{a}</p>
      ))}
    </div>
  );
};

export default Encript2;
