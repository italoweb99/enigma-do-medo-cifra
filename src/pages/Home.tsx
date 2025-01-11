import { useState, useEffect, useRef } from "react";
import SplashScreen from "../components/SplashScreen";
import TypingEffect from "../components/TypingEffect";
import Header from "../components/Header";
import ScanlinesOverlay from "../components/ScanLineOverlay";

const Home = () => {
  const [isModal, setModal] = useState(true);
  const [isTyping, setTyping] = useState(false);
  const [isTyping2, setTyping2] = useState(false);
  const [showTypingEffect, setShowTypingEffect] = useState({ effect1: true, effect2: true });

  const texts = [
    `NOME: \u2588\u2588\u2588\u2588\u2588 Veríssimo \u2588\u2588\u2588\u2588\u2588\u2588\u2588`,
    "CODENOME: Nigth Angel"
  ];

  const corpoText = [
    "Nesses arquivos constam todos os achados do agente sobre o deus do medo, a familia stretch e os misterios do perimetro, assim como as ferramentas utilizadas para resolver os enigmas dos objetos almadiçoados, fica ao criterio do leitor consultar os arquivos em busca de respostas ou usar as ferramentas para resolve-los por conta propria. As ferramentas aqui localizadas podem ser uteis em futuras investigações e não servem apenas para o resolução dos enigmas do perimetro."
  ];

  const corpoText2 = [
    "CIFRAS - Alguns enigmas requerem decifrar códigos com alguns tipos de cifras, para isso reunimos aqui as ferramentas necessárias para isso; A descoberta de qual cifra usar faz parte que experiencia do jogo e o modo dropdown pode prejudica-la já que pode dar spoilers de quais cifras estão presentes nos enigmas se quiser ter a experiencia completa use o modo barra de pesquisa.",
    "CRIPTOGRAMAS - Use essa seção para auxiliar na descoberta da equivalência das letras do alfabeto do Enigma do Medo para o alfabeto latino. Digite os texto encontrados na seção do Samuel e será gerado uma pagina onde você poderá digitar uma letra abaixo de um símbolo e todos os símbolos correspondentes no texto serão preenchidos com a mesma letra.",
    "TRADUTOR - Essa seção traduz as letras do alfabeto de Enigma do Medo para o alfabeto latino, se você já descobriu as equivalência das letras e quer um jeito mais fácil de traduzir as mensagens ou não se importa com a experiencia de encontras use essa tela.",
    "COLETANIA - Se você está preso em algum enigma e quer uma dica, a resposta para algum deles ou somente uma visão geral dos enigmas consulte essa seção do site."
  ];
  const imgText = "boa sorte".split('');
  const sectionsRef = useRef([]);
  const [type, setType] = useState([false, false]);

  const initializeObserver = () => {
    const observer = new IntersectionObserver(entries => {
      setType(prevType => {
        const aux = [...prevType];
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.indexOf(entry.target);
            if (!aux[index]) {
              aux[index] = true;
              observer.unobserve(entry.target);
            }
          }
        });
        return aux;
      });
    }, { threshold: 0.1 });

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  };

  useEffect(() => {
    const isSession = sessionStorage.getItem('splashScreen');
    const typingEffectShown = {
      effect1: sessionStorage.getItem('typingEffect1'),
      effect2: sessionStorage.getItem('typingEffect2')
    };

    if (isSession) {
      setModal(false);
      setTyping(true);
      setShowTypingEffect({
        effect1: typingEffectShown.effect1 !== 'true',
        effect2: typingEffectShown.effect2 !== 'true'
      });
    }

    initializeObserver();
  }, [sectionsRef.current.length,showTypingEffect.effect1]);

  const handleClose = () => {
    setModal(false);
    setTyping(true);
    sessionStorage.setItem('splashScreen', 'false');
    initializeObserver();

    const typingEffectShown = {
      effect1: sessionStorage.getItem('typingEffect1'),
      effect2: sessionStorage.getItem('typingEffect2')
    };

    setShowTypingEffect({
      effect1: typingEffectShown.effect1 !== 'true',
      effect2: typingEffectShown.effect2 !== 'true'
    });
  };

  const handleEnd = (index) => {
    if (index === 0) {
      sessionStorage.setItem('typingEffect1', 'true');
      setTyping2(true);
    } else if (index === 1) {
      sessionStorage.setItem('typingEffect2', 'true');
    }
  };

  return (
    <ScanlinesOverlay animado={true}>
      {isModal ? (
        <SplashScreen onClose={handleClose} />
      ) : (
        <div className="overscroll-none overflow-x-hidden bg-emerald-950">
          <div className="flex flex-col z-0 relative w-screen h-screen bg-emerald-950">
            <Header index={1} height={12} className="bg-emerald-950 z-10 fixed top-0 left-0 w-full" />
            <div className="mt-32">
              <p className="text-4xl text-center w-screen font-semibold text-green-500">Arquivos do agente</p>
              {isTyping && (
                showTypingEffect.effect1 ? (
                  <TypingEffect
                    index={1}
                    onComplete={() => handleEnd(0)}
                    texts={texts}
                    textClass="p-4 pl-48 mt-6 text-green-500 text-3xl font-semibold"
                    divClass="mt-6"
                  />
                ) : (
                  texts.map((text, i) => (
                    <p key={i} className="p-4 pl-48 mt-6 text-green-500 text-3xl font-semibold">{text}</p>
                  ))
                )
              )}
            </div>
            <div className="absolute top-0 left-0 flex w-screen h-screen justify-center items-center z-0">
              <img src="images/na verde com texto.svg" className=" mt-64 h-96" />
            </div>
          </div>
          <div className="h-full bg-emerald-950">
            <div className="h-2"></div>
            <div ref={el => sectionsRef.current[0] = el} className="z-1 h-fit">
              {type[0] ? (showTypingEffect.effect2 ? (
                <TypingEffect
                  texts={corpoText}
                  onComplete={() => handleEnd(1)}
                  speed={30}
                  textClass="leading-relaxed text-justify p-20 px-48 mt-6 text-green-500 text-2xl font-semibold"
                  divClass="mt-6"
                />
              ) : (
                corpoText.map((text, i) => (
                  <p key={i} className="leading-relaxed text-justify p-20 px-48 mt-6 text-green-500 text-2xl font-semibold">{text}</p>
                ))
              )) : null}
            </div>
            <div className="flex justify-center items-center ">
              <img src="images/simbolo do medo.svg" className="h-96"/>
            </div>
            <div ref={el => sectionsRef.current[1] = el} className="h-fit">
              {type[1] ? (showTypingEffect.effect2 ? (
                <TypingEffect
                  onComplete={() => handleEnd(2)}
                  texts={corpoText2}
                  speed={30}
                  textClass="leading-relaxed text-justify  px-48 my-6 text-green-500 text-2xl font-semibold"
                  divClass="mt-6"
                />
              ) : (
                corpoText2.map((text, i) => (
                  <p key={i} className="leading-relaxed text-justify px-48 my-6 text-green-500 text-2xl font-semibold">{text}</p>
                ))
              )) : null}
            </div>
            <div className="flex flex-col justify-center items-center mt-64 w-screen">
              <img src="images/na verde.svg" className="h-24"/>
              <div className="m-6 flex justify-center items-center w-screen">
                {imgText.map((img, i) => (
                  img === ' ' ? <div className="h-12 w-12" key={i}></div> : <img key={i} src={`images/keys2/${img}.svg`} className="h-12 w-12"/>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </ScanlinesOverlay>
  );
};

export default Home;
