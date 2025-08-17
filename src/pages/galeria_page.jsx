import { useEffect, useContext } from "react";
import CardFood from "../components/card_food_comp";
import { ComidaContext } from "../contexts/comida_context";

const GaleriaPage = () => {

  const{ aComidas, getComidas, isLoading } = useContext(ComidaContext);
 
  // Hook useEffect sin parametros, se ejecuta solo cuando se incializa el componente
  useEffect(() => {
    getComidas();
  }, []);

 
  // funcion HTMLimagenes, genera codigo HTML para las cards de cada imagen, 
  // si termina de cargar y hay imagenes.
  const HTMLimagenes = () => {
      
    return (
      <div className="flex flex-wrap -m-4">

        { isLoading ? (
          <p className="text-slate-400">Cargando imágenes...</p> )
         : ( aComidas.length > 0 ? 
               aComidas.map((oImagen) => (
                <CardFood imagen={oImagen} key={oImagen.id} />))
            : ( <p className="text-slate-400">No hay informacion disponible</p> )
            )
          }

      </div>
    );
  };


  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Nuestros platos, una invitación al buen sabor
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Descubrí la variedad y frescura que ofrecemos en cada preparación.
              Cada imagen refleja la dedicación y calidad que ponemos en cada
              plato para que disfrutes una experiencia inolvidable.
            </p>
          </div>
          <HTMLimagenes />
        </div>
      </section>
    </>
  );
};

export default GaleriaPage;
