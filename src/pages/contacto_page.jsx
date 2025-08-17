import { useState, useContext } from "react";
import { ConfigContext } from "../contexts/config_context";

const ContactoPage = () => {

  // importo variables de Contexto, se supone que estan cargadas por Inicio
    const{ aConfig } = useContext(ConfigContext);

  // Defino un objeto con los datos del Formulario
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    asunto: "",
    mensaje: ""
  });

  const handleSubmit = (evento) => {
    /* Evita el comportamiento por defecto de los formularios, 
    el formulario no va a recargar la pagina cuando se envie. */
    evento.preventDefault();
 
    const destinatario = aConfig.correo;
    const asunto = encodeURIComponent(datosForm.asunto);
    const cuerpo = encodeURIComponent(datosForm.mensaje + "\n\n" + datosForm.nombre);
  
    if (datosForm.mensaje !== "") {
      /* Abre el Correo de Google en una pagina nueva 
      const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${asunto}&body=${cuerpo}`;
      window.open(url, "_blank"); */
      
      /* Abre el Correo Predeterminado */
      window.location.href = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;
    } else {
      alert("El mensaje no puede estar vacio")
    }

    console.log(datosForm);

  };

  const handleNombreInput = (evento) => {
    setDatosForm( {...datosForm, nombre:evento.target.value} );
  };

  const handleAsuntoInput = (evento) => {
    setDatosForm( {...datosForm, asunto:evento.target.value} );
  };

  const handleMensajeTextarea = (evento) => {
    setDatosForm( {...datosForm, mensaje:evento.target.value} );
  };

  
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contáctenos
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Estamos a su disposición para responder consultas, tomar reservas
              o brindarle información sobre nuestros servicios y menú. Puede
              comunicarse con nosotros por los medios disponibles o visitarnos
              en nuestro local. Será un placer atenderlo.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
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
                        value={datosForm.nombre}
                        onChange={handleNombreInput}
                      />
                    </fieldset>
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <fieldset>
                      <label
                        htmlFor="asunto"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Asunto
                      </label>
                      <input
                        type="text"
                        id="asunto"
                        name="asunto"
                        placeholder="Ingrese el asunto"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={datosForm.asunto}
                        onChange={handleAsuntoInput}
                      />
                    </fieldset>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <fieldset>
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Mensaje
                      </label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        placeholder="Ingrese su consulta ó comentario"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        value={datosForm.mensaje}
                        onChange={handleMensajeTextarea}
                      />
                    </fieldset>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Enviar Correo
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-indigo-500">{aConfig.correo}</a>
                  <p className="leading-normal my-5">
                    {aConfig.direccion}
                    <br />
                    {aConfig.telefono}
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactoPage;
