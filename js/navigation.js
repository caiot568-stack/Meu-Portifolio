/* Menu mobile, destaque da seção ativa e botão de voltar ao topo */
function initNavigation() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  const toTop = document.getElementById("to-top");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  }

  toggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); toggle.focus(); }
  });

  const links = [...nav.querySelectorAll("a")];
  const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => {
        if (a.getAttribute("href") === "#" + entry.target.id) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => spy.observe(s));

  window.addEventListener("scroll", () => { toTop.hidden = window.scrollY < 600; }, { passive: true });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0 }));
}
