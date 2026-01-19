// ==============================
// CONFIG: coloque seu link aqui
// ==============================
const WHATSAPP_LINK = "https://wa.me/55SEUNUMERO?text=" + encodeURIComponent(
  "Olá! Quero entrar na Central de Milhas. Como funciona o acesso?"
);

// ============ CTA links ============
function bindCtas() {
  const ids = ["ctaTop","ctaHero","ctaPhone","ctaPlans","ctaFinal","ctaMobile"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = WHATSAPP_LINK;
  });
}

// ============ Mobile menu ============
function setupMobileNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mobileNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("show");
    toggle.setAttribute("aria-expanded", String(isOpen));
    nav.setAttribute("aria-hidden", String(!isOpen));
  });

  // Fecha ao clicar em um link do menu
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("show");
      toggle.setAttribute("aria-expanded", "false");
      nav.setAttribute("aria-hidden", "true");
    });
  });
}

// ============ Year ============
function setYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
}

bindCtas();
setupMobileNav();
setYear();
