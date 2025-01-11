import { useEffect, useState, useRef } from "react";
import Encript2 from "./Encipt2";

const SplashScreen = ({ onClose , delay= 1000}) => {
    const [points, setPoints] = useState(['Descriptografando']);
    const intervalRef = useRef();

    const handleClose = () => {
        //console.log(points);
        if (points[0] !== "Bem-Vindo:") {
            setPoints(["Bem-Vindo:"]);
        }
        intervalRef.current = setTimeout(() => {
            onClose();
        }, delay);
    };

    useEffect(() => {
        if (points[0] !== "Bem-Vindo:") {
            const inter = setInterval(() => {
                if (points.length < 4) {
                    setPoints((points) => [
                        ...points,
                        '.'
                    ]);
                } else {
                    setPoints(['Descriptografando']);
                }
            }, 1000);
            intervalRef.current = inter;

            return () => clearInterval(inter);
        }
    }, [points]);

    useEffect(() => {
        return () => clearTimeout(intervalRef.current);
    }, []);

    return (
        <div className="flex flex-col h-screen w-screen justify-center items-center bg-emerald-950 text-3xl font-semibold text-green-500 z-50">
            <p className="m-4">{points}</p>
            <Encript2 text="Night Angel" speed={80} delay={0} onClose={handleClose} />
        </div>
    );
};

export default SplashScreen;
