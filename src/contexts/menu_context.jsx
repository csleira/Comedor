// Contexto para Menues

import { createContext} from "react";
import { useState } from "react";

const MenuContext = createContext();

function MenuProvider(props) {

    // Array de Menues
    const [aMenues, setMenues] = useState([]);

    // funcion getMenues, carga el array con Informacion.
    const getMenues = () => {

        const aMenuesDB = [
            {
            id: 1,
            dia: "Lunes",
            menu1: "Entrecot con salsa de mostaza y puré papas",
            menu2: "Tarta de jamón y queso",
            postre: "Frutas",
            },
            {
            id: 2,
            dia: "Martes",
            menu1: "Arrollado de pollo con fritas",
            menu2: "Tarta de vegetales",
            postre: "Pasta frola",
            },
            {
            id: 3,
            dia: "Miércoles",
            menu1: "Costillas de cerdo con papas al horno",
            menu2: "Tarta de cebolla y queso",
            postre: "Bizcochuelo de naranja",
            },
            {
            id: 4,
            dia: "Jueves",
            menu1: "Musaka de berenjenas",
            menu2: "Tarta de atún",
            postre: "Torta de manzanas",
            },
            {
            id: 5,
            dia: "Viernes",
            menu1: "Colita y chorizo a las brazas",
            menu2: "Omelette de jamón y queso",
            postre: "Frutas",
            },
            ];

        setMenues(aMenuesDB);

    }; 

    return (
        <MenuContext.Provider value = {{ aMenues, getMenues}}>
            {props.children}
        </MenuContext.Provider>
   
    );
   
}

export { MenuContext, MenuProvider };