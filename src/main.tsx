import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'

const container = document.getElementById('root')!
const tree = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Se o build pré-renderizou o HTML, hidrata; senão monta do zero.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}
