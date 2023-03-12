export default function Gatos({ hecho, imagenGato }) {
  return (
    <div className="w-1/2">
      <h1 className="mb-5">
        <i>"{hecho}"</i>
      </h1>
      <img src={`https://cataas.com${imagenGato}`} alt="imagen-gato" />
    </div>
  );
}
