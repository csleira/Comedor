// Contexto para Configuraciones

import { createContext} from "react";
import { useState } from "react";

const ConfigContext = createContext();

function ConfigProvider(props) {

    // Array de Parametros
    const [aConfig, setConfig] = useState({
        nombre: "", direccion: "", telefono: "", correo: ""});
    const data_default = { nombre: "COMEDOR", direccion: "Calle 1234", telefono: "598 23456 7890", correo: "comedor@comedor.com.uy" }

    // Funcion getParametros, carga el array aConfig con Informacion del Local Storage
    // el localStorage solo guarda cadenas de texto (string), 
    // convertir a texto-string a texto-JSON para usar como objeto con JSON.parse
    const getParametros = () => {

        try {
            const data = localStorage.getItem("config");
            setConfig(JSON.parse(data)); 
            }
        catch {

        }
    };

    // Funcion setParametros, persiste en el Local Storage el array aConfig
    // el localStorage solo guarda cadenas de texto (string),
    // convertir de texto-JSON  a texto-string para guardar con JSON.stringify
    const setParametros = () => {

        try {
            localStorage.setItem("config", JSON.stringify(aConfig));
            }
        catch {
            
        }
   
    };


    //Inicializa el localStorage la primera vez, cuando esta en null
    try {
        const data = localStorage.getItem("config") 
        if ( data==null) {
            localStorage.setItem("config", JSON.stringify(data_default));
        } 
    } catch {
 
    }

    return (
        <ConfigContext.Provider value = {{ aConfig, setConfig, getParametros, setParametros }}>
            {props.children}
        </ConfigContext.Provider>
   
    );
   
}

export { ConfigContext, ConfigProvider };