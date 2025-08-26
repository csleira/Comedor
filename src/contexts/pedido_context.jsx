// Contexto para Comida, implementa las funciones para manejar un array de Comidas.

import { createContext } from "react";
import { useState } from "react";

const PedidoContext = createContext();

function PedidoProvider(props) {

        // Objeto con Informacion del Pedido
        const [oPedido, setPedido] = useState({
                id: "",
                usuario: "",
                local: "",
                menues: [],
                bebidas: [],
                frutas: [],
                ensaladas: [],
                fechaHora: new Date().toLocaleString(),
        });

        // Objetos listas con todos las opciones para el Pedido
        const [aBebidas, setBebidas] = useState(["Agua", "Refresco", "Jugo","Cafe","Te"]);
        const [aFrutas, setFrutas] = useState(["Manzana", "Banana", "Naranja","Pera","Sandia","Melon","Uva"]);
        const [aEnsaladas, setEnsaladas] = useState(["Lechuga", "Zanahoria", "Pepino","Papa","Huevo","Aceitunas","Arroz"]);
        const [aLocales, setLocales] = useState(["Central","Sucursal1","Sucursal2","Sucursal3"]);

        // Funcion savePedido, persiste en el Local Storage el objeto oPedido
        // el localStorage solo guarda cadenas de texto (string),
        // convertir de texto-JSON  a texto-string para guardar con JSON.stringify
        const savePedido = () => {

            try {
                localStorage.setItem("pedido", JSON.stringify(oPedido));
                }
            catch {
            }

            return
        }



    return (
   
        <PedidoContext.Provider value = {{oPedido,setPedido,savePedido,aBebidas,aFrutas,aEnsaladas,aLocales}}>
            {props.children}
        </PedidoContext.Provider>

    );
};

export {PedidoContext,PedidoProvider};