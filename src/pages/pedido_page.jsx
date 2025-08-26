import { useState, useEffect, useContext } from "react";
import { useNavigate} from "react-router-dom"; 
import { UsuarioContext } from "../contexts/usuario_context";
import { PedidoContext} from "../contexts/pedido_context";
import { MenuContext } from "../contexts/menu_context";
import MensajeComp from "../components/mensaje_comp";

const PedidoPage = () => {

  const {oUsuario} = useContext(UsuarioContext);
  const {aMenues,aMenuDia, getMenuDia} = useContext(MenuContext);
  const {oPedido, setPedido, aEnsaladas, aFrutas, aBebidas, aLocales, savePedido} = useContext(PedidoContext);
  
  const navigate = useNavigate();
  
  // variable para mostrar mensajes
  const [mensaje, setMensaje] = useState("");

  // variable para mostrar la confirmacion del pedido
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  // Hook useEffect sin parametros, se ejecuta solo cuando se incializa el componente
  // Carga el array aPedido con los datos importados
  useEffect(() => {

      // Carga el Array con el menu diario
      getMenuDia();

      // inicializa el Pedido
      setPedido({
          id: "",
          usuario: "",
          local: "",
          menues: [],
          bebidas: [],
          frutas: [],
          ensaladas: [],
          fechaHora: new Date().toLocaleString(),
      });
      
  }, []);

  
  const handleFormSubmit = (evento) => {
    evento.preventDefault();

    // validaciones del pedido
    if (!oPedido.local || oPedido.menues.length === 0) {
        setMensaje("Debes elegir al menos un menú y un local.");
        return;
    } 

    // prev => {...} es una función de actualización que React ejecuta con el estado más reciente, 
    // evitando errores de sincronización. Porque el estado en React no se actualiza al instante, es asíncrono.
    setPedido((prev) => {
        const pedido_actualizado = {
            ...prev,                // copio lo que ya tenía
            id: `PED-${Date.now()}`,                  // actualizo el id
            usuario: oUsuario.usuario,                // actualizo el usuario
            fechaHora: new Date().toLocaleString(),   // actualizo la fechaHora
          };
      return pedido_actualizado;   // este será el nuevo estado
    });

    // Muestra el resumen del pedido
    setMostrarConfirmacion(true);

  };

  const handleCheckButton = (local, valor) => {
    setPedido((prev) => ({
    ...prev,
    [local]: valor,
  }));
};  

  // Funcion generica que aplica para cualquiera de las listas y 
  // controla si ya esta el articulo en el pedido
  const handleCheckBox = (lista, item) => {
    setPedido((prev) => {
      const yaMarcado = prev[lista].includes(item);
      return {
        ...prev,
        [lista]: yaMarcado ? prev[lista].filter((x) => x !== item) : [...prev[lista], item],
      };
    });
  };

    // función HTML_check_menues: para generar código HTML con los menues y el postre
  const HTML_check_menues= () => {
    return (
      <div className="flex flex-col space-y-2 px-2">
        <legend className="text-lg font-medium text-gray-900 mb-2">
          MENUES DEL DIA
        </legend>
          {aMenuDia.map((opcion) => (
          <label key={opcion} className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
              checked={oPedido["menues"].includes(opcion)}
              onChange={() => handleCheckBox("menues", opcion)}
            />
            <span className="ml-2 text-gray-700">{opcion}</span>
          </label>
        ))}
      </div>
    );
  };

  // función HTML_check_bebidas: para generar código HTML con las Bebidas 
  const HTML_check_bebidas = () => {
    return (
      <div className="flex flex-col space-y-2 px-2">
        <legend className="text-lg font-medium text-gray-900 mb-2">
          BEBIDAS
        </legend>
        {aBebidas.map((bebida) => (
          <label key={bebida} className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
              checked={oPedido["bebidas"].includes(bebida)}
              onChange={() => handleCheckBox("bebidas", bebida)}
            />
            <span className="ml-2 text-gray-700">{bebida}</span>
          </label>
        ))}
      </div>
    );
  };

  // función HTML_check_ensaladas: para generar código HTML con las Ensaladas 
  const HTML_check_ensaladas = () => {
    return (
      <div className="flex flex-col space-y-2 px-2">
        <legend className="text-lg font-medium text-gray-900 mb-2">
          ENSALADAS
        </legend>
        {aEnsaladas.map((ensalada) => (
          <label key={ensalada} className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
              checked={oPedido["ensaladas"].includes(ensalada)}
              onChange={() => handleCheckBox("ensaladas", ensalada)}
            />
            <span className="ml-2 text-gray-700">{ensalada}</span>
          </label>
        ))}
      </div>
    );
  };

  // función HTML_check_frutas: para generar código HTML con las Frutas
  const HTML_check_frutas = () => {
    return (
      <div className="flex flex-col space-y-2 px-2">
        <legend className="text-lg font-medium text-gray-900 mb-2">
          FRUTAS
        </legend>
        {aFrutas.map((fruta) => (
          <label key={fruta} className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
              checked={oPedido["frutas"].includes(fruta)}
              onChange={() => handleCheckBox("frutas", fruta)}
            />
            <span className="ml-2 text-gray-700">{fruta}</span>
          </label>
        ))}
      </div>
    );
  };

  // función HTML_opcion_locales: para generar código HTML con los Locales
  const HTML_opcion_locales = () => {
    return (
      <fieldset className="flex flex-col space-y-2 px-2">
        <legend className="text-lg font-medium text-gray-900 mb-2">
          LOCAL
        </legend>
        {aLocales.map((local) => (
          <label key={local} className="inline-flex items-center">
            <input
              type="radio"
              name="local" // todos comparten el mismo "name" para que sea solo uno
              className="form-radio h-5 w-5 text-indigo-600"
              checked={oPedido.local === local} 
              onChange={() => handleCheckButton("local", local)}
            />
            <span className="ml-2 text-gray-700">{local}</span>
          </label>
        ))}
      </fieldset>
    );
  };

  // Componente para mostrar Tarjeta de Resumen
  const ResumenPedido = ({ pedido, onConfirmar, onCancelar }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 mt-6 max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Resumen del Pedido</h2>

        <p><strong>Usuario:</strong> {pedido.usuario}</p>
        <p><strong>Local:</strong> {pedido.local}</p>
        <p><strong>Menús:</strong> {pedido.menues.join(", ") || "Ninguno"}</p>
        <p><strong>Bebidas:</strong> {pedido.bebidas.join(", ") || "Ninguna"}</p>
        <p><strong>Frutas:</strong> {pedido.frutas.join(", ") || "Ninguna"}</p>
        <p><strong>Ensaladas:</strong> {pedido.ensaladas.join(", ") || "Ninguna"}</p>
        <p className="text-sm text-gray-500 mt-2">
          <em>Fecha y hora: {pedido.fechaHora}</em>
        </p>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            onClick={onCancelar}
          >
            Cancelar
          </button>
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
            onClick={onConfirmar}
          >
            Confirmar
          </button>
        </div>
      </div>
    );
  };


  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Pedidos al Comedor
            </h1>
            <h3 className="lg:w-1/2 mx-auto leading-relaxed text-base">
              POR PEDIDOS ESPECIALES (ALERGIAS, INTOLERANCIAS O DIETAS ESPECIFICAS) CONSULTAR ANTES DE LAS 10:00 AM 
            </h3>
          </div>

          <form onSubmit={handleFormSubmit}>
              <div className="lg:w-auto md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">

                  {/* Codigo HTML generado por las funciones de cada lista*/}
                  <HTML_check_menues/>
                  <HTML_check_ensaladas/>
                  <HTML_check_frutas/>     
                  <HTML_check_bebidas/>   
                  <HTML_opcion_locales/>

                  {/* Botón enviar */}
                  <div className="p-2 w-full">
                    <button
                      type="submit"
                      className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                      Pedir
                    </button>
                  </div>
               </div>
            </div>
          </form>

          {/* Tarjeta de Resumen */}
          {mostrarConfirmacion && (
              <ResumenPedido
                pedido={oPedido}
                onCancelar={() => setMostrarConfirmacion(false)}
                onConfirmar={() => {
                  savePedido();
                  setMensaje("Pedido enviado correctamente!");
                  setMostrarConfirmacion(false);
                  setTimeout(() => navigate("/", { replace: true }), 1500);
                }}
              />
          )}
      
          {/* Componente de mensaje */}
          <MensajeComp mensaje={mensaje} onClose={() => setMensaje("")} />
        </div>
      </section>
    </>
  ); 

  
}

export default PedidoPage;
