import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {MenuContext} from "../contexts/menu_context";
import {ConfigContext} from "../contexts/config_context";
import CardMenu from "../components/card_menu_comp";

const MenuesPage = () => {
  
  const{ aMenues, getMenues } = useContext(MenuContext);
  const {aConfig} = useContext(ConfigContext);
  
  const navigate = useNavigate();
 
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

  // funcion para controlar el horario de Pedidos
  const estaDentroHorario = () => {
    const ahora = new Date();

    // Convertimos hora inicio y fin de string a número explícitamente
    const [horaInicio, minutoInicio] = aConfig.horaPedidosInicio
      .split(":")
      .map(str => Number(str));
          const [horaFin, minutoFin] = aConfig.horaPedidosFin
      .split(":")
      .map(str => Number(str));

    // Creamos objetos Date para comparar
    const inicio = new Date();
    inicio.setHours(horaInicio, minutoInicio, 0, 0);

    const fin = new Date();
    fin.setHours(horaFin, minutoFin, 0, 0);

    // Retorna true si la hora actual está dentro del rango
    return ahora >= inicio && ahora <= fin;
  };

  // funcion para abrir el formulario de Pedidos
  const handleButtonSubmit = (evento) => {
    navigate("/pedido");
  };


  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-3 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Menu de la Semana
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Por opciones de menú aptos para diabéticos, celíacos, alérgicos, intolerantes 
              a la lactosa, hipertensos, embarazadas, etc. consultar con el comedor. 
            </p>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-800">
              Solicitud diaria de pedido al Comedor desde las 8:00 hasta las 11:00
            </p>
          </div>
          <HTMLmenues/>
          <button disabled={!estaDentroHorario()} onClick={handleButtonSubmit} className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Realizar Pedido
          </button>
        </div>
      </section>
    </>
  );

};

export default MenuesPage;
