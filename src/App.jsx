import { Routes, Route, Navigate } from "react-router-dom"
import LayautComp from "./components/layaut_comp"
import ProtectedRoutesComp from "./components/protected_routes_comp"
import InicioPage from "./pages/inicio_page"
import MenuesPage from "./pages/menues_page"
import GaleriaPage from "./pages/galeria_page"
import ContactoPage from "./pages/contacto_page"
import ConfigPage from "./pages/config_page"
import LoginPage from "./pages/login_page"

function App() {

  return (
    <>
      <div>
        <Routes>
          {/* Rutas incluidas en el Layout, no llevan "/" sino no se renderizaran dentro del layout, pero en el Nav si */}
          {/* Route index, Ruta predeterminada por defecto, cuando se entre al padre */}
          <Route path="/" element={<LayautComp />}>
            <Route index element={<InicioPage />} />
            <Route path="menues" element={
                <ProtectedRoutesComp aRolesPermitidos={["admin","usuario"]}>
                    <MenuesPage />
                </ProtectedRoutesComp> 
              } 
            />
            <Route path="galeria" element={<GaleriaPage />} />
            <Route path="configuracion" element={
                <ProtectedRoutesComp aRolesPermitidos={["admin"]}>
                    <ConfigPage />
                </ProtectedRoutesComp> 
              }
            />
            <Route path="contacto" element={<ContactoPage />} />
          </Route>
          {/* Rutas fuera del Layout*/}
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>

  )
}

export default App

