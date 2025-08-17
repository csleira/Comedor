import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../contexts/usuario_context";


const LoginPage = () => {
  const { setUsuario } = useContext(UsuarioContext);
  const navigate = useNavigate();

  const handleLoginAdmin = () => {
    setUsuario({ usuario: "ADMIN", rol: "admin" });
    navigate("/"); // después de login redirige al inicio
  };

  const handleLoginUsuario = () => {
    setUsuario({ usuario: "USER", rol: "usuario" });
    navigate("/");
  };

  const handleLoginCocina = () => {
    setUsuario({ usuario: "COCINA", rol: "cocina" });
    navigate("/");
  };

   const handleLoginRRHH = () => {
    setUsuario({ usuario: "RRHH", rol: "rrhh" });
    navigate("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Login</h1>
      <button
        onClick={handleLoginAdmin}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        Entrar como Admin
      </button>
      <button
        onClick={handleLoginUsuario}
        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
      >
        Entrar como Usuario
      </button>
      <button
        onClick={handleLoginCocina}
        className="bg-orange-500 text-white px-4 py-2 rounded mr-2"
      >
        Entrar como Cocina
      </button>
      <button
        onClick={handleLoginRRHH}
        className="bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Entrar como RRHH
      </button>
    </div>
  );
};

export default LoginPage;