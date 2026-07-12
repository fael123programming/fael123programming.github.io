import { useEffect, useState } from 'react'

type Language = 'pt' | 'en'
type Theme = 'dark' | 'light'

const links = {
  github: 'https://github.com/fael123programming',
  linkedin: 'https://www.linkedin.com/in/rafael-guimar%C3%A3es-9a8b251a9/',
  email: 'mailto:rafaelfonseca1020@gmail.com',
}

const content = {
  pt: {
    nav: { about: 'Sobre', experience: 'Experiência', projects: 'Projetos', skills: 'Competências', contact: 'Contato' },
    availability: 'Disponível para oportunidades remotas',
    role: 'Desenvolvedor Full-Stack',
    headline: 'Construo produtos digitais com código limpo, dados e propósito.',
    intro: 'Experiência com React, .NET e Python na criação de aplicações, APIs, automações e soluções orientadas a dados.',
    viewProjects: 'Ver projetos',
    downloadCv: 'Baixar currículo',
    location: 'Caldas Novas, Goiás · Brasil',
    highlights: [
      { value: '100+', label: 'repositórios no GitHub' },
      { value: 'Internacional', label: 'experiência acadêmica em Portugal' },
      { value: 'PT · EN', label: 'português nativo e inglês fluente' },
    ],
    aboutEyebrow: 'Sobre mim',
    aboutTitle: 'Tecnologia aplicada a problemas reais.',
    aboutText: 'Sou bacharel em Ciência da Computação pelo IF Goiano e desenvolvedor com atuação entre engenharia de software, dados e automação. Gosto de transformar necessidades de negócio em sistemas claros, confiáveis e fáceis de manter. Minha vivência acadêmica em Portugal ampliou minha autonomia, comunicação e capacidade de colaborar em ambientes diversos.',
    experienceEyebrow: 'Trajetória',
    experienceTitle: 'Experiência profissional',
    current: 'Atual',
    experiences: [
      {
        date: 'fev 2026 — atual',
        role: 'Desenvolvedor Full-Stack',
        company: 'Oficina Conectada Tecnologia by Nexer · Remoto',
        summary: 'Desenvolvimento de funcionalidades ponta a ponta, com interfaces em React e TypeScript e serviços backend em .NET.',
        tags: ['React', 'TypeScript', '.NET', 'APIs'],
      },
      {
        date: 'set 2024 — jan 2026',
        role: 'Desenvolvedor e Técnico de Informática',
        company: 'Cartório do 1º Ofício de Morrinhos/GO',
        summary: 'Automação de rotinas, dashboards e aplicações internas usando Python, Streamlit, React e Django.',
        tags: ['Python', 'Streamlit', 'React', 'Django'],
      },
      {
        date: '2022 — 2023',
        role: 'Engenheiro de Dados',
        company: 'Projeto acadêmico em parceria com o MAPA',
        summary: 'Construção e manutenção de pipelines de dados, processamento com Pandas e persistência em PostgreSQL.',
        tags: ['Python', 'Airflow', 'Pandas', 'PostgreSQL'],
      },
    ],
    projectsEyebrow: 'Trabalho selecionado',
    projectsTitle: 'Projetos que mostram como eu penso e construo.',
    projectsIntro: 'Uma seleção curta com foco em engenharia de dados, APIs, análise e inteligência artificial.',
    code: 'Código',
    projects: [
      {
        title: 'SFB DAGs',
        date: '2022',
        description: 'Pipelines do projeto de dados desenvolvido em parceria acadêmica com o MAPA, com orquestração e processamento de dados ambientais.',
        tags: ['Python', 'Apache Airflow', 'Pandas', 'PostgreSQL'],
        href: 'https://github.com/fael123programming/sfb-dags',
      },
      {
        title: 'IFText API',
        date: 'jul 2024',
        description: 'API para processamento e classificação de textos, estruturada para integrar modelos e aplicações clientes.',
        tags: ['Python', 'API', 'NLP'],
        href: 'https://github.com/fael123programming/iftext_api',
      },
      {
        title: 'Bible Text Analysis',
        date: 'set 2024',
        description: 'Exploração e análise de dados textuais com técnicas de processamento de linguagem natural e visualização.',
        tags: ['Python', 'Pandas', 'NLP', 'DataViz'],
        href: 'https://github.com/fael123programming/bible-text-analysis',
      },
      {
        title: 'AI Accelerator',
        date: 'ago 2025',
        description: 'Experimentos e aplicações práticas com inteligência artificial, organizados para aprendizagem e evolução incremental.',
        tags: ['Python', 'IA', 'LLMs'],
        href: 'https://github.com/fael123programming/ai-accelerator',
      },
    ],
    skillsEyebrow: 'Ferramentas',
    skillsTitle: 'Base técnica para entregar do frontend aos dados.',
    skillGroups: [
      { title: 'Software', items: ['React', 'TypeScript', 'JavaScript', '.NET', 'C#', 'Django', 'REST APIs'] },
      { title: 'Dados', items: ['Python', 'Pandas', 'PostgreSQL', 'SQLAlchemy', 'Apache Airflow', 'Streamlit'] },
      { title: 'Engenharia', items: ['Git & GitHub', 'Docker', 'Linux', 'Testes', 'CI/CD', 'Scrum'] },
    ],
    educationEyebrow: 'Formação',
    educationTitle: 'Formação e experiência internacional',
    education: [
      { label: '2025', title: 'Bacharelado em Ciência da Computação', place: 'IF Goiano — Campus Morrinhos', text: 'Formação concluída em dezembro de 2025.' },
      { label: '2023 · Portugal', title: 'Mobilidade acadêmica internacional', place: 'Instituto Politécnico de Bragança', text: 'Experiência acadêmica e cultural em ambiente internacional.' },
    ],
    contactEyebrow: 'Vamos conversar',
    contactTitle: 'Tem um desafio em software ou dados?',
    contactText: 'Estou aberto a oportunidades remotas e a projetos em que engenharia de software, automação e dados façam diferença.',
    contactButton: 'Enviar e-mail',
    footer: 'Desenvolvido por Rafael Guimarães.',
    skip: 'Ir para o conteúdo',
    menu: 'Navegação principal',
    themeLabel: 'Alternar tema',
    languageLabel: 'Change language to English',
  },
  en: {
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    availability: 'Open to remote opportunities',
    role: 'Full-Stack Developer',
    headline: 'I build digital products with clean code, data and purpose.',
    intro: 'Experience with React, .NET and Python building applications, APIs, automations and data-driven solutions.',
    viewProjects: 'View projects',
    downloadCv: 'Download résumé',
    location: 'Caldas Novas, Goiás · Brazil',
    highlights: [
      { value: '100+', label: 'repositories on GitHub' },
      { value: 'International', label: 'academic experience in Portugal' },
      { value: 'PT · EN', label: 'native Portuguese and fluent English' },
    ],
    aboutEyebrow: 'About me',
    aboutTitle: 'Technology applied to real problems.',
    aboutText: 'I hold a bachelor’s degree in Computer Science from IF Goiano and work across software engineering, data and automation. I enjoy turning business needs into systems that are clear, reliable and easy to maintain. My academic experience in Portugal strengthened my autonomy, communication and ability to collaborate in diverse environments.',
    experienceEyebrow: 'Career',
    experienceTitle: 'Professional experience',
    current: 'Current',
    experiences: [
      { date: 'Feb 2026 — present', role: 'Full-Stack Developer', company: 'Oficina Conectada Tecnologia by Nexer · Remote', summary: 'End-to-end feature development, with React and TypeScript interfaces and .NET backend services.', tags: ['React', 'TypeScript', '.NET', 'APIs'] },
      { date: 'Sep 2024 — Jan 2026', role: 'Developer and IT Technician', company: 'Cartório do 1º Ofício de Morrinhos/GO', summary: 'Workflow automation, dashboards and internal applications using Python, Streamlit, React and Django.', tags: ['Python', 'Streamlit', 'React', 'Django'] },
      { date: '2022 — 2023', role: 'Data Engineer', company: 'Academic project in partnership with MAPA', summary: 'Built and maintained data pipelines, Pandas processing workflows and PostgreSQL persistence.', tags: ['Python', 'Airflow', 'Pandas', 'PostgreSQL'] },
    ],
    projectsEyebrow: 'Selected work',
    projectsTitle: 'Projects that show how I think and build.',
    projectsIntro: 'A focused selection spanning data engineering, APIs, analytics and artificial intelligence.',
    code: 'Code',
    projects: [
      { title: 'SFB DAGs', date: '2022', description: 'Data pipelines from an academic project developed in partnership with MAPA, including orchestration and environmental data processing.', tags: ['Python', 'Apache Airflow', 'Pandas', 'PostgreSQL'], href: 'https://github.com/fael123programming/sfb-dags' },
      { title: 'IFText API', date: 'Jul 2024', description: 'An API for text processing and classification, structured to integrate models and client applications.', tags: ['Python', 'API', 'NLP'], href: 'https://github.com/fael123programming/iftext_api' },
      { title: 'Bible Text Analysis', date: 'Sep 2024', description: 'Text data exploration and analysis using natural language processing and visualization techniques.', tags: ['Python', 'Pandas', 'NLP', 'DataViz'], href: 'https://github.com/fael123programming/bible-text-analysis' },
      { title: 'AI Accelerator', date: 'Aug 2025', description: 'Practical artificial intelligence experiments and applications, organized for incremental learning and iteration.', tags: ['Python', 'AI', 'LLMs'], href: 'https://github.com/fael123programming/ai-accelerator' },
    ],
    skillsEyebrow: 'Toolkit',
    skillsTitle: 'Technical foundation from frontend to data.',
    skillGroups: [
      { title: 'Software', items: ['React', 'TypeScript', 'JavaScript', '.NET', 'C#', 'Django', 'REST APIs'] },
      { title: 'Data', items: ['Python', 'Pandas', 'PostgreSQL', 'SQLAlchemy', 'Apache Airflow', 'Streamlit'] },
      { title: 'Engineering', items: ['Git & GitHub', 'Docker', 'Linux', 'Testing', 'CI/CD', 'Scrum'] },
    ],
    educationEyebrow: 'Education',
    educationTitle: 'Education and international experience',
    education: [
      { label: '2025', title: 'Bachelor’s degree in Computer Science', place: 'IF Goiano — Morrinhos Campus', text: 'Degree completed in December 2025.' },
      { label: '2023 · Portugal', title: 'International academic mobility', place: 'Polytechnic Institute of Bragança', text: 'Academic and cultural experience in an international environment.' },
    ],
    contactEyebrow: 'Let’s talk',
    contactTitle: 'Have a software or data challenge?',
    contactText: 'I am open to remote opportunities and projects where software engineering, automation and data can make a difference.',
    contactButton: 'Send an email',
    footer: 'Designed and built by Rafael Guimarães.',
    skip: 'Skip to content',
    menu: 'Main navigation',
    themeLabel: 'Toggle theme',
    languageLabel: 'Mudar idioma para português',
  },
} as const

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
}

function ExternalIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5h5v5M19 5l-9 9M19 14v5H5V5h5" /></svg>
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-language') as Language | null
    return saved ?? (navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en')
  })
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme') as Theme | null
    return saved ?? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
  })
  const t = content[language]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
    document.title = language === 'pt' ? 'Rafael Guimarães | Desenvolvedor Full-Stack' : 'Rafael Guimarães | Full-Stack Developer'
    localStorage.setItem('portfolio-language', language)
  }, [language])

  return (
    <>
      <a className="skip-link" href="#main">{t.skip}</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Rafael Guimarães — início"><span>RG</span></a>
          <nav aria-label={t.menu}>
            <a href="#about">{t.nav.about}</a>
            <a href="#experience">{t.nav.experience}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#skills">{t.nav.skills}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="header-actions">
            <button className="icon-button language-button" onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')} aria-label={t.languageLabel}>{language === 'pt' ? 'EN' : 'PT'}</button>
            <button className="icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={t.themeLabel}>
              {theme === 'dark' ? '☀' : '☾'}
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div>
              <div className="availability"><span />{t.availability}</div>
              <p className="hero-role">{t.role}</p>
              <h1>Rafael<br /><span>Guimarães.</span></h1>
              <p className="hero-headline">{t.headline}</p>
              <p className="hero-intro">{t.intro}</p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">{t.viewProjects}<ArrowIcon /></a>
                <a className="button secondary" href="/Rafael_Guimaraes_Curriculo.pdf" download>{t.downloadCv}</a>
              </div>
              <div className="social-links">
                <a href={links.github} target="_blank" rel="noreferrer">GitHub <ExternalIcon /></a>
                <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalIcon /></a>
                <a href={links.email}>E-mail <ArrowIcon /></a>
              </div>
            </div>
            <div className="hero-card" aria-label={t.location}>
              <div className="code-label">rafael.profile</div>
              <pre><span className="muted">const</span> developer = {'{'}{`\n`}  <span className="key">focus</span>: [<span className="string">'software'</span>, <span className="string">'data'</span>],{`\n`}  <span className="key">stack</span>: [<span className="string">'React'</span>, <span className="string">'.NET'</span>, <span className="string">'Python'</span>],{`\n`}  <span className="key">location</span>: <span className="string">'Brazil'</span>,{`\n`}  <span className="key">remote</span>: <span className="boolean">true</span>{`\n`}{'}'}</pre>
              <div className="card-location"><span>⌖</span>{t.location}</div>
            </div>
          </div>
          <div className="container highlight-grid">
            {t.highlights.map((item) => <div className="highlight" key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}
          </div>
        </section>

        <section className="section" id="about">
          <div className="container split-heading">
            <div><p className="eyebrow">01 · {t.aboutEyebrow}</p><h2>{t.aboutTitle}</h2></div>
            <p className="lead">{t.aboutText}</p>
          </div>
        </section>

        <section className="section alt-section" id="experience">
          <div className="container">
            <p className="eyebrow">02 · {t.experienceEyebrow}</p>
            <h2>{t.experienceTitle}</h2>
            <div className="timeline">
              {t.experiences.map((experience, index) => (
                <article className="timeline-item" key={experience.role}>
                  <div className="timeline-date">{experience.date}{index === 0 && <span className="current-badge">{t.current}</span>}</div>
                  <div>
                    <h3>{experience.role}</h3>
                    <p className="company">{experience.company}</p>
                    <p>{experience.summary}</p>
                    <div className="tags">{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="section-heading-row">
              <div><p className="eyebrow">03 · {t.projectsEyebrow}</p><h2>{t.projectsTitle}</h2></div>
              <p>{t.projectsIntro}</p>
            </div>
            <div className="project-grid">
              {t.projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-top"><span>0{index + 1}</span><span>{project.date}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${t.code}: ${project.title}`}>{t.code}<ExternalIcon /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt-section" id="skills">
          <div className="container">
            <p className="eyebrow">04 · {t.skillsEyebrow}</p>
            <h2>{t.skillsTitle}</h2>
            <div className="skill-grid">
              {t.skillGroups.map((group) => <article key={group.title}><h3>{group.title}</h3><ul>{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="container">
            <p className="eyebrow">05 · {t.educationEyebrow}</p>
            <h2>{t.educationTitle}</h2>
            <div className="education-grid">
              {t.education.map((item) => <article key={item.title}><span>{item.label}</span><h3>{item.title}</h3><strong>{item.place}</strong><p>{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <p className="eyebrow">06 · {t.contactEyebrow}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <div className="contact-actions">
              <a className="button primary" href={links.email}>{t.contactButton}<ArrowIcon /></a>
              <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalIcon /></a>
              <a href={links.github} target="_blank" rel="noreferrer">GitHub <ExternalIcon /></a>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="container"><span>© {new Date().getFullYear()} Rafael Guimarães</span><span>{t.footer}</span></div></footer>
    </>
  )
}
