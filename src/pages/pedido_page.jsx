import { useState, useEffect, useContext } from "react";
import { useNavigate} from "react-router-dom"; 
import { ConfigContext } from "../contexts/config_context";
import { UsuarioContext } from "../contexts/usuario_context";
import MensajeComp from "../components/mensaje_comp";

const PedidoPage = () => {

  const{aConfig, setConfig, getParametros, setParametros} = useContext(ConfigContext);
  const {oUsuario} = useContext(UsuarioContext);
  
  const navigate = useNavigate();
  
  // variable para mostrar mensajes
  const [mensaje, setMensaje] = useState("");
  // variable para guardar los datos del pedido
  const [pedido, setPedido] = useState({
    id: "",
    usuario: "",
    local: "Central",  
    menues: [],
    bebidas: [],
    frutas: [],
    ensaladas: [],
    fecha: new Date().toLocaleString()
  });

  // Objeto listas con todos las opciones
    const olistas = {
    bebidas: ["Agua", "Coca Cola", "Jugo"],
    frutas: ["Manzana", "Banana", "Naranja","Pera","Sandia","Melon"],
    ensaladas: ["Lechuga", "Zanahoria", "Pepino","Papa","Huevo","Aceitunas","Arroz"],
  };

  
  // Hook useEffect sin parametros, se ejecuta solo cuando se incializa el componente
  // Carga el array aConfig con los datos importados
  useEffect(() => {
    getParametros();
  }, []);

  
  const handleFormSubmit = (evento) => {
    evento.preventDefault();

    const pedidoFinal = {
      ...pedido,
      id: `PED-${Date.now()}`, //devuelve un número único basado en la fecha/hora y PED-
      usuario: oUsuario.usuario,
      fechaHora: new Date().toLocaleString(),
    };

    console.log("Pedido generado:", pedidoFinal);

    // Guarda en el localStorage el pedido
    localStorage.setItem("pedido", JSON.stringify(pedidoFinal));

    setMensaje("Pedido enviado correctamente!");
 
    // Volver a la página de inicio
    //navigate("/", { replace: true }); // reemplaza la ruta actual
        // redirigir luego de mostrar mensaje
    setTimeout(() => navigate("/", { replace: true }), 1500);
  };


   const handleCheck = (categoria, item) => {
    setPedido((prev) => {
      const yaMarcado = prev[categoria].includes(item);
      return {
        ...prev,
        [categoria]: yaMarcado
          ? prev[categoria].filter((x) => x !== item)
          : [...prev[categoria], item],
      };
    });
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

                  {/* Listas con checkbox */}
                  {Object.keys(olistas).map((categoria) => (
                    <div key={categoria} className="p-2 w-1/2">
                      <fieldset className="border border-gray-300 rounded-lg p-4">
                        <legend className="text-lg font-medium text-gray-900 mb-2">
                          {categoria.toUpperCase()}
                        </legend>
                        <div className="flex flex-col space-y-2">
                          {olistas[categoria].map((item) => (
                            <label key={item} className="inline-flex items-center">
                              <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-indigo-600"
                                checked={pedido[categoria].includes(item)}
                                onChange={() => handleCheck(categoria, item)}
                              />
                              <span className="ml-2 text-gray-700">{item}</span>
                            </label>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}

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
      
          {/* Componente de mensaje */}
          <MensajeComp mensaje={mensaje} onClose={() => setMensaje("")} />
        </div>
      </section>
    </>
  ); 

  
}

export default PedidoPage;
