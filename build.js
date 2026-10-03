import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

// Limpar e recriar diretório dist
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Lista de arquivos e diretórios estáticos essenciais do Curio Mundo
const assets = [
  'index.html',
  '404.html',
  'categorias.html',
  'curiosidades.html',
  'sobre.html',
  'contacto.html',
  '_headers',
  'robots.txt',
  'sitemap.xml',
  'css',
  'js',
  'imagens',
  'artigos',
  'admin'
];

for (const item of assets) {
  if (fs.existsSync(item)) {
    fs.cpSync(item, path.join(distDir, item), { recursive: true });
  }
}

console.log('✓ Curio Mundo: Compilado com sucesso em /dist para publicação Cloudflare!');
