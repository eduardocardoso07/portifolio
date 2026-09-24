/* ============================================================
   SCRIPT PRINCIPAL
   Lê as informações de js/data.js e monta as partes dinâmicas da
   página (serviços, portfólio, links de WhatsApp). Você normalmente
   não precisa editar este arquivo — só o data.js.
   ============================================================ */

// Monta um link do WhatsApp com uma mensagem customizada.
function buildWhatsAppLink(message) {
  const text = encodeURIComponent(message || siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}

// ---------- LINKS DE WHATSAPP (hero, botão flutuante) ----------
document.getElementById("heroWhatsapp").href = buildWhatsAppLink(
  "Olá, Eduardo! Quero conversar sobre um projeto de site."
);
document.getElementById("floatWhatsapp").href = buildWhatsAppLink();
document.getElementById("footerEmail").href = `mailto:${siteConfig.email}`;
document.getElementById("footerEmail").textContent = siteConfig.email;

// ---------- RENDERIZA OS SERVIÇOS ----------
const servicesGrid = document.getElementById("servicesGrid");

services.forEach((service) => {
  const card = document.createElement("div");
  card.className = "service-card";

  const includesHtml = service.includes
    .map((item) => `<li>${item}</li>`)
    .join("");

  card.innerHTML = `
    <h3>${service.title}</h3>
    <p class="service-description">${service.description}</p>
    <ul class="service-includes">${includesHtml}</ul>
    <div class="service-footer">
      <p class="service-timeline">Prazo médio: ${service.timeline}</p>
      <a href="${buildWhatsAppLink(`Olá, Eduardo! Tenho interesse no serviço "${service.title}".`)}"
         target="_blank" rel="noopener noreferrer" class="service-link">
        Falar sobre este serviço
      </a>
    </div>
  `;

  servicesGrid.appendChild(card);
});

// ---------- RENDERIZA O SELECT DE TIPO DE PROJETO NO ORÇAMENTO ----------
const serviceTypeSelect = document.getElementById("fieldServiceType");
services.forEach((service) => {
  const option = document.createElement("option");
  option.textContent = service.title;
  serviceTypeSelect.appendChild(option);
});
const otherOption = document.createElement("option");
otherOption.textContent = "Outro / não sei ainda";
serviceTypeSelect.appendChild(otherOption);

// ---------- RENDERIZA O PORTFÓLIO ----------
const portfolioGrid = document.getElementById("portfolioGrid");

if (projects.length === 0) {
  portfolioGrid.innerHTML = `
    <div class="portfolio-empty">
      <p>
        Os primeiros projetos entram aqui assim que forem entregues. Se o seu
        for um deles, este espaço mostra exatamente o que você construiu comigo.
      </p>
      <a href="${buildWhatsAppLink("Olá, Eduardo! Quero ser um dos primeiros projetos do seu portfólio.")}"
         target="_blank" rel="noopener noreferrer" class="portfolio-empty-link">
        Converse comigo sobre o seu projeto
      </a>
    </div>
  `;
} else {
  portfolioGrid.className = "portfolio-grid";
  projects.forEach((project) => {
    const card = document.createElement("a");
    card.className = "portfolio-card";
    card.href = project.link || "#";
    if (project.link) {
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

    const imageHtml = project.image
      ? `<img src="${project.image}" alt="${project.title}" />`
      : "";

    card.innerHTML = `
      <div class="portfolio-thumb">${imageHtml}</div>
      <p class="portfolio-category">${project.category}</p>
      <h3>${project.title}</h3>
      <p class="portfolio-description">${project.description}</p>
    `;

    portfolioGrid.appendChild(card);
  });
}

// ---------- FORMULÁRIO DE ORÇAMENTO ----------
document.getElementById("budgetForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("fieldName").value || "—";
  const clientType = document.getElementById("fieldClientType").value;
  const serviceType = document.getElementById("fieldServiceType").value;
  const description = document.getElementById("fieldDescription").value;

  const messageParts = [
    `Olá, Eduardo! Meu nome é ${name}.`,
    `Tipo de cliente: ${clientType}.`,
    `Tenho interesse em: ${serviceType}.`,
  ];
  if (description) {
    messageParts.push(`Detalhes do que preciso: ${description}`);
  }

  window.open(buildWhatsAppLink(messageParts.join(" ")), "_blank", "noopener,noreferrer");
});

// ---------- MENU MOBILE ----------
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ---------- ANO DO RODAPÉ ----------
document.getElementById("year").textContent = new Date().getFullYear();
