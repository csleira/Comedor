import { useEffect, useContext} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ConfigContext} from "../contexts/config_context";
import { UsuarioContext } from "../contexts/usuario_context";


const HeaderComp = () => {

  const btnButtonCSS =
    "inline-block py-1 text-white hover:text-orange-400 cursor-pointer mr-4";
  const btnButtonCSSactive = "inline-block py-1 text-orange-400 mr-4";

  const{ aConfig, getParametros } = useContext(ConfigContext);
  const{ oUsuario,usuarioLogout } = useContext(UsuarioContext);
  const navigate = useNavigate();

  // Hook useEffect sin parametros, se ejecuta solo cuando se incializa el componente
  useEffect(() => {
    getParametros();
  }, []);


 const handleClickIngreso = () => {
   if (!oUsuario) {
    navigate("/login"); 
   }

  };

  const handleClickSalir = () => {
    if (oUsuario) {
      usuarioLogout();
      navigate("/"); // Por ahora redirige al inicio
    }

  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-gray-600">
           <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
             <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-white p-2 bg-orange-500 rounded-full"
              viewBox="0 0 24 24"
            >
              {/* Tenedor */}
              <path d="M6 2v7M8 2v7M10 2v7M7 9v13" />
              {/* Cuchillo */}
              <path d="M14 2c0 4 2 6 2 10v10M18 2c0 5-2 7-2 10" />
            </svg>
            <span className="ml-3 text-2xl">{aConfig.nombre}</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? btnButtonCSSactive : btnButtonCSS
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/menues"
              className={({ isActive }) =>
                isActive ? btnButtonCSSactive : btnButtonCSS
              }
            >
              Menues
            </NavLink>
            <NavLink
              to="/galeria"
              className={({ isActive }) =>
                isActive ? btnButtonCSSactive : btnButtonCSS
              }
            >
              Galeria
            </NavLink>
            <NavLink
              to="/configuracion"
              className={({ isActive }) =>
                isActive ? btnButtonCSSactive : btnButtonCSS
              }
            >
              Config.
            </NavLink>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive ? btnButtonCSSactive : btnButtonCSS
              }
            >
              Contacto
            </NavLink>
          </nav>
          <div>
            <button 
              onClick={handleClickIngreso}
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              {oUsuario ? oUsuario.usuario : "Ingreso"}
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14M5 12l7 7 7-7"></path>
              </svg>
            </button>
            <button 
              onClick={handleClickSalir}
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base ml-2 mt-4 md:mt-0">
              Salir
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );

}


export default HeaderComp;
