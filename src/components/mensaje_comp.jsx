import { useEffect, useState } from "react";

const MensajeComp = ({ mensaje, tipo = "success", duracion = 3000, onClose }) => {
  
    const [visible, setVisible] = useState(false);
    const colores = {
        success: "bg-green-500",
        error: "bg-red-500",
        warning: "bg-yellow-500 text-gray-900",
        };
  
    // Ejecuta el efecto cada vez que cambia mensaje, duracion o onClose.
    // Ideal para reiniciar el temporizador si llega un nuevo mensaje mientras el anterior aún se muestra.
    // Crea un temporizador que llama a la función onClose después de duracion milisegundos (por defecto 3000ms).
    // onClose normalmente actualiza el estado en el componente padre (setMensaje("")) para ocultar el toast.
    useEffect(() => {
        if (mensaje) {
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false); // inicia fade-out
            setTimeout(onClose, 300); // cierra después de la animación
        }, duracion);

        return () => clearTimeout(timer);
        }
    }, [mensaje, duracion, onClose]);

    if (!mensaje) return null;


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className={`px-6 py-4 rounded-lg shadow-lg text-center text-white transition-opacity duration-300
                ${visible ? "opacity-100" : "opacity-0"} ${colores[tipo] || colores.success}`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-white p-1 bg-orange-500 rounded-full"
                    viewBox="0 0 24 24"
                    >
                    <path d="M6 2v7M8 2v7M10 2v7M7 9v13" />
                    <path d="M14 2c0 4 2 6 2 10v10M18 2c0 5-2 7-2 10" />
                </svg>
                <span className="ml-3">{mensaje}</span>
            </div>
        </div>
    );

};

export default MensajeComp;