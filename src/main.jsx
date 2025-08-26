import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {ComidaProvider} from './contexts/comida_context.jsx'
import { UsuarioProvider } from './contexts/usuario_context.jsx'
import { MenuProvider} from './contexts/menu_context.jsx'
import { ConfigProvider } from './contexts/config_context.jsx'
import { PedidoProvider } from './contexts/pedido_context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider>
      <UsuarioProvider>
        <ComidaProvider>
          <MenuProvider>
            <PedidoProvider>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
            </PedidoProvider>
          </MenuProvider>
        </ComidaProvider>
      </UsuarioProvider>
    </ConfigProvider>
  </StrictMode>,
)
