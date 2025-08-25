import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/usuario_context";

export default function ProtectedRoutesComp({ children, aRolesPermitidos }) {

  const { oUsuario } = useContext(UsuarioContext);

  // Sino esta logueado (esta variable se carga en Login), lo lleva a la pagina de Login //
  if (!oUsuario || !oUsuario.usuario) return <Navigate to="/login" replace />;

  // Admin tiene acceso a todo
  if (oUsuario.rol === "admin") return children;

  // Evalue si el rol tiene o no acceso a la pagina
  if (!aRolesPermitidos.includes(oUsuario.rol)) {
    return <Navigate to="/" replace />;}
  else {
    return children;
  }

  // NOTA: Sin replace, el usuario podría apretar “atrás” en el navegador y volver a la página prohibida. //

}