
export const GifItem = (/* props */ {title, url, id}) => {

  return (
    <div className="card">
        <img src= { url } alt= { title } /> {/* alt es el texto alternativo si no se carga la imagen */}
        <p> { title } </p>
    </div>
  );
};
