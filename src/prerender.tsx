import { renderToString } from 'react-dom/server'
import App from './App'

/** Renderiza o app para HTML estático no build (ver scripts/prerender.mjs). */
export function render() {
  return renderToString(<App />)
}
