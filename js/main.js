/* Monta a página a partir de js/data.js */
/* Escreve os primeiros n caracteres de "full", destacando em verde a parte data-accent */
function paint(el, full, n) {
  const acc = el.dataset.accent || "";
  const start = acc ? full.indexOf(acc) : -1;
  el.textContent = "";
  if (start < 0) { el.textContent = full.slice(0, n); return; }
  const end = start + acc.length;
  el.append(full.slice(0, Math.min(n, start)));
  if (n > start) {
    const span = document.createElement("span");
    span.className = "accent";
    span.textContent = full.slice(start, Math.min(n, end));
    el.append(span);
  }
  if (n > end) el.append(full.slice(end, n));
}

function renderHero(p) {
  const brand = document.getElementById("brand-name");
  brand.dataset.accent = p.nameAccent || "";
  paint(brand, p.name, p.name.length);
  document.getElementById("hero-greeting").textContent = p.greeting;
  const heroName = document.getElementById("hero-name");
  heroName.dataset.accent = p.nameAccent || "";
  paint(heroName, p.intro + " " + p.name + ",", (p.intro + " " + p.name + ",").length);
  document.getElementById("hero-role").textContent = p.role + ".";
  document.getElementById("hero-lead").textContent = p.lead;
  const fig = document.getElementById("hero-photo");
  if (p.photo) {
    const img = createElement("img");
    img.src = p.photo; img.alt = p.photoAlt; img.width = 320; img.height = 400;
    fig.classList.add("has-photo");
    fig.appendChild(img);
  } else {
    const ph = createElement("div", "photo-placeholder", p.initials);
    ph.setAttribute("role", "img");
    ph.setAttribute("aria-label", "Espaço reservado para foto de perfil");
    fig.appendChild(ph);
  }
}

function renderAbout(p) {
  const about = document.getElementById("about-text");
  p.about.forEach((t) => about.appendChild(createElement("p", "", t)));
  const e = p.education;
  const edu = document.getElementById("education");
  edu.appendChild(createElement("h4", "", e.course));
  edu.appendChild(createElement("p", "", [e.status, e.institution, e.period, p.location].filter(Boolean).join(", ")));
  const areas = document.getElementById("focus-areas");
  p.focusAreas.forEach((a) => areas.appendChild(createElement("li", "", a)));
}

function renderExperiences(list) {
  const ol = document.getElementById("experience-list");
  list.forEach((exp) => {
    const li = createElement("li", "timeline-item");
    const card = createElement("article", "card");
    card.appendChild(createElement("h3", "", exp.title));
    const meta = createElement("p", "meta", (exp.company || "Empresa a preencher") + ", " + (exp.period || "período a preencher"));
    if (!exp.company || !exp.period) meta.classList.add("pending");
    card.appendChild(meta);
    if (exp.highlight) card.appendChild(createElement("p", "highlight", exp.highlight));
    const ul = createElement("ul", "task-list");
    exp.tasks.forEach((t) => ul.appendChild(createElement("li", "", t)));
    card.appendChild(ul);
    li.appendChild(card);
    ol.appendChild(li);
  });
}

function renderSkills(groups) {
  const grid = document.getElementById("skills-grid");
  groups.forEach((g) => {
    const card = createElement("article", "card skill-group");
    card.appendChild(createElement("h3", "", g.category));
    const ul = createElement("ul", "skill-list");
    g.items.forEach((s) => {
      const li = createElement("li", "skill");
      li.appendChild(createElement("span", "skill-name", s.name));
      if (s.level) li.appendChild(createElement("span", "skill-level", s.level));
      ul.appendChild(li);
    });
    card.appendChild(ul);
    grid.appendChild(card);
  });
}

function renderContact(c, p) {
  document.getElementById("contact-lead").textContent = c.lead;
  const ul = document.getElementById("contact-list");
  const items = [
    { label: "E-mail", value: c.email, href: c.email && "mailto:" + c.email },
    { label: "LinkedIn", value: c.linkedin && "Perfil no LinkedIn", href: c.linkedin },
    { label: "GitHub", value: c.github && "Perfil no GitHub", href: c.github },
    { label: "Localização", value: p.location, href: "" }
  ];
  items.forEach((it) => {
    const li = createElement("li", "contact-item");
    li.appendChild(createElement("span", "contact-label", it.label));
    if (it.href) {
      const a = createLink(it.href, it.value, "contact-link", it.label);
      if (it.label === "E-mail") { a.removeAttribute("target"); a.removeAttribute("rel"); a.removeAttribute("aria-label"); }
      li.appendChild(a);
    } else {
      li.appendChild(createElement("span", it.value ? "" : "pending", it.value || "A ser adicionado"));
    }
    ul.appendChild(li);
  });
}

/* Efeito de digitação. O texto completo fica em aria-label para leitores de tela. */
function typeText(el, speed) {
  const full = el.textContent;
  el.setAttribute("aria-label", full);
  el.textContent = "";
  el.classList.add("typing");
  return new Promise((resolve) => {
    let i = 0;
    const timer = setInterval(() => {
      paint(el, full, ++i);
      if (i >= full.length) { clearInterval(timer); el.classList.replace("typing", "typed"); resolve(); }
    }, speed);
  });
}

function initTyping() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const headings = [...document.querySelectorAll("main h2")];
  if (reduce || !("IntersectionObserver" in window)) return;
  // Abertura: nome e depois a função, digitados em sequência
  const role = document.getElementById("hero-role");
  const roleText = role.textContent;
  role.textContent = "";
  typeText(document.getElementById("hero-name"), 70).then(() => { role.textContent = roleText; return typeText(role, 45); });
  // Ao rolar: cada título é digitado ao aparecer na tela
  headings.forEach((h) => { h.dataset.full = h.textContent; h.textContent = "\u00A0"; });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      e.target.textContent = e.target.dataset.full;
      typeText(e.target, 60);
    });
  }, { threshold: 0.6 });
  headings.forEach((h) => io.observe(h));
}

function initReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll(".card").forEach((el) => { el.classList.add("reveal"); io.observe(el); });
}

document.addEventListener("DOMContentLoaded", () => {
  const p = PORTFOLIO;
  renderHero(p);
  renderAbout(p);
  renderExperiences(p.experiences);
  renderSkills(p.skills);
  renderProjects(p.projects, document.getElementById("projects-list"));
  const hobbies = document.getElementById("hobbies-list");
  p.hobbies.forEach((h) => hobbies.appendChild(createElement("li", "", h)));
  renderContact(p.contact, p);
  document.getElementById("footer-text").textContent = "© " + new Date().getFullYear() + " " + p.name + ", " + p.location;
  initNavigation();
  initReveal();
  initTyping();
});
