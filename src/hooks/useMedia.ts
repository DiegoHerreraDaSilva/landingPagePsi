/** Consultas de mídia avaliadas uma vez no carregamento (paridade com o site original).
 *  Guarda para SSR/prerender: no Node não existe window/matchMedia. */
const matches = (query: string) =>
  typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    ? window.matchMedia(query).matches
    : false

export const prefersReduced = matches('(prefers-reduced-motion: reduce)')
export const isFinePointer = matches('(hover:hover) and (pointer:fine)')
export const isMobile = matches('(max-width: 760px)')
