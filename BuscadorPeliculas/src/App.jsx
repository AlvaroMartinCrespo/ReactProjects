import { useState } from 'react';
import './App.css';
import PeliculaComponente from './components/PeliculaComponente';

function App() {
  const [peliculaState, setPelicula] = useState({});

  /**
   * Función que controla el evento del formulario y la petición al servidor para le respuesta de la película.
   * @param {eventoFormulario} e
   */
  async function peticion(e) {
    //Deshabilitamos el formulario
    e.preventDefault();
    const formulario = document.getElementById('formulario');
    const formData = new FormData(formulario);
    const nombrePelicula = formData.get('pelicula');
    //Hacemos la petición al servidor con el nombre de la película que se ha introducido en el formulario.
    const peticionServidor = await fetch(`http://www.omdbapi.com/?apikey=998d8ee1&t=${nombrePelicula}​`);
    //Recojemos la respuesta, la convertimos en Json y la insertamos en el state.
    const respuestaServidor = await peticionServidor.json();
    setPelicula(respuestaServidor);
  }

  return (
    <div className="App">
      <div className=" w-screen pt-10 pb-10 bg-slate-700 h-screen flex justify-center flex-col items-center">
        {/* Formulario */}
        <form
          id="formulario"
          className=" flex justify-content items-center flex-col bg-slate-300 w-4/5 rounded-lg pt-10 h-44"
        >
          <label htmlFor="pelicula">Introduzca Pelicula</label>
          <input className=" rounded-lg w-1/2 h-8 mt-3 pl-3" type="text" name="pelicula" />
          <button
            className=" text-white bg-slate-600 rounded p-2 hover:bg-slate-500 mt-4 mb-4"
            type="submit"
            onClick={peticion}
          >
            Enviar
          </button>
        </form>
        {/* Peliculas que busque */}
        <div className=" gap-10 w-4/5 mt-10">
          {peliculaState.Title ? (
            <PeliculaComponente datos={peliculaState} />
          ) : (
            <h1 className="text-white text-center">No hay pelicula seleccionada</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
