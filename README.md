# 🥖 Cardápio Digital – Nova Penha Pão

Cardápio digital da **Nova Penha Pão**, padaria tradicional desde 1966. É um site estático, pensado primeiro para celular e com boa aparência no desktop. Mostra apenas o que importa para o cliente: produtos, fotos, descrições, preços e códigos dos itens.

## ✨ Funcionalidades

- **Filtro por categoria e subcategoria** com rolagem horizontal. O menu fica fixo no topo enquanto o cliente navega.
- **Busca global**, que ignora acentos e procura por nome, descrição e código. Ao buscar, a categoria selecionada é desmarcada para pesquisar em todo o cardápio.
- **Mais de 220 itens** em cafés e pães, pratos do dia, adicionais, porções, lanches, pizzas, bebidas e festas.
- **Fotos reais dos produtos**. Itens sem foto mostram um ícone da categoria.
- **Layout responsivo**, com cartões em lista no celular e em grade no desktop.

## 🎨 Identidade visual

| Elemento | Valor |
|---|---|
| Cor principal | `#530303` (vinho) |
| Fundo | `#EBE0D3` (bege) |
| Destaque | `#F0B24B` (dourado) |
| Tipografia | [Inter](https://rsms.me/inter/) (hospedada em `assets/fonts/`) |
| Ícones | [Phosphor Icons](https://phosphoricons.com/) (Light) |

## 🛠️ Tecnologias

HTML, CSS e JavaScript puros. Não precisa de build, framework nem dependências. Nenhuma requisição externa: a fonte Inter fica em `assets/fonts/`. Funciona como app (PWA) e abre offline depois da primeira visita.

## 📁 Estrutura

```
index.html                    página e sprite de ícones
sw.js                         service worker (cache e modo offline)
manifest.webmanifest          instalação como app (PWA)
css/styles.css                design system e estilos
js/data.js                    categorias, itens, preços, códigos e mapa de fotos
js/app.js                     filtros, busca e renderização
assets/logo.svg               logo da padaria
assets/img/hero-bg.webp       foto de fundo do topo
assets/img/og-image.jpg       imagem que aparece ao compartilhar o link (1200x630)
tools/build-seo.js            gera lista indexável, JSON-LD, sitemap e robots
vercel.json                   cache e cabeçalhos de segurança
robots.txt / sitemap.xml      para o Google
assets/img/produtos/*.webp    fotos dos produtos (máx. 360 px, carregadas sob demanda)
assets/fonts/                 fonte Inter (woff2)
assets/icons/                 ícones do app
```

## 🚀 Como usar

1. Clone ou baixe o repositório.
2. Abra o `index.html` no navegador.
3. Para publicar, envie a pasta inteira para qualquer hospedagem estática (GitHub Pages, Netlify, Vercel etc.).

## ✏️ Como editar o cardápio

- **Nome, descrição ou preço:** edite `js/data.js`, em `const C`. Cada linha segue o formato `nome|descrição|preço`.
- **Código do item (cód-xxx):** edite `const K`, na mesma ordem dos itens da subcategoria.
- **Adicionar foto:**
  1. Coloque a imagem (quadrada, cerca de 400 px, WebP ou JPG) em `assets/img/produtos/`.
  2. Em `css/styles.css`, crie uma classe, por exemplo `.ph200{background-image:url("../assets/img/produtos/minha-foto.webp")}`.
  3. Em `js/data.js`, ligue o item à classe em `const PH`: `"Subcategoria|Nome do item":200`.

Vários itens podem apontar para o mesmo número e compartilhar a mesma foto.

## 📌 Observações

- As imagens são meramente ilustrativas.
- Faltam fotos em: pães do café, lanches, churrasco, beirute e hambúrgueres.

## ⚡ Desempenho e modo offline

- **Fotos sob demanda:** cada foto só é baixada quando o card chega a 400 px da tela.
- **Abertura curta:** a animação do logo aparece só na primeira visita (0,9 s).
- **Tela inicial:** atalho do prato do dia e grade de categorias. O botão voltar do celular funciona (`#categoria/subcategoria`).
- **Offline:** o service worker (`sw.js`) usa a rede primeiro para textos e preços, então preço novo chega assim que há internet. Fotos, fonte e ícones ficam em cache. Só funciona em `https://` (ou localhost).
- **Ao trocar fotos ou fonte,** aumente `V` em `sw.js` (ex.: `penha-v2`) para renovar o cache dos clientes.
- **Novas fotos:** o nome do arquivo vem da lista `PF` em `js/app.js` (sem `.webp`), indexada pelo mapa `PH`.

## 🔎 SEO e compartilhamento

- **Metatags:** título, descrição, canonical, Open Graph (WhatsApp, Facebook, Instagram, LinkedIn) e Twitter/X em `index.html`. A imagem de compartilhamento é `assets/img/og-image.jpg` (1200 × 630, JPG, que é o formato aceito por todas as redes).
- **Dados estruturados (JSON-LD):** padaria (`Bakery`), cardápio (`Menu`) e site (`WebSite`).
- **Conteúdo indexável:** o cardápio completo fica no HTML (nome, descrição e preço) e é trocado pelo app assim que o JavaScript carrega. Robôs que não rodam JavaScript também leem tudo.
- **Depois de editar `js/data.js`**, rode `node tools/build-seo.js` para atualizar essa lista, o JSON-LD e o `sitemap.xml`.
- **Domínio próprio:** troque `SITE` em `tools/build-seo.js`, rode o script e troque as URLs `https://cardapiopenhapao.vercel.app` nas metatags de `index.html` (canonical, `og:url`, `og:image`, `twitter:image`).
- **Testar o compartilhamento:** depois de publicar, cole o link em <https://developers.facebook.com/tools/debug/> e clique em "Coletar novamente". O WhatsApp guarda a imagem antiga em cache por um tempo.
