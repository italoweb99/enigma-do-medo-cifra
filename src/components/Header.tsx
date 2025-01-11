import { useNavigate } from "react-router-dom";

const Header = ({index, drift =20,height = 10,marginL=400,className = ""}) => {
    const pages = ["Home","Cifras","Criptograma","Tradutor","Coletânea"];
    //const drift = 20;
   // const marginL = 400;
   const params = `w-full  h-${height} ${className}`;
   const hSize = ((screen.width-marginL)/pages.length);
  const cHeight = height*4;
   //const heightParam = `w-full h-[${height+1}px]`;
   const atPag = index-1;
   const nav = useNavigate();
   
   
  const translate = (index) =>{
    return `translate(${(hSize-drift)*index},0)`
  }
const setPoints = (isFilled) =>{
    const points = [];
    for(let i = 0; i<8;i++){
        points.push(i%2 == 0 ? i==0 ? marginL:i == 2? marginL+drift: hSize+marginL+pages.length*drift: i==1 || i == 7 ? !isFilled ? cHeight+2 :cHeight-1.5: 2 );
    }
    //console.log(points);
    return points.toString();
}
const handleClick = (index) =>{
pages[index] == "Home" ? nav('/') : nav(`/${pages[index].toLowerCase()}`)
}
//const points = setPoints();
const pointsF = setPoints(true);
const points = setPoints(false);
    return(
<div className={params}>
    <svg key= {100} className={`w-full h-full`}>
        {pages.map((pag,index) =>{
           
        return(
        <>
        <g className="group">
        {
            
        index != atPag ? (<polygon key = {index} points={pointsF} onClick={()=>handleClick(index)} transform={translate(index)} className=" cursor-pointer group-hover:fill-emerald-900 fill-emerald-950 stroke-green-500 stroke-2"/>):(
            <polyline key = {index} points = {points} transform = {translate(index)}className="stroke-green-500 fill-emerald-950 stroke-2"/>
        )
        }
        <text x = {hSize/2 + marginL} key={index+pages.length} transform={translate(index)} y = {cHeight/2+5} textAnchor="middle" className="cursor-pointer fill-green-500 text-xl font-semibold">{pag}</text>
        <line x1="0" y1 ={cHeight} x2={marginL} y2={cHeight} key={index+(pages.length)*2} className="stroke-green-500 stroke-2"/>
        </g>
        </>

        );})
        }
    </svg>
</div>
    );
}
export default Header 