export default function Tecla({ nombre }) {
  // listenerKey();

  // function listenerKey() {
  //   document.addEventListener('keydown', audioKey);
  // }

  function selectorAudio() {
    let ruta = '';
    if (nombre === 'A') {
      return (ruta = '../../public/sound/piano-a_A_major.wav');
    } else if (nombre === 'B') {
      return (ruta = '../../public/sound/piano-b_B_major.wav');
    } else if (nombre === 'AS') {
      return (ruta = '../../public/sound/piano-bb_AS_major.wav');
    } else if (nombre === 'E') {
      return (ruta = '../../public/sound/piano-e_E_major.wav');
    } else if (nombre === 'F') {
      return (ruta = '../../public/sound/piano-f_F_major.wav');
    }
  }

  function audio() {
    const ruta = selectorAudio();
    let audio = new Audio(ruta);
    audio.play();
  }

  function audioKey(event) {
    let rutaKey = '';
    if (event.key === 'a') {
      rutaKey = '../../public/sound/piano-a_A_major.wav';
    } else if (event.key === 's') {
      rutaKey = '../../public/sound/piano-b_B_major.wav';
    } else if (event.key === 'd') {
      rutaKey = '../../public/sound/piano-bb_AS_major.wav';
    } else if (event.key === 'f') {
      rutaKey = '../../public/sound/piano-e_E_major.wav';
    } else if (event.key === 'g') {
      rutaKey = '../../public/sound/piano-f_F_major.wav';
    }

    let audio = new Audio(rutaKey);
    audio.play();
  }  

  return (
    <button
      id={nombre}
      onClick={audio}
      className="border w-20 h-40 bg-slate-200 hover:bg-slate-50 active:translate-y-px flex justify-center items-center shadow-lg cursor-pointer "
    >
      <span className="text-lg font-bold">{nombre}</span>
    </button>
  );
}
