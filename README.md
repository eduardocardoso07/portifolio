# Portfólio — Eduardo Cardoso (HTML/CSS/JS puro)

Mesma identidade visual do projeto em React, agora sem build, sem
`npm install`, sem etapa nenhuma — abra o `index.html` e está rodando.

## Estrutura

```
eduardo-portfolio-html/
├── index.html            → estrutura fixa da página (seções, textos fixos)
├── css/
│   └── style.css          → cores, fontes, layout (tema escuro + dourado)
├── js/
│   ├── data.js             → ÚNICO arquivo que você edita no dia a dia
│   └── script.js            → monta a página a partir do data.js (raramente precisa mexer)
└── assets/
    ├── images/               → fotos gerais (ex: sua foto, se adicionar depois)
    └── projetos/               → fotos dos projetos do portfólio
```

## O arquivo que importa: `js/data.js`

Ele guarda três coisas, cada uma num array ou objeto separado:

1. **`siteConfig`** — seu WhatsApp, e-mail e mensagem padrão.
2. **`services`** — a lista de serviços que aparece na seção "Serviços"
   e também alimenta o campo "Tipo de projeto" do formulário de orçamento.
3. **`projects`** — a lista de projetos do portfólio. Começa vazia
   (`[]`) de propósito — a seção mostra um aviso de "em breve" enquanto
   estiver assim.

Você não edita HTML pra mudar preço, adicionar projeto ou trocar seu
WhatsApp — só esse arquivo.

### Adicionando um projeto

Dentro do array `projects` em `js/data.js`, adicione um bloco assim:

```js
{
  title: "Nome do cliente ou projeto",
  category: "Landing page",
  description: "Uma frase curta sobre o que foi feito.",
  image: "assets/projetos/nome-do-arquivo.jpg",
  link: "https://site-do-cliente.com.br",
},
```

Coloque a imagem correspondente dentro de `assets/projetos/`. Assim que
o array tiver pelo menos um item, a seção de portfólio já troca
automaticamente do aviso "em breve" para o grid de projetos — nada
mais precisa ser mexido.

### Mudando preços ou descrição de um serviço

Edite o objeto correspondente dentro do array `services`. O card na
seção "Serviços" e a opção no formulário de orçamento atualizam juntos.

### Trocando o WhatsApp ou e-mail

Edite `siteConfig.whatsapp` (formato `55` + DDD + número, sem espaços)
ou `siteConfig.email`.

## Editando textos fixos (Sobre, Como funciona, títulos)

Esses ficam direto no `index.html`, organizados por comentários
(`<!-- SOBRE MIM -->`, `<!-- COMO FUNCIONA -->`, etc.). Procure a seção
pelo comentário e edite o texto normalmente.

## Ajustando cores e fontes

No topo do `css/style.css`, dentro do bloco `:root`, estão todas as
variáveis de cor (`--paper`, `--ink`, `--bronze-500`, etc.) e de fonte
(`--font-display`, `--font-sans`). Trocar um valor ali muda em todo o
site de uma vez.

## Testando localmente

Duas opções:

- **Simples**: dê duplo clique no `index.html` — funciona na maioria
  dos casos, já que este projeto não depende de um servidor.
- **Mais robusta** (recomendada se algo não carregar): abra um
  terminal dentro da pasta e rode:
  ```bash
  python3 -m http.server 8000
  ```
  Depois acesse `http://localhost:8000` no navegador.

## Publicando

Sem build, é ainda mais simples que o projeto em React:

1. Crie uma conta gratuita em [netlify.com](https://netlify.com) ou [vercel.com](https://vercel.com).
2. Arraste a pasta inteira `eduardo-portfolio-html` pra área de upload.
3. Em segundos você recebe um link como `eduardo-cardoso.netlify.app`.

## Testando variações de layout

Como não tem build, uma forma prática de comparar versões: duplique a
pasta inteira (ex: `eduardo-portfolio-html-v2`), mude o que quiser na
cópia, e abra as duas em abas separadas do navegador para comparar
lado a lado — sem risco de estragar a versão que já está funcionando.
