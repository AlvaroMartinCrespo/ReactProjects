import './App.css';
import Tecla from './components/Tecla';
import { useEffect } from 'react';

function App() {
  let key = '';
  useEffect(() => {
    const handleKeyPress = (event) => {
      key = event.key;
      audioKey(key);
    };
    window.addEventListener('keydown', handleKeyPress);

    // limpiar el eventListener en la función de limpieza del efecto
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  function audioKey(key) {
    let rutaKey = '';
    if (key === 'a') {
      rutaKey = '../../public/sound/piano-a_A_major.wav';
    } else if (key === 's') {
      rutaKey = '../../public/sound/piano-b_B_major.wav';
    } else if (key === 'd') {
      rutaKey = '../../public/sound/piano-bb_AS_major.wav';
    } else if (key === 'f') {
      rutaKey = '../../public/sound/piano-e_E_major.wav';
    } else if (key === 'g') {
      rutaKey = '../../public/sound/piano-f_F_major.wav';
    }

    let audio = new Audio(rutaKey);
    audio.play();
  }

  return (
    <div className="App">
      <div id="container" className=" bg-slate-700 w-screen h-screen flex  items-center flex-col gap-7">
        <h1 className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-6xl font-bold text-transparent bg-clip-text mt-10">
          Piano
        </h1>
        <div id="piano" className="flex justify-center items-center">
          <Tecla nombre="A" />
          {key === 'a' ? <Tecla nombre="A" /> : null}
          <Tecla nombre="B" />
          <Tecla nombre="AS" />
          <Tecla nombre="E" />
          <Tecla nombre="F" />
        </div>
        <span className="text-white text-xl">Use keys A, S, D, F and G</span>
      </div>
    </div>
  );
}

export default App;
