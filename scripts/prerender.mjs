import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const { render } = await import(pathToFileURL(resolve(root, 'dist-ssr/prerender.js')).href)

const indexPath = resolve(root, 'dist/index.html')
const html = readFileSync(indexPath, 'utf8')
const marker = '<div id="root"></div>'

if (!html.includes(marker)) {
  throw new Error('prerender: marcador <div id="root"></div> não encontrado em dist/index.html')
}

writeFileSync(indexPath, html.replace(marker, `<div id="root">${render()}</div>`))
console.log('prerender: dist/index.html gerado com conteúdo pré-renderizado.')
