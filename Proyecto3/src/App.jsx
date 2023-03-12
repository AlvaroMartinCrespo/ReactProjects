import { useState } from 'react';
import './App.css';
import Gatos from './components/Gato';

function App() {
  const [hecho, setHecho] = useState();
  const [imagenGato, setImagenGato] = useState();

  /**
   * Hacemos un fetch de datos a la api de hechos de gatos.
   * Obtenemos la repuestas y la inttroducimos en el setState de hecho.
   * Llamamos a la función de recuperarImagenGato para a partir del hecho hacer una petición a la api de gatos con la primera palabra del hecho.
   */
  async function recuperarHecho() {
    const peticion = await fetch('https://catfact.ninja/fact');
    const respuesta = await peticion.json();
    setHecho(respuesta.fact);
    await recuperarImagenGato(respuesta.fact);
  }

  /**
   * Obtiene la cadena anterior del hecho, obtiene la primera palabra y realiza una petición al servidor de imagenes de gatos con esa palabra.
   * @param {string} hecho
   */
  async function recuperarImagenGato(hecho) {
    const primeraPalabra = hecho.split(' ')[0];
    const peticion = await fetch(`https://cataas.com/cat/says/${primeraPalabra}?json=true`);
    const respuesta = await peticion.json();
    setImagenGato(respuesta.url);
  }

  return (
    <div className="App">
      <div className="bg-slate-50 w-screen h-screen flex justify-content items-center flex-col">
        <h1 className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-6xl font-bold text-transparent bg-clip-text mt-10">
          CatFacts
        </h1>
        <button
          onClick={recuperarHecho}
          className=" my-10 p-3 rounded-lg shadow-md shadow-slate-700 transition bg-slate-700 duration-300 hover:bg-slate-400 text-white"
        >
          Recuperar Hecho
        </button>

        {hecho ? <Gatos hecho={hecho} imagenGato={imagenGato} /> : null}
      </div>
    </div>
  );
}

export default App;
