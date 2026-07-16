/** Consultas de mídia avaliadas uma vez no carregamento (paridade com o site original). */
export const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
export const isFinePointer = window.matchMedia('(hover:hover) and (pointer:fine)').matches
export const isMobile = window.matchMedia('(max-width: 760px)').matches
