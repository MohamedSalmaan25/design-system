import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')

const tokensCss = readFileSync(join(__dirname, '..', '..', '..', 'packages', 'tokens', 'dist', 'tokens.css'), 'utf-8')
const componentsCss = readFileSync(join(dist, 'index.css'), 'utf-8')

const combined = tokensCss + '\n' + componentsCss
writeFileSync(join(dist, 'styles.css'), combined)

console.log(`Built styles.css (${combined.length} bytes)`)
