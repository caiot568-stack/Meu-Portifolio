const PORTFOLIO = {
  name: "Caio Cavalcanti",
  nameAccent: "Cavalcanti",         
  intro: "Eu sou",                               
  role: "Estudante de Sistemas de Informação",
  location: "Brasília - DF, Brasil",
  photo: "assets/images/profile/Foto.jpg",                            
  photoAlt: "Foto de perfil",                  
  lead: "Tenho interesse em dados, bancos de dados e desenvolvimento de sistemas, e gosto de usar tecnologia para organizar informações e melhorar processos.",
  about: [
    "Sou estudante de Sistemas de Informação e moro em Brasília - DF. Meu interesse está em tecnologia, desenvolvimento de sistemas e, principalmente, na área de dados.",
    "Passei por setores administrativos e comerciais, onde trabalhei com organização de informações, análise de dados, sistemas de gestão, controle de processos e melhoria de rotinas operacionais.",
    "Agora quero ampliar meus conhecimentos em análise de dados, bancos de dados e programação, desenvolvendo soluções que facilitem processos e ajudem na tomada de decisões."
  ],
  education: {
    course: "Sistemas de Informação",
    status: "Em andamento",
    institution: "UDF", 
    period: "2026 - 2030"     
  },
  focusAreas: ["Análise de dados", "Banco de dados", "Desenvolvimento de sistemas", "Programação", "Business Intelligence"],

  experiences: [
    {
      title: "Estagiário de Sales Operations (Sales Ops)",
      company: "Cepa Soluções",
      period: "Fev 2026 - Atual",                               
      highlight: "Contato direto com sistemas CRM, organização de dados comerciais, indicadores e melhoria de processos.",
      tasks: [
        "Faturamento de pedidos de clientes e emissão de boletos.",
        "Comunicação, acompanhamento e reconexão com clientes.",
        "Sugestão e apoio na implementação de melhorias no Bitrix CRM.",
        "Participação na implantação do novo CRM (Vsix) e responsabilidade por sua manutenção e atualização.",
        "Criação e implementação de listas de apoio às atividades da equipe comercial.",
        "Atualização e publicação dos indicadores de desempenho da empresa.",
        "Acompanhamento do faturamento total e por linha de produtos.",
        "Controle de indicadores de clientes totais, recuperados e inativos.",
        "Organização e acompanhamento de atividades no Microsoft Planner."
      ]
    },
    {
      title: "Estagiário de Departamento Pessoal / Recursos Humanos",
      company: "Deboche e Ordinário Bar", period: "Jul 2025 - Jan 2026", highlight: "",
      tasks: [
        "Controle e acompanhamento de pontos dos colaboradores.",
        "Criação, atualização e controle de planilhas.",
        "Apoio nos processos de contratação e demissão.",
        "Atendimento e relacionamento com os colaboradores.",
        "Controle de comissões e de benefícios, incluindo vale-transporte.",
        "Análise de currículos para encaminhamento aos testes.",
        "Apoio às rotinas administrativas do departamento pessoal."
      ]
    },
    {
      title: "Assistente Administrativo",
      company: "Centro de Teraías Grande Sol Central", period: "Set 2024 - jun 2025", highlight: "",
      tasks: [
        "Emissão e organização de documentos.",
        "Controle de pagamentos.",
        "Atendimento aos clientes.",
        "Organização e gestão de agendas.",
        "Auxílio nos processos de finalização de produtos."
      ]
    },
    {
      title: "Estagiário Administrativo",
      company: "JP Administração", period: "Fev 2022 - Out 2023", highlight: "",
      tasks: [
        "Alimentação de planilhas em sistemas de gestão.",
        "Organização de arquivos físicos e digitais.",
        "Registro de informações.",
        "Conferência e atualização de dados do departamento pessoal."
      ]
    }
  ],

  skills: [
    { category: "Linguagens e desenvolvimento", items: [
      { name: "Python", level: "" }, { name: "C", level: "" }, { name: "JavaScript", level: "" },
      { name: "HTML5", level: "" }, { name: "CSS3", level: "" } ] },
    { category: "Banco de dados", items: [ { name: "SQL", level: "" }, { name: "MySQL", level: "" } ] },
    { category: "Ferramentas e tecnologia", items: [
      { name: "Git", level: "" }, { name: "GitHub", level: "" }, { name: "Visual Studio Code", level: "" },
      { name: "Bitrix CRM", level: "" }, { name: "Vsix CRM", level: "" }, { name: "Microsoft Office", level: "" } ] },
    { category: "Conhecimentos administrativos e analíticos", items: [
      { name: "Excel", level: "" }, { name: "Organização e análise de informações", level: "" },
      { name: "Controle de indicadores", level: "" }, { name: "Gestão de processos", level: "" },
      { name: "Análise de dados comerciais", level: "" }, { name: "Organização de atividades e tarefas", level: "" } ] },
    { category: "Idiomas", items: [ { name: "Português", level: "" }, { name: "Inglês", level: "" } ] }
  ],

  projects: [
    {
      featured: true,
      name: "Sistema de geração de faturas",
      image: "assets/images/projects/Faturas.jpg",                          
      imageAlt: "Captura de tela do sistema de geração de faturas",
      problem: "Durante minhas atividades profissionais, a empresa ficou temporariamente sem um sistema responsável pela geração de faturas, o que afetava a rotina de trabalho.",
      solution: "Desenvolvi um site que realiza essa função e ajuda a suprir a demanda, nascido de uma necessidade real do ambiente profissional.",
      description: "",
      tech: ["HTML", "CSS", "JavaScript"]
    }

  ],

  hobbies: ["Tecnologia e inovação", "Aprendizado de programação", "Análise de dados", "Desenvolvimento de projetos pessoais", "Aprendizado contínuo"],

  contact: {
    lead: "Estou aberto a conversas sobre oportunidades, estágios e projetos na área de tecnologia e dados.",
    email: "caio.cavalcanti.dev@gmail.com",                                  
    linkedin: "https://www.linkedin.com/in/caio-cavalcanti-a5b868405",  
    github: "https://github.com/caiot568-stack"                               
  }
};
