import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(0);

  /**
   * Selecciona entre añadir X o O en el tablero
   * @param {evento} e
   */
  function tictactoe(e) {
    console.log(e.target.classList.length);

    if (e.target.classList.length !== 8) {
      if (state % 2 === 0) {
        e.target.value = 'X';
        e.target.classList.add('check');
        e.target.classList.add('text-red');
      } else {
        e.target.value = 'O';
        e.target.classList.add('check');
        e.target.classList.add('text-green');
      }
    }

    setState(state + 1);
    comprobarTicTacToe();
  }

  /**
   * Comprueba que no queden más huecos libres en el tablero
   */
  function comprobarTicTacToe() {
    let acabado = true;

    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].classList.length === 7) {
        acabado = false;
      }
    }
    if (acabado) {
      document.getElementById('acabado').innerHTML = 'Juego Acabado';
    }
  }

  return (
    <div className="App">
      <div className=" bg-slate-700 h-screen flex justify-center items-center flex-col">
        <h1 id="acabado" className="text-xl text-white mb-10"></h1>
        <form>
          <table className=" table-fixed text-sm text-left text-gray-500  dark:text-gray-400">
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td className="cursor-pointer">
                  <input
                    className=" text-center hover:border m-2 cursor-pointer bg-transparent w-10 h-10"
                    type="text"
                    onClick={tictactoe}
                    readonly="readonly"
                  />
                </td>
                <td className="">
                  <input
                    className=" text-center hover:border m-2 cursor-pointer bg-transparent w-10 h-10"
                    type="text"
                    onClick={tictactoe}
                    readonly="readonly"
                  />
                </td>
                <td className="">
                  <input
                    className=" text-center hover:border m-2 cursor-pointer bg-transparent w-10 h-10"
                    type="text"
                    onClick={tictactoe}
                    readonly="readonly"
                  />
                </td>
              </tr>
              <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <td className="">
                  <input
                    className=" text-center hover:border m-2 cursor-pointer bg-transparent w-10 h-10"
                    type="text"
                    onClick={tictactoe}
                    readonly="readonly"
                  />
                </td>
                <td className="">
                  <input
                    className=" text-center hover:border m-2 cursor-pointer bg-transparent w-10 h-10"
                    type="text"
                    onClick={tictactoe}
                    readonly="readonly"
                  />
                </td>
                <td className="">
                  <input
                    className=" text-center hover:border m-2 cursor-pointer bg-transparent w-10 h-10"
                    type="text"
                    onClick={tictactoe}
                    readonly="readonly"
                  />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td className="">
                  <input
                    className=" text-center hover:border m-2 cursor-pointer bg-transparent w-10 h-10"
                    type="text"
                    onClick={tictactoe}
                    readonly="readonly"
                  />
                </td>
                <td className="">
                  <input
                    className=" text-center hover:border m-2 cursor-pointer bg-transparent w-10 h-10"
                    type="text"
                    onClick={tictactoe}
                    readonly="readonly"
                  />
                </td>
                <td className="">
                  <input
                    className=" text-center hover:border m-2 cursor-pointer bg-transparent w-10 h-10"
                    type="text"
                    onClick={tictactoe}
                    readonly="readonly"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="w-full p-3 bg-slate-50 rounded mt-10" type="submit">
            Empezar de Nuevo
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
