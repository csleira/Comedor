import { useEffect, useContext } from "react";
import { ConfigContext } from "../contexts/config_context";

const ConfigPage = () => {

  
  const{aConfig, setConfig, getParametros, setParametros } = useContext(ConfigContext);
  
  // Hook useEffect sin parametros, se ejecuta solo cuando se incializa el componente
  // Carga el array aConfig con los datos importados
  useEffect(() => {
    getParametros();
  }, []);

  
  const handleFormSubmit = (evento) => {
    // Evita el comportamiento por defecto de los formularios, 
    // el formulario no va a recargar la pagina cuando se envie. 
    evento.preventDefault();
    // Persiste los datos de aConfig
    setParametros();
  };

  const handleInputNombre = (evento) => {
    setConfig( {...aConfig, nombre:evento.target.value} );
  };

  const handleInputCorreo = (evento) => {
    setConfig( {...aConfig, correo:evento.target.value} );
  };

  const handleInputDireccion = (evento) => {
    setConfig( {...aConfig, direccion:evento.target.value} );
  };

  const handleInputTelefono = (evento) => {
    setConfig( {...aConfig, telefono:evento.target.value} );
  };

  const handleInputHoraPedidosInicio = (evento) => {
    setConfig( {...aConfig, horaPedidosInicio:evento.target.value} );
  };
  
  const handleInputHoraPedidosFin = (evento) => {
    setConfig( {...aConfig, horaPedidosFin:evento.target.value} );
  };

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Parametros Generales
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Parametros de Configuracion General
            </p>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="lg:w-auto md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <fieldset>
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Ingrese su nombre"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={aConfig ? aConfig.nombre : ""}
                        onChange={handleInputNombre}
                      />
                    </fieldset>
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                      <fieldset>
                        <label
                          htmlFor="telefono"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Telefono(s)
                        </label>
                        <input
                          type="text"
                          id="telefono"
                          name="telefono"
                          placeholder="Ingrese su telefono"
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          value={aConfig ? aConfig.telefono : ""}
                          onChange={handleInputTelefono}
                        />
                      </fieldset>
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <fieldset>
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Correo
                      </label>
                      <input
                        type="email"
                        id="correo"
                        name="correo"
                        placeholder="Ingrese su correo"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={aConfig ? aConfig.correo : ""}
                        onChange={handleInputCorreo}
                      />
                    </fieldset>
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <fieldset>
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Direccion
                      </label>
                      <input
                        type="text"
                        id="direccion"
                        name="direccion"
                        placeholder="Ingrese su dirección"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={aConfig ? aConfig.direccion : ""}
                        onChange={handleInputDireccion}
                      />
                    </fieldset>
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <fieldset className="flex space-x-2">
                      <div className="flex-1">
                        <label htmlFor="hora_inicial" className="leading-7 text-sm text-gray-600">
                          Hora de Inicio
                        </label>
                        <input
                          type="time"
                          id="hora_inicial"
                          name="hora_inicial"
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          value={aConfig ? aConfig.horaPedidosInicio : ""}
                          onChange={handleInputHoraPedidosInicio}
                        />
                      </div>

                      <div className="flex-1">
                        <label htmlFor="hora_final" className="leading-7 text-sm text-gray-600">
                          Hora de Fin
                        </label>
                        <input
                          type="time"
                          id="hora_final"
                          name="hora_final"
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          value={aConfig ? aConfig.horaPedidosFin : ""}
                          onChange={handleInputHoraPedidosFin}
                        />
                      </div>
                    </fieldset>
                  </div>
                </div>

                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Actualizar
                  </button>
                </div>

              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  ); 

  
}

export default ConfigPage;
