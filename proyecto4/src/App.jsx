import './App.css';
import Tecla from './components/Tecla';

function App() {
  listener();
  function listener() {
    document.addEventListener('keydown', audioKey);
  }

  function audioKey(event) {
    console.log(event.key);
  }

  return (
    <div className="App">
      <div id="container" className=" bg-slate-700 w-screen h-screen flex  items-center flex-col gap-7">
        <h1 className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-6xl font-bold text-transparent bg-clip-text mt-10">
          Piano
        </h1>
        <div id="piano" className="flex justify-center items-center">
          <Tecla nombre="A" />
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
