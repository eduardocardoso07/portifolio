/* ============================================================
   ARQUIVO DE DADOS DO SITE
   Este é o principal arquivo que você vai editar no dia a dia.
   Ele não tem estrutura de página — só as informações que mudam.
   ============================================================ */

// ---------- CONFIGURAÇÃO GERAL ----------
const siteConfig = {
  name: "Eduardo Cardoso",
  // Número de WhatsApp no formato internacional: 55 (Brasil) + DDD + número, sem espaços/traços.
  whatsapp: "5567982155500",
  whatsappDefaultMessage: "Olá, Eduardo! Vi seu portfólio e quero saber mais sobre criar um site/landing page.",
  email: "eduardocardoso7000@gmail.com",
};

// ---------- SERVIÇOS ----------
// Para adicionar, remover ou editar um serviço, edite este array.
// "destaque: true" mostra a etiqueta "Mais pedido" no card.
const services = [
  {
    title: "Landing page",
    description: "Uma página única, focada em converter visitantes em contato ou venda. Ideal para divulgar um serviço, produto ou evento específico.",
    includes: [
      "Design responsivo (celular, tablet e computador)",
      "Botão de WhatsApp integrado",
      "Formulário de contato ou orçamento",
      "Otimização básica para aparecer no Google",
    ],
    startingAt: "R$ 159,00",
    timeline: "3 a 5 dias úteis",
  },
  {
    title: "Site institucional",
    description: "Presença completa na internet: várias páginas (início, sobre, serviços, contato) para negócios que precisam contar sua história com mais profundidade.",
    includes: [
      "Até 5 páginas personalizadas",
      "Painel simples para você atualizar textos e fotos",
      "Integração com redes sociais e WhatsApp",
      "Domínio e hospedagem — orientação incluída",
    ],
    startingAt: "R$ 700,00",
    timeline: "1 a 2 semanas",
  },
  {
    title: "Página de vendas",
    description: "Página estruturada para vender um produto, curso ou serviço específico, com foco em persuasão e prova social.",
    includes: [
      "Estrutura pensada para conversão",
      "Seção de depoimentos e garantias",
      "Integração com checkout ou pagamento",
      "Testes de velocidade e usabilidade",
    ],
    startingAt: "R$ 400,00",
    timeline: "4 a 7 dias úteis",
  },
];

// ---------- PROJETOS (PORTFÓLIO) ----------
// Deixe vazio ([]) até você ter o primeiro projeto real — a seção mostra
// um aviso elegante de "em breve" enquanto isso.
//
// Para adicionar um projeto, copie o modelo abaixo pra dentro do array:
// {
//   title: "Nome do cliente ou projeto",
//   category: "Landing page", // ou "Site institucional", "Página de vendas"
//   description: "Uma frase curta sobre o que foi feito.",
//   image: "assets/projetos/nome-do-arquivo.jpg", // coloque o arquivo em assets/projetos/
//   link: "https://site-do-cliente.com.br", // opcional — remova a linha se não tiver
// },
const projects = [
  {
    title: "Mharjorye Santos - UGC Creator",
    category: "Landing Page",
    description: "",
    image: "assets/images/projeto1.jpg",
    link: "https://mharjoryesants.vercel.app/"
  },

  {
    title: "Psicologia - Demonstração",
    category: "Landing Page",
    description: "",
    image: "assets/images/projeto2.jpg",
    link: "https://demo-psicologia-liard.vercel.app/"
  }
];
