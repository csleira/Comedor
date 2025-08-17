// Contexto para Usuarios

import { createContext, useState } from "react";

const UsuarioContext = createContext();

function UsuarioProvider(props) {
 
    const [oUsuario, setUsuario] = useState(null);
    const [aUsuarios, setUsuarios] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // funcion getUsuarios, carga el array con Informacion de la Base de Datos JSON.
    const getUsuarios = async () => {

        setIsLoading(true);
        try {

            const response = await fetch("http://localhost:8000/users");
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response}`);
            }
            const data = await response.json();
            setUsuarios(data); 

        } catch (error) {
            console.log("Error al obtener la Informacion", error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
  
    };

    const usuarioLogout = () => {
        setUsuario(null);
    }


    return (
        <UsuarioContext.Provider value = {{ oUsuario, aUsuarios, getUsuarios, setUsuario, usuarioLogout}}>
            {props.children}
        </UsuarioContext.Provider>
   
    );
   
}

export { UsuarioContext, UsuarioProvider };