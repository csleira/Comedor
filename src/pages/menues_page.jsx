import { useContext, useEffect } from "react";
import {MenuContext} from "../contexts/menu_context";
import CardMenu from "../components/card_menu_comp";

const MenuesPage = () => {
  
   const{ aMenues, getMenues } = useContext(MenuContext);
 
  // Hook useEffect sin parametros, se ejecuta solo cuando se incializa el componente
  useEffect(() => {
    getMenues();
  }, []);

  // funcion HTMLmenues: para generar codigo HTML con las cards de cada menu 
  const HTMLmenues = () => {
    const hoy = new Date();
    const dia = hoy.getDay();

    return (
      <div className="flex flex-wrap -m-4">
        {aMenues.map((oMenu) => (
          <CardMenu menu={oMenu} isSelected={oMenu.id==dia} key={oMenu.id} />
        ))}
      </div>
      );
  };


  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Menu de la Semana
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Por opciones de menú aptos para diabéticos, celíacos, alérgicos, intolerantes 
              a la lactosa, hipertensos, embarazadas, etc. consultar con el comedor. 
            </p>
          </div>
          <HTMLmenues/>
          <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Realizar Pedido
          </button>
        </div>
      </section>
    </>
  );

};

export default MenuesPage;
