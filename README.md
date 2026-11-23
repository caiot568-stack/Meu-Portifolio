# Portfólio Profissional | Caio Cavalcanti

Portfólio pessoal de estudante de Sistemas de Informação, com foco em dados, bancos de dados e desenvolvimento de sistemas. Feito com HTML5, CSS3 e JavaScript puro, sem frameworks e sem dependências externas.

**Demonstração:** adicione aqui o link do site publicado (exemplo: `https://seu-usuario.github.io/nome-do-repositorio/`)

## Sobre o projeto

O site reúne minha trajetória acadêmica e profissional, minhas habilidades e os projetos que desenvolvi, entre eles um sistema de geração de faturas criado a partir de uma necessidade real do ambiente de trabalho.

Seções:

- **Início:** apresentação com efeito de digitação.
- **Sobre mim:** perfil e formação.
- **Experiência:** linha do tempo com as atividades de cada função.
- **Habilidades:** organizadas por categoria.
- **Projetos:** cards com imagem, descrição, tecnologias e links.
- **Interesses e contato.**

## Funcionalidades

- Layout responsivo para computadores, tablets e celulares.
- Menu mobile, rolagem suave e destaque da seção ativa.
- Efeito de digitação no topo e nos títulos das seções ao rolar a página.
- Botão para voltar ao topo.
- Conteúdo centralizado em um único arquivo de dados (`js/data.js`), o que facilita a atualização.
- Acessibilidade: HTML semântico, navegação por teclado, foco visível, link para pular ao conteúdo e respeito à preferência por movimento reduzido.
- SEO básico: title, meta description, Open Graph e favicon.

## Tecnologias

- HTML5
- CSS3
- JavaScript (sem bibliotecas)

## Estrutura

```
portfolio/
├── index.html
├── assets/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   └── icons/
│   └── fonts/
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── data.js
│   ├── main.js
│   ├── navigation.js
│   └── projects.js
└── README.md
```

## Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/caiot568-stack/NOME-DO-REPOSITORIO.git
   ```
2. Abra o arquivo `index.html` no navegador.

Se preferir um servidor local, dentro da pasta do projeto execute `python -m http.server 8000` e acesse `http://localhost:8000`.

## Como personalizar

Todo o conteúdo (textos, experiências, habilidades, projetos, links e contatos) fica em `js/data.js`. Imagens ficam em `assets/images/`. As cores e fontes ficam nas variáveis no topo de `css/style.css`.

## Publicação no GitHub Pages

1. Envie os arquivos do projeto para a raiz de um repositório no GitHub.
2. Em **Settings > Pages**, selecione **Deploy from a branch**, a branch `main` e a pasta `/ (root)`.
3. Aguarde alguns minutos e acesse o endereço indicado pelo GitHub.

## Contato

- LinkedIn: https://www.linkedin.com/in/caio-cavalcanti-a5b868405
- E-mail: caio.cavalcanti.dev@gmail.com
- Brasília - DF, Brasil
