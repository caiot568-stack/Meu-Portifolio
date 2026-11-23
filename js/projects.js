/* Renderização dos cards de projetos a partir de PORTFOLIO.projects */
function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

function createLink(url, label, className, ariaLabel) {
  if (!url) return null;
  const a = createElement("a", className, label);
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  if (ariaLabel) a.setAttribute("aria-label", ariaLabel + " (abre em nova aba)");
  return a;
}

function createProjectCard(project) {
  const card = createElement("article", "card project" + (project.featured ? " project-featured" : ""));

  const media = createElement("div", "project-media");
  if (project.image) {
    const img = createElement("img");
    img.src = project.image;
    img.alt = project.imageAlt || project.name;
    img.loading = "lazy";
    media.appendChild(img);
  } else {
    media.appendChild(createElement("span", "placeholder", "Adicione uma captura de tela em assets/images/projects/"));
  }
  card.appendChild(media);

  const body = createElement("div", "project-body");
  if (project.featured) body.appendChild(createElement("p", "badge", "Projeto em destaque"));
  body.appendChild(createElement("h3", "", project.name));

  if (project.problem) {
    body.appendChild(createElement("h4", "", "O problema"));
    body.appendChild(createElement("p", "", project.problem));
  }
  if (project.solution) {
    body.appendChild(createElement("h4", "", "A solução"));
    body.appendChild(createElement("p", "", project.solution));
  }
  if (project.description) body.appendChild(createElement("p", "", project.description));

  const techList = createElement("ul", "chips chips-sm");
  techList.setAttribute("aria-label", "Tecnologias utilizadas");
  if (project.tech && project.tech.length) {
    project.tech.forEach((t) => techList.appendChild(createElement("li", "", t)));
  } else {
    techList.appendChild(createElement("li", "chip-pending", "Tecnologias a preencher"));
  }
  body.appendChild(techList);

  const links = createElement("div", "project-links");
  const gh = createLink(project.github, "Código no GitHub", "btn btn-ghost btn-sm", "Código de " + project.name + " no GitHub");
  const demo = createLink(project.demo, "Ver demonstração", "btn btn-primary btn-sm", "Demonstração de " + project.name);
  if (gh) links.appendChild(gh);
  if (demo) links.appendChild(demo);
  if (!gh && !demo) links.appendChild(createElement("span", "pending", "Links a serem adicionados"));
  body.appendChild(links);

  card.appendChild(body);
  return card;
}

function renderProjects(projects, container) {
  container.replaceChildren(...projects.map(createProjectCard));
}
