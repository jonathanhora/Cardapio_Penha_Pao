# Cardápio Digital – Nova Penha Pão

Site estático (HTML + CSS + JavaScript puro), sem build e sem dependências.

## Como abrir
Dê dois cliques em `index.html`. Para publicar, envie a pasta inteira para qualquer hospedagem estática.
A fonte **Inter** é carregada do Google Fonts (precisa de internet na primeira vez).

## Estrutura
```
index.html            estrutura da página + sprite de ícones Phosphor (Light)
css/styles.css        design system e estilos (paleta #530303 / #EBE0D3, dourado #F0B24B)
js/data.js            DADOS: categorias, itens, preços, códigos e mapa de fotos
js/app.js             filtros, busca e renderização
assets/logo.svg       logo da padaria
assets/img/hero-bg.jpg        foto de fundo do topo
assets/img/produtos/*.webp    fotos dos produtos (400 px)
```

## Como editar
**Preço, nome ou descrição:** em `js/data.js`, dentro de `const C`. Cada linha é `nome|descrição|preço`.

**Código do item (cód-xxx):** em `const K` (mesma ordem dos itens de cada subcategoria).

**Adicionar foto a um item:**
1. Coloque a imagem (quadrada, ~400 px, WebP/JPG) em `assets/img/produtos/`.
2. Em `css/styles.css`, crie uma classe nova, por exemplo:
   `.ph80{background-image:url("../assets/img/produtos/minha-foto.webp")}`
3. Em `js/data.js`, no mapa `const PH`, ligue o item à classe:
   `"Subcategoria|Nome do item":80`

A chave é `Subcategoria|Nome` (por exemplo `"Quarta|Feijoada":11`). Vários itens podem apontar para o mesmo número e usar a mesma foto.

**Cores:** variáveis no início de `css/styles.css` (`--brand`, `--bg`, `--accent` …). Os últimos blocos de `:root` têm prioridade.

## Observações
- Itens sem foto mostram um ícone Phosphor da subcategoria (mapa `EM` em `js/data.js`).
- Faltam fotos em: Pães do café (pão com manteiga, pão de leite, pão de queijo com requeijão, pingado) e Lanches.
- Imagens são ilustrativas.
