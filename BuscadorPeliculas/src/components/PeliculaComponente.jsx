import React from 'react';

export default function ({ datos }) {
  //Con los datos obtenidos de la petición al servidor imprimimos los datos por pantalla
  return (
    <div className="text-white text-center flex justify-center items-center flex-col gap-4">
      <img src={datos.Poster} alt="imagen-pelicula" />
      <span>
        {datos.Title} ({datos.Year})
      </span>
      <p>{datos.Plot}</p>
    </div>
  );
}
