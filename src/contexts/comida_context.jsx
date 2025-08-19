// Contexto para Comida 

import { createContext } from "react";
import { useState } from "react";

const ComidaContext = createContext();

function ComidaProvider(props) {

    // Array de Comidas
    const [aComidas, setComidas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // funcion getComidas, carga el array con Informacion de la API.
    const getComidas = async () => {

        setIsLoading(true);
        try {

            const response = await fetch("https://dog.ceo/api/breeds/image/random/6");
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response}`);
            }
            const data = await response.json();
            // La API devuelve el array simple de message de URLs -> lo convertimos en objetos con id y valor
            const data_object = data.message.map( (valor, index) => ({id: index, url: valor}) );
            setComidas(data_object); 

        } catch (error) {
            console.log("Error al obtener la Informacion", error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
   
        <ComidaContext.Provider value = {{aComidas, getComidas, isLoading, error}}>
            {props.children}
        </ComidaContext.Provider>

 
    );
}

export {ComidaContext,ComidaProvider};