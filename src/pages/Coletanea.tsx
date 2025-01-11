import Header from '../components/Header'
import ScanlinesOverlay from '../components/ScanLineOverlay'
const Coletanea = () =>{
return(
    <ScanlinesOverlay animado={true}>
    <div className="flex justify-center items-center h-screen w-screen bg-emerald-950">
        <Header index={1} height={12} className="bg-emerald-950 z-10 fixed top-0 left-0 w-full" />
        <p className="text-green-500 text-6xl">Em Breve...</p>
    </div>
    </ScanlinesOverlay>
)
}
export default Coletanea