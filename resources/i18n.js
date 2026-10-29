const translations = {
  "Portfolio": "Portafolio",
  "Home": "Inicio",
  "About": "Sobre mí",
  "Experience": "Experiencia",
  "Skills": "Habilidades",
  "Services": "Servicios",
  "Projects": "Proyectos",
  "Contact": "Contacto",
  "Español": "English",
  "Hello, I'm": "Hola, soy",
  "Full-Stack Developer | AI Engineer | Security Interested":
    "Desarrollador Full-Stack | Ingeniero de IA | Interesado en seguridad",
  "I specialize in building high-quality web applications and use AI tools that solve real-world problems. With a passion for technology and innovation, I strive to create impactful digital experiences.":
    "Me especializo en crear aplicaciones web de alta calidad y utilizar herramientas de IA para resolver problemas del mundo real. Con pasión por la tecnología y la innovación, busco crear experiencias digitales impactantes.",
  "View My Projects": "Ver mis proyectos",
  "Download CV": "Descargar CV",
  "About Me": "Sobre mí",
  "With over 2 years of experience in web development, I specialize in creating solutions according the needs of the requeriments, always thinking about the security and efficiency of each development before and after integration in the systems.":
    "Con más de 2 años de experiencia en desarrollo web, me especializo en crear soluciones según las necesidades y requisitos, siempre pensando en la seguridad y eficiencia de cada desarrollo antes y después de su integración en los sistemas.",
  "My interest is contribute to the development of solutions in the best possible way, always with disposition to work in team, make proposals, help, innovate and of course deliver correct products to satisfy requirements.":
    "Mi interés es contribuir al desarrollo de soluciones de la mejor manera posible, siempre con disposición para trabajar en equipo, plantear propuestas, ayudar, innovar y, por supuesto, entregar productos correctos que satisfagan los requisitos.",
  "Year of experience": "Años de experiencia",
  "Certifications": "Certificaciones",
  "Skills and technologies": "Habilidades y tecnologías",
  "Github repositories": "Repositorios de GitHub",
  "Work Experience": "Experiencia laboral",
  "Web developer": "Desarrollador web",
  "I worked as a web developer and i had participated in many projects of different types, working in Backend and FrontEnd at the same time, obtaining knowledge and experience in themes how security, scalability, background process, architectures and integrations of modern tools, using the next technologies:":
    "Trabajé como desarrollador web y participé en muchos proyectos de distintos tipos, desarrollando tanto en Backend como en Frontend, y adquirí conocimientos y experiencia en seguridad, escalabilidad, procesos en segundo plano, arquitecturas e integración de herramientas modernas. Utilicé las siguientes tecnologías:",
  "HTML, CSS, JavaScript, jQuery, PHP, Slim, PostgreSQL, Git, Grafana, Prometheus, Python, SonarQube and more.":
    "HTML, CSS, JavaScript, jQuery, PHP, Slim, PostgreSQL, Git, Grafana, Prometheus, Python, SonarQube y más.",
  "Technical Skills": "Habilidades técnicas",
  "FrontEnd": "Frontend",
  "Teamplates and JS libs": "Plantillas y librerías de JS",
  "Laravel (Learning)": "Laravel (aprendiendo)",
  "Databases": "Bases de datos",
  "Infrastructure and DevOps": "Infraestructura y DevOps",
  "Web Development": "Desarrollo web",
  "Custom web applications built with modern frameworks and best practices for optimal performance.":
    "Aplicaciones web personalizadas creadas con frameworks modernos y buenas prácticas para un rendimiento óptimo.",
  "Legacy and modern development": "Desarrollo de sistemas heredados y modernos",
  "Develop in legacy and modern web apps, according the needs of the new projects and existing project.":
    "Desarrollo de aplicaciones web heredadas y modernas, según las necesidades de proyectos nuevos y existentes.",
  "Security implementations": "Implementaciones de seguridad",
  "Always thinking in security before deliver solutions.":
    "Siempre pensando en la seguridad antes de entregar soluciones.",
  "Work in teams": "Trabajo en equipo",
  "A more favorable inclination towards collaborative work to achieve collective value.":
    "Una inclinación favorable hacia el trabajo colaborativo para lograr valor colectivo.",
  "Consulting": "Consultoría",
  "Technical consulting to planning, design and implementations of solutions.":
    "Consultoría técnica para la planificación, el diseño y la implementación de soluciones.",
  "API Integration": "Integración de APIs",
  "Seamless third-party API integrations and custom API development.":
    "Integraciones fluidas de APIs de terceros y desarrollo personalizado de APIs.",
  "Users and Roles base system": "Sistema base de usuarios y roles",
  "A base system to start any web app to combine with users, permissions, roles and adminstration of them":
    "Sistema base para iniciar cualquier aplicación web con usuarios, permisos, roles y su administración.",
  "In progress...": "En desarrollo...",
  "Personal local app to register money transactions and track expenses to personal finances.":
    "Aplicación personal local para registrar transacciones y hacer seguimiento de gastos y finanzas personales.",
  "Demostration": "Demostración",
  "Code": "Código",
  "Web-Scraper-of-prices": "Comparador web de precios",
  "Web Scraper to compare products and prices between Amazon, Mercado Libre and Ebay e-commerce":
    "Herramienta de extracción web para comparar productos y precios en Amazon, Mercado Libre y eBay.",
  "Get In Touch": "Ponte en contacto",
  "Email": "Correo electrónico",
  "© 2026 JuanseCydev. All rights reserved.":
    "© 2026 JuanseCydev. Todos los derechos reservados.",
  "Notes App": "Aplicación de notas",
  "A personal local app to register notes and track them to learn Laravel.":
    "Aplicación personal local para registrar notas y hacer seguimiento de ellas para aprender Laravel.",
};

const pageMetadata = {
  en: {
    title: "JuanseCydev Portfolio",
    description:
      "A personal portfolio inspired by the Northern Lights, with a dark style and modern design elements.",
    resume: "resources/resume_en.pdf",
  },
  es: {
    title: "JuanseCydev Portafolio",
    description:
      "Un portafolio personal inspirado en la aurora boreal, con un estilo oscuro y elementos de diseño moderno.",
    resume: "resources/resume_es.pdf",
  },
};

const originalText = new Map();
const languageButtons = document.querySelectorAll("[data-language-toggle]");
const descriptionMeta = document.querySelector('meta[name="description"]');
const openGraphTitleMeta = document.querySelector('meta[property="og:title"]');
const openGraphDescriptionMeta = document.querySelector(
  'meta[property="og:description"]',
);

function setLanguage(language) {
  const isSpanish = language === "es";
  const metadata = pageMetadata[isSpanish ? "es" : "en"];
  const textWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
  );

  document.documentElement.lang = isSpanish ? "es" : "en";

  let textNode;
  while ((textNode = textWalker.nextNode())) {
    if (!originalText.has(textNode)) {
      originalText.set(textNode, textNode.textContent);
    }

    const original = originalText.get(textNode);
    if (isSpanish) {
      const leadingWhitespace = original.match(/^\s*/)[0];
      const trailingWhitespace = original.match(/\s*$/)[0];
      const text = original.trim().replace(/\s+/g, " ");
      textNode.textContent =
        leadingWhitespace + (translations[text] || text) + trailingWhitespace;
    } else {
      textNode.textContent = original;
    }
  }

  document.title = metadata.title;
  descriptionMeta.content = metadata.description;
  openGraphTitleMeta.content = metadata.title;
  openGraphDescriptionMeta.content = metadata.description;
  document.querySelectorAll('a[href^="resources/resume_"]').forEach((link) => {
    link.href = metadata.resume;
  });
  languageButtons.forEach((button) => {
    button.textContent = isSpanish ? "English" : "Español";
  });
  localStorage.setItem("portfolio-language", isSpanish ? "es" : "en");
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "en" ? "es" : "en";
    setLanguage(nextLanguage);
    document.getElementById("mobileMenu").classList.add("hidden");
  });
});

setLanguage(localStorage.getItem("portfolio-language") === "es" ? "es" : "en");
