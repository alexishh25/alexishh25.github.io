export interface Project {
  id: string;
  title: string;
  description: {
    es: string;
    en: string;
  };
  category: 'game' | 'software';
  tech: string[];
  image?: string;
  demo?: string;
  repo?: string;
  teamSize?: number;
  date: string;
}

export const projects: Project[] = [
  {
    id: 'mentality',
    title: 'Mentality',
    description: {
      es: 'Sistema de UI desacoplado bajo MVVM con UI Toolkit y VContainer. Control del jugador bajo MVP. Proyecto en equipo con arquitectura modular aplicando SOLID y Clean Architecture.',
      en: 'Decoupled UI system using MVVM with UI Toolkit and VContainer. Player control under MVP. Team project with modular architecture applying SOLID and Clean Architecture.',
    },
    category: 'game',
    tech: ['Unity 6', 'C#', 'UI Toolkit', 'MVVM', 'MVP', 'VContainer', 'Input System'],
    image: '/placeholder-project.png',
    teamSize: 3,
    date: '2026',
  },
  {
    id: 'touhou-engine',
    title: 'Touhou Engine Project',
    description: {
      es: 'Prototipo técnico de engine bullet hell aplicando SOLID. State Machine personalizada, Unity Input System, sistema de disparo con object pooling y arquitectura reutilizable.',
      en: 'Technical prototype of a bullet hell engine applying SOLID. Custom State Machine, Unity Input System, shooting system with object pooling and reusable architecture.',
    },
    category: 'game',
    tech: ['Unity', 'C#', 'State Machine', 'Object Pooling', 'SOLID'],
    image: '/placeholder-project.png',
    repo: 'https://github.com/alexishh25/Touhou-Engine-Project',
    date: '2026',
  },
  {
    id: 'megaman-x',
    title: 'Megaman X Project',
    description: {
      es: 'Recreación de mecánicas clásicas de Megaman X en C#. Estudio de gameplay y física de plataformas.',
      en: 'Recreation of classic Megaman X mechanics in C#. Study of gameplay and platform physics.',
    },
    category: 'game',
    tech: ['C#'],
    image: '/placeholder-project.png',
    repo: 'https://github.com/alexishh25/Megaman-X-Project',
    date: '2025',
  },
  {
    id: 'gem-collector',
    title: 'Gem Collector 3D',
    description: {
      es: 'Juego 3D desarrollado con C++, OpenGL y GLUT. Proyecto del curso de Computación Gráfica.',
      en: '3D game developed with C++, OpenGL and GLUT. Computer Graphics course project.',
    },
    category: 'game',
    tech: ['C++', 'OpenGL', 'GLUT'],
    image: '/placeholder-project.png',
    repo: 'https://github.com/alexishh25/Recoleccion-de-Gemas---OpenGL',
    date: '2025',
  },
  {
    id: 'lima-game-jam',
    title: 'Lima Game Jam 2026',
    description: {
      es: 'Juego creado en 48 horas para la Lima Game Jam 2026. Trabajo bajo presión y prototipado rápido.',
      en: 'Game created in 48 hours for Lima Game Jam 2026. Working under pressure and rapid prototyping.',
    },
    category: 'game',
    tech: ['Unity', 'C#'],
    image: '/placeholder-project.png',
    demo: '#',
    date: '2026-02',
  },
  {
    id: 'foodjet',
    title: 'FoodJet',
    description: {
      es: 'Sistema de delivery Full Stack con Spring Boot y Angular 21. Autenticación JWT, dashboard con Chart.js y estado reactivo con Angular Signals.',
      en: 'Full Stack delivery system with Spring Boot and Angular 21. JWT authentication, dashboard with Chart.js and reactive state with Angular Signals.',
    },
    category: 'software',
    tech: ['Spring Boot', 'Angular 21', 'MySQL', 'JWT', 'Chart.js', 'Bootstrap 5'],
    image: '/placeholder-project.png',
    repo: 'https://github.com/alexishh25/Foodjet',
    date: '2026',
  },
  {
    id: 'streamlabs-chat',
    title: 'Chat personalizado para Streamlabs',
    description: {
      es: 'Overlay de chat personalizado para streaming con HTML, CSS y JavaScript.',
      en: 'Custom chat overlay for streaming with HTML, CSS and JavaScript.',
    },
    category: 'software',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/placeholder-project.png',
    repo: 'https://github.com/alexishh25/Chat-personalizado-para-Streamlabs',
    date: '2025',
  },
];
