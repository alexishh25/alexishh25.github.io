export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.community': 'Comunidad',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    'hero.title': 'Gameplay & UI Programmer (Unity · C#) | Software Developer',
    'hero.description': 'Estudiante de Ingeniería de Sistemas en la UPN, especializado en desarrollo de videojuegos y sistemas empresariales. Apasionado por crear experiencias interactivas y código limpio.',
    'hero.cta.projects': 'Ver Proyectos',
    'hero.cta.cv': 'Descargar CV',
    'projects.title': 'Proyectos',
    'projects.filter.all': 'Todos',
    'projects.filter.games': 'Videojuegos',
    'projects.filter.software': 'Software',
    'projects.placeholder': 'Captura / Demo pendiente',
    'projects.view': 'Ver proyecto',
    'projects.repo': 'Repositorio',
    'experience.title': 'Experiencia',
    'experience.present': 'Presente',
    'community.title': 'Comunidad & Eventos',
    'community.gdupn.title': 'Líder de GDUPN',
    'community.gdupn.description': 'Comunidad de desarrollo de videojuegos de la UPN Los Olivos',
    'community.gdupn.details': 'Equipo de 3 personas, 1 evento y 1 taller organizados',
    'community.spooky.title': 'Spooky Game Dev UPN 2026',
    'community.spooky.date': '30 de octubre, 2026',
    'community.spooky.description': 'Organizador principal del evento de desarrollo de videojuegos',
    'community.spooky.stats': '~30 asistentes, 4 equipos participantes',
    'community.spooky.partners': 'En colaboración con LEAD UPN, Darkvoid Studios y Game Jam Plus',
    'community.spooky.reels': 'Ver reels del evento',
    'skills.title': 'Habilidades',
    'skills.languages': 'Lenguajes',
    'skills.frameworks': 'Frameworks & Engines',
    'skills.architecture': 'Arquitectura & Patrones',
    'skills.soft': 'Habilidades Blandas',
    'skills.level.advanced': 'Avanzado',
    'skills.level.intermediate': 'Intermedio',
    'skills.level.basic': 'Básico',
    'certifications.title': 'Certificaciones',
    'contact.title': 'Contacto',
    'contact.description': 'Interesado en colaborar o conocer más sobre mi trabajo',
    'footer.built': 'Construido con Astro y Tailwind CSS',
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.community': 'Community',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.title': 'Gameplay & UI Programmer (Unity · C#) | Software Developer',
    'hero.description': 'Computer Systems Engineering student at UPN, specialized in game development and enterprise systems. Passionate about creating interactive experiences and clean code.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.cv': 'Download CV',
    'projects.title': 'Projects',
    'projects.filter.all': 'All',
    'projects.filter.games': 'Games',
    'projects.filter.software': 'Software',
    'projects.placeholder': 'Screenshot / Demo pending',
    'projects.view': 'View project',
    'projects.repo': 'Repository',
    'experience.title': 'Experience',
    'experience.present': 'Present',
    'community.title': 'Community & Events',
    'community.gdupn.title': 'GDUPN Leader',
    'community.gdupn.description': 'UPN Los Olivos game development community',
    'community.gdupn.details': 'Team of 3 people, 1 event and 1 workshop organized',
    'community.spooky.title': 'Spooky Game Dev UPN 2026',
    'community.spooky.date': 'October 30, 2026',
    'community.spooky.description': 'Main organizer of the game development event',
    'community.spooky.stats': '~30 attendees, 4 participating teams',
    'community.spooky.partners': 'In collaboration with LEAD UPN, Darkvoid Studios and Game Jam Plus',
    'community.spooky.reels': 'Watch event reels',
    'skills.title': 'Skills',
    'skills.languages': 'Languages',
    'skills.frameworks': 'Frameworks & Engines',
    'skills.architecture': 'Architecture & Patterns',
    'skills.soft': 'Soft Skills',
    'skills.level.advanced': 'Advanced',
    'skills.level.intermediate': 'Intermediate',
    'skills.level.basic': 'Basic',
    'certifications.title': 'Certifications',
    'contact.title': 'Contact',
    'contact.description': 'Interested in collaborating or learning more about my work',
    'footer.built': 'Built with Astro and Tailwind CSS',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
