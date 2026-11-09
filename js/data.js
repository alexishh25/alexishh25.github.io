// Todo el contenido del portfolio. Cada texto tiene versión es / en.
// Edita aquí para actualizar proyectos, experiencia o skills.

window.PORTFOLIO = {
  links: {
    email: 'alexisherencia25@gmail.com',
    linkedin: 'https://www.linkedin.com/in/alexis-javier-jesus-herencia-huaracha-570814261/',
    github: 'https://github.com/alexishh25',
    cv: 'assets/cv-alexis-herencia.pdf',
  },

  ui: {
    es: {
      nav: { about: 'Perfil', path: 'Trayectoria', projects: 'Proyectos', skills: 'Skills', community: 'Comunidad', contact: 'Contacto' },
      modeGame: 'GAME DEV', modeWeb: 'WEB DEV',
      switchHint: 'Cambia de perfil',
      cv: 'Descargar CV',
      viewProjects: 'Ver proyectos',
      repo: 'Código', demo: 'Demo', private: 'Privado / en equipo',
      present: 'Actualidad',
      education: 'Educación', languages: 'Idiomas',
      footer: 'Hecho a mano con HTML, CSS y JS — sin frameworks.',
      copied: '¡Email copiado!',
    },
    en: {
      nav: { about: 'Profile', path: 'Journey', projects: 'Projects', skills: 'Skills', community: 'Community', contact: 'Contact' },
      modeGame: 'GAME DEV', modeWeb: 'WEB DEV',
      switchHint: 'Switch profile',
      cv: 'Download CV',
      viewProjects: 'View projects',
      repo: 'Code', demo: 'Demo', private: 'Private / team project',
      present: 'Present',
      education: 'Education', languages: 'Languages',
      footer: 'Handmade with HTML, CSS and JS — no frameworks.',
      copied: 'Email copied!',
    },
  },

  // ───────────────────────── PERFIL GAME DEV ─────────────────────────
  game: {
    es: {
      sections: { about: 'CHARACTER INFO', path: 'WORLD MAP', projects: 'SAVE FILES', skills: 'INVENTORY', community: 'GUILD', contact: 'CO-OP' },
      kicker: '▶ PLAYER 1 READY',
      name: 'ALEXIS HERENCIA',
      role: 'Gameplay & UI Programmer',
      class: 'Clase: Unity · C# Developer',
      tagline: 'Game developer en formación. Construyo sistemas de gameplay y UI con arquitectura limpia: MVVM, MVP, SOLID y mucha iteración.',
      start: 'PRESS START',
      stats: [
        { k: 'C# / UNITY', v: 88 },
        { k: 'UI PROGRAMMING', v: 84 },
        { k: 'GAMEPLAY SYSTEMS', v: 78 },
        { k: 'ARQUITECTURA', v: 80 },
      ],
      about: [
        'Estudiante de 8vo ciclo de Ingeniería de Sistemas Computacionales en la Universidad Privada del Norte (Lima, Perú), con foco en el desarrollo de videojuegos.',
        'Me especializo en programación de UI y sistemas en Unity con C#: interfaces desacopladas con UI Toolkit, inyección de dependencias con VContainer, state machines y object pooling.',
        'Busco sumarme a un equipo de la industria donde pueda aportar código limpio, iterar rápido y seguir subiendo de nivel.',
      ],
      attrs: [
        { k: 'LVL', v: '8vo ciclo' },
        { k: 'BASE', v: 'Lima, PE' },
        { k: 'GUILD', v: 'GDUPN' },
        { k: 'LANG', v: 'ES · EN B2' },
      ],
    },
    en: {
      sections: { about: 'CHARACTER INFO', path: 'WORLD MAP', projects: 'SAVE FILES', skills: 'INVENTORY', community: 'GUILD', contact: 'CO-OP' },
      kicker: '▶ PLAYER 1 READY',
      name: 'ALEXIS HERENCIA',
      role: 'Gameplay & UI Programmer',
      class: 'Class: Unity · C# Developer',
      tagline: 'Game developer in training. I build gameplay and UI systems with clean architecture: MVVM, MVP, SOLID and lots of iteration.',
      start: 'PRESS START',
      stats: [
        { k: 'C# / UNITY', v: 88 },
        { k: 'UI PROGRAMMING', v: 84 },
        { k: 'GAMEPLAY SYSTEMS', v: 78 },
        { k: 'ARCHITECTURE', v: 80 },
      ],
      about: [
        '8th-semester Computer Systems Engineering student at Universidad Privada del Norte (Lima, Peru), focused on game development.',
        'I specialize in UI and systems programming in Unity with C#: decoupled interfaces with UI Toolkit, dependency injection with VContainer, state machines and object pooling.',
        'I want to join an industry team where I can contribute clean code, iterate fast and keep leveling up.',
      ],
      attrs: [
        { k: 'LVL', v: '8th sem.' },
        { k: 'BASE', v: 'Lima, PE' },
        { k: 'GUILD', v: 'GDUPN' },
        { k: 'LANG', v: 'ES · EN B2' },
      ],
    },

    // Trayectoria como "mapa de niveles"
    path: [
      {
        date: '03/2023', icon: '🎓',
        es: { title: 'Inicio de la carrera', org: 'Universidad Privada del Norte', text: 'Empieza Ingeniería de Sistemas Computacionales. Primeros pasos con C#, C++ y Java.' },
        en: { title: 'University starts', org: 'Universidad Privada del Norte', text: 'Started Computer Systems Engineering. First steps with C#, C++ and Java.' },
      },
      {
        date: '2025', icon: '💎',
        es: { title: 'Primeros juegos', org: 'Proyectos personales y de curso', text: 'Gem Collector 3D en C++/OpenGL y Megaman X Project en C#: física de plataformas y bucles de juego desde cero.' },
        en: { title: 'First games', org: 'Personal & course projects', text: 'Gem Collector 3D in C++/OpenGL and Megaman X Project in C#: platformer physics and game loops from scratch.' },
      },
      {
        date: '08/2025 – 11/2025', icon: '🖥️', job: true,
        es: { title: 'Desarrollador .NET Junior (WPF)', org: 'Hard System Peru S.A.C.', text: 'Side quest de software: sistemas de escritorio con C# y XAML aplicando MVVM — la base de mi arquitectura de UI en Unity.' },
        en: { title: 'Junior .NET Developer (WPF)', org: 'Hard System Peru S.A.C.', text: 'Software side quest: desktop systems in C# and XAML using MVVM — the foundation of my Unity UI architecture.' },
      },
      {
        date: '01/2026 – 02/2026', icon: '🕹️', job: true, boss: true,
        es: {
          title: 'Desarrollador Unity Junior', org: 'Delvet Studio S.A.C.',
          text: 'Primer estudio de videojuegos.',
          bullets: [
            'Sistemas de gameplay de economía interna, interacción jugador–entorno e inventarios.',
            'UI conectada a lógica de negocio con validación de estados en tiempo real.',
            'Sistemas de compra con control de stock, validación de recursos y transacciones seguras.',
            'Debugging y mantenimiento dentro de una arquitectura modular existente.',
            'Trabajo remoto con revisión técnica y entregables bajo presión de tiempo.',
          ],
        },
        en: {
          title: 'Junior Unity Developer', org: 'Delvet Studio S.A.C.',
          text: 'First game studio.',
          bullets: [
            'Gameplay systems for in-game economy, player–world interaction and inventories.',
            'UI wired to business logic with real-time state validation.',
            'Purchase systems with stock control, resource validation and safe transactions.',
            'Debugging and maintenance inside an existing modular architecture.',
            'Remote work with technical reviews and deadlines under time pressure.',
          ],
        },
      },
      {
        date: '01/2026 →', icon: '🌸',
        es: { title: 'Touhou Engine Prototype', org: 'Solo developer', text: 'Engine bullet hell en Unity 6: state machine por personaje, Input System con modo Focus y disparos con object pooling.' },
        en: { title: 'Touhou Engine Prototype', org: 'Solo developer', text: 'Bullet hell engine in Unity 6: per-character state machine, Input System with Focus mode and pooled shooting.' },
      },
      {
        date: '02/2026', icon: '⏱️',
        es: { title: 'Lima Game Jam 2026', org: 'Game jam · 48 h', text: 'Un juego completo en 48 horas: prototipado rápido y trabajo en equipo bajo presión.' },
        en: { title: 'Lima Game Jam 2026', org: 'Game jam · 48 h', text: 'A full game in 48 hours: rapid prototyping and teamwork under pressure.' },
      },
      {
        date: '2026', icon: '🧠',
        es: { title: 'Mentality — UI Developer', org: 'Proyecto en equipo', text: 'UI desacoplada con MVVM + UI Toolkit + VContainer y control del jugador con MVP.' },
        en: { title: 'Mentality — UI Developer', org: 'Team project', text: 'Decoupled UI with MVVM + UI Toolkit + VContainer and MVP-based player control.' },
      },
      {
        date: '30/10/2026', icon: '🎃',
        es: { title: 'Spooky Game Dev UPN', org: 'GDUPN × LEAD UPN', text: 'Organizador principal del evento: ~30 asistentes y 4 equipos.' },
        en: { title: 'Spooky Game Dev UPN', org: 'GDUPN × LEAD UPN', text: 'Lead organizer of the event: ~30 attendees and 4 teams.' },
      },
      {
        date: 'NOW', icon: '⭐', current: true,
        es: { title: 'Siguiente nivel', org: 'Buscando equipo', text: 'Abierto a oportunidades como Unity / Gameplay / UI programmer.' },
        en: { title: 'Next level', org: 'Looking for a party', text: 'Open to Unity / Gameplay / UI programmer opportunities.' },
      },
    ],

    projects: [
      {
        title: 'Mentality', tag: 'UI DEV', art: 'mentality', year: '2026',
        tech: ['Unity', 'C#', 'UI Toolkit', 'VContainer', 'MVVM', 'MVP'],
        es: {
          role: 'UI Developer · equipo',
          text: 'Sistema de UI desacoplado bajo MVVM integrado con UI Toolkit y VContainer.',
          bullets: [
            'Patrón de comandos propio (UnityHandler) para binding de eventos: ViewModels como clases C# puras y testeables.',
            'Coordinador central de navegación, transiciones y stack dinámico de pantallas.',
            'Control del jugador con MVP, presentadores puros vía ITickable de VContainer.',
          ],
        },
        en: {
          role: 'UI Developer · team',
          text: 'Decoupled UI system under MVVM integrated with UI Toolkit and VContainer.',
          bullets: [
            'Custom command pattern (UnityHandler) for event binding: ViewModels stay pure, testable C# classes.',
            'Central coordinator for navigation, transitions and a dynamic screen stack.',
            'Player control with MVP, pure presenters through VContainer’s ITickable.',
          ],
        },
      },
      {
        title: 'Touhou Engine Project', tag: 'SOLO', art: 'danmaku', year: '2026',
        repo: 'https://github.com/alexishh25/Touhou-Engine-Project',
        tech: ['Unity 6', 'C#', 'SOLID', 'State Machine', 'Object Pooling', 'UI Toolkit'],
        es: {
          role: 'Solo developer',
          text: 'Prototipo técnico de un engine bullet hell (danmaku) pensado para ser extensible.',
          bullets: [
            'State machine con clase base abstracta, manager y estados concretos por personaje.',
            'Service Locator para desacoplar input, sonido y pool de balas detrás de interfaces.',
            'Unity Input System con modo Focus sincronizado con animaciones.',
          ],
        },
        en: {
          role: 'Solo developer',
          text: 'Technical prototype of an extensible bullet hell (danmaku) engine.',
          bullets: [
            'State machine with an abstract base, a manager and concrete per-character states.',
            'Service Locator decoupling input, sound and the bullet pool behind interfaces.',
            'Unity Input System with a Focus mode synced to animations.',
          ],
        },
      },
      {
        title: 'Megaman X Project', tag: 'C#', art: 'platformer', year: '2025',
        repo: 'https://github.com/alexishh25/Megaman-X-Project',
        tech: ['C#', 'Platformer', 'Game feel'],
        es: { role: 'Fan project', text: 'Proyecto inspirado en la saga Mega Man X para estudiar mecánicas clásicas de plataformas y física de movimiento.' },
        en: { role: 'Fan project', text: 'A project inspired by the Mega Man X series to study classic platformer mechanics and movement physics.' },
      },
      {
        title: 'Gem Collector 3D', tag: 'OPENGL', art: 'gems', year: '2025',
        repo: 'https://github.com/alexishh25/Recoleccion-de-Gemas---OpenGL',
        tech: ['C++', 'OpenGL', 'GLUT'],
        es: { role: 'Computación Gráfica', text: 'Juego 3D de recolección de gemas hecho en C++ con OpenGL y GLUT, sin motor.' },
        en: { role: 'Computer Graphics', text: '3D gem-collecting game in C++ with OpenGL and GLUT — no engine.' },
      },
      {
        title: 'Lima Game Jam 2026', tag: 'JAM', art: 'jam', year: '2026',
        tech: ['Unity', 'C#', '48 h'],
        es: { role: 'Game jam', text: 'Juego creado en 48 horas. Prototipado rápido, recorte de alcance y trabajo bajo presión.' },
        en: { role: 'Game jam', text: 'Game made in 48 hours. Rapid prototyping, scope cutting and working under pressure.' },
      },
    ],

    skills: [
      { group: 'ENGINES', items: [
        { n: 'Unity', i: '◆', lv: 5 }, { n: 'Godot', i: '◇', lv: 2 }, { n: 'Roblox Studio', i: '▣', lv: 3 },
        { n: 'Raylib', i: '◈', lv: 2 }, { n: 'MonoGame', i: '▤', lv: 2 }, { n: 'OpenGL', i: '△', lv: 2 },
      ]},
      { group: 'LANGUAGES', items: [
        { n: 'C#', i: '♯', lv: 5 }, { n: 'C++', i: '+', lv: 3 }, { n: 'Lua', i: '☾', lv: 3 },
      ]},
      { group: 'SYSTEMS', items: [
        { n: 'UI Toolkit', i: '▦', lv: 4 }, { n: 'VContainer / DI', i: '⛓', lv: 4 }, { n: 'State Machines', i: '⟳', lv: 4 },
        { n: 'Object Pooling', i: '◎', lv: 4 }, { n: 'Input System', i: '✜', lv: 4 }, { n: 'MVVM · MVP · SOLID', i: '⚙', lv: 4 },
      ]},
      { group: 'TOOLS', items: [
        { n: 'Git / GitHub', i: '⎇', lv: 4 }, { n: 'Rider / VS', i: '✎', lv: 4 },
      ]},
    ],
  },

  // ───────────────────────── PERFIL WEB DEV ─────────────────────────
  web: {
    es: {
      sections: { about: 'Sobre mí', path: 'Experiencia', projects: 'Proyectos', skills: 'Stack', community: 'Comunidad', contact: 'Contacto' },
      kicker: 'Disponible para proyectos',
      name: 'Alexis Herencia',
      role: 'Full-Stack & Software Developer',
      class: 'Angular · Spring Boot · .NET',
      tagline: 'Construyo aplicaciones web y de escritorio con arquitecturas claras, interfaces cuidadas y código mantenible.',
      start: 'Ver proyectos',
      about: [
        'Estudiante de Ingeniería de Sistemas Computacionales (UPN, 8vo ciclo) con experiencia en desarrollo de software empresarial.',
        'He trabajado en sistemas internos con C#, WPF y XAML aplicando MVVM y MVC, y construyo aplicaciones full-stack con Angular, Spring Boot y bases de datos SQL/NoSQL.',
        'Me importa la experiencia de usuario, la documentación y escribir código que otros puedan mantener.',
      ],
      attrs: [
        { k: 'location', v: 'Lima, Perú' },
        { k: 'focus', v: 'Frontend + APIs' },
        { k: 'english', v: 'B2' },
        { k: 'status', v: 'open_to_work' },
      ],
    },
    en: {
      sections: { about: 'About', path: 'Experience', projects: 'Projects', skills: 'Stack', community: 'Community', contact: 'Contact' },
      kicker: 'Available for projects',
      name: 'Alexis Herencia',
      role: 'Full-Stack & Software Developer',
      class: 'Angular · Spring Boot · .NET',
      tagline: 'I build web and desktop applications with clear architecture, polished interfaces and maintainable code.',
      start: 'View projects',
      about: [
        'Computer Systems Engineering student (UPN, 8th semester) with hands-on enterprise software experience.',
        'I have worked on internal systems with C#, WPF and XAML using MVVM and MVC, and I build full-stack apps with Angular, Spring Boot and SQL/NoSQL databases.',
        'I care about user experience, documentation and writing code other people can maintain.',
      ],
      attrs: [
        { k: 'location', v: 'Lima, Peru' },
        { k: 'focus', v: 'Frontend + APIs' },
        { k: 'english', v: 'B2' },
        { k: 'status', v: 'open_to_work' },
      ],
    },

    path: [
      {
        date: '08/2025 – 11/2025', job: true,
        es: {
          title: 'Desarrollador .NET Junior (WPF)', org: 'Hard System Peru S.A.C.',
          bullets: [
            'Desarrollo y mantenimiento de sistemas internos de escritorio con C# y XAML.',
            'Aplicación de patrones de arquitectura MVVM y MVC.',
            'Análisis de flujos de trabajo, experiencia de usuario y documentación técnica.',
            'Trabajo en equipo, comunicación y gestión del tiempo.',
          ],
        },
        en: {
          title: 'Junior .NET Developer (WPF)', org: 'Hard System Peru S.A.C.',
          bullets: [
            'Built and maintained internal desktop systems with C# and XAML.',
            'Applied MVVM and MVC architecture patterns.',
            'Workflow analysis, user experience and technical documentation.',
            'Teamwork, communication and time management.',
          ],
        },
      },
      {
        date: '01/2026 – 02/2026', job: true,
        es: {
          title: 'Desarrollador Unity Junior', org: 'Delvet Studio S.A.C.',
          bullets: [
            'UI conectada a lógica de negocio con validación de estados en tiempo real.',
            'Sistemas de compra con control de stock y transacciones seguras.',
            'Mantenimiento de código en una arquitectura modular, trabajo remoto con code review.',
          ],
        },
        en: {
          title: 'Junior Unity Developer', org: 'Delvet Studio S.A.C.',
          bullets: [
            'UI wired to business logic with real-time state validation.',
            'Purchase systems with stock control and safe transactions.',
            'Code maintenance in a modular architecture, remote work with code review.',
          ],
        },
      },
      {
        date: '03/2023 →',
        es: { title: 'Ingeniería de Sistemas Computacionales', org: 'Universidad Privada del Norte · 8vo ciclo', text: 'Bases de datos, ingeniería de software, desarrollo web y móvil.' },
        en: { title: 'Computer Systems Engineering', org: 'Universidad Privada del Norte · 8th semester', text: 'Databases, software engineering, web and mobile development.' },
      },
    ],

    projects: [
      {
        title: 'FoodJet', tag: 'Full-Stack', art: 'foodjet', year: '2026',
        repo: 'https://github.com/alexishh25/Foodjet',
        tech: ['Angular 21', 'Signals', 'Spring Boot', 'JWT', 'MySQL', 'Bootstrap'],
        es: {
          role: 'Plataforma de delivery',
          text: 'Delivery de comida a domicilio con arquitectura desacoplada: API en Spring Boot con seguridad JWT y frontend en Angular 21.',
          bullets: ['Estado reactivo con Angular Signals.', 'Carrito lateral, checkout y seguimiento del pedido en tiempo real.', 'Panel de administración con métricas.'],
        },
        en: {
          role: 'Delivery platform',
          text: 'Food delivery platform with a decoupled architecture: Spring Boot API secured with JWT and an Angular 21 frontend.',
          bullets: ['Reactive state with Angular Signals.', 'Side cart, checkout and live order tracking.', 'Admin dashboard with metrics.'],
        },
      },
      {
        title: 'Streamlabs Custom Chat', tag: 'Frontend', art: 'chat', year: '2025',
        repo: 'https://github.com/alexishh25/Chat-personalizado-para-Streamlabs',
        tech: ['HTML', 'CSS', 'JavaScript', 'Animate.css'],
        es: { role: 'Overlay para streaming', text: 'Overlay de chat animado y totalmente personalizable para transmisiones en YouTube y Twitch, con badges, emotes y fuentes propias.' },
        en: { role: 'Streaming overlay', text: 'Animated, fully themeable chat overlay for YouTube and Twitch streams, with badges, emotes and custom fonts.' },
      },
      {
        title: 'Sistemas internos WPF', tag: 'Desktop', art: 'wpf', year: '2025',
        tech: ['C#', '.NET', 'WPF', 'XAML', 'MVVM'],
        es: { role: 'Hard System Peru', text: 'Aplicaciones de escritorio internas con C# y XAML bajo MVVM, enfocadas en flujos de trabajo y usabilidad.' },
        en: { role: 'Hard System Peru', text: 'Internal desktop apps in C# and XAML using MVVM, focused on workflows and usability.' },
      },
      {
        title: 'Este portfolio', tag: 'Frontend', art: 'portfolio', year: '2026',
        repo: 'https://github.com/alexishh25/alexishh25.github.io',
        tech: ['HTML', 'CSS', 'JavaScript', 'Canvas', 'GitHub Pages'],
        es: { role: 'Doble perfil', text: 'Sitio estático sin frameworks con un switch que cambia todo el diseño y contenido entre perfil Game Dev y Web Dev, en español e inglés.' },
        en: { role: 'Dual profile', text: 'Framework-free static site with a switch that swaps the whole design and content between Game Dev and Web Dev profiles, in Spanish and English.' },
      },
    ],

    skills: [
      { group: 'Frontend', items: [{ n: 'JavaScript' }, { n: 'TypeScript' }, { n: 'Angular' }, { n: 'HTML & CSS' }, { n: 'Bootstrap' }] },
      { group: 'Backend', items: [{ n: 'Java' }, { n: 'Spring Boot' }, { n: 'C# / .NET' }, { n: 'REST · JWT' }] },
      { group: 'Datos', en: 'Data', items: [{ n: 'SQL (MySQL, SQL Server)' }, { n: 'NoSQL' }] },
      { group: 'Desktop & Mobile', items: [{ n: 'WPF' }, { n: 'WinUI' }, { n: 'Avalonia' }, { n: 'Flutter / Dart' }, { n: 'Kotlin · Android Studio' }] },
      { group: 'Arquitectura', en: 'Architecture', items: [{ n: 'MVVM' }, { n: 'MVC' }, { n: 'Clean Architecture' }, { n: 'SOLID' }] },
      { group: 'Tools', items: [{ n: 'Git / GitHub' }, { n: 'VS Code' }, { n: 'Visual Studio' }] },
    ],
  },

  // Común a ambos perfiles
  community: {
    es: {
      gdupn: { title: 'Líder de GDUPN', text: 'Comunidad de desarrollo de videojuegos de la UPN Los Olivos. Equipo de 3 personas, con eventos y talleres organizados.' },
      spooky: {
        title: 'Spooky Game Dev UPN 2026', date: '30 de octubre, 2026',
        text: 'Organizador principal del evento de desarrollo de videojuegos, en colaboración con LEAD UPN, Darkvoid Studios y Game Jam Plus.',
        stats: [{ v: '~30', k: 'asistentes' }, { v: '4', k: 'equipos' }, { v: '3', k: 'aliados' }],
      },
    },
    en: {
      gdupn: { title: 'GDUPN Leader', text: 'Game development community at UPN Los Olivos. A 3-person team organizing events and workshops.' },
      spooky: {
        title: 'Spooky Game Dev UPN 2026', date: 'October 30, 2026',
        text: 'Lead organizer of the game development event, in collaboration with LEAD UPN, Darkvoid Studios and Game Jam Plus.',
        stats: [{ v: '~30', k: 'attendees' }, { v: '4', k: 'teams' }, { v: '3', k: 'partners' }],
      },
    },
  },

  education: {
    es: { degree: 'Ingeniería de Sistemas Computacionales', school: 'Universidad Privada del Norte · Los Olivos, Lima', when: '03/2023 – actualidad · 8vo ciclo', english: 'Inglés — Reading B2 · Listening B2/B2+ · Speaking B2', spanish: 'Español — Nativo' },
    en: { degree: 'Computer Systems Engineering', school: 'Universidad Privada del Norte · Los Olivos, Lima', when: '03/2023 – present · 8th semester', english: 'English — Reading B2 · Listening B2/B2+ · Speaking B2', spanish: 'Spanish — Native' },
  },

  contact: {
    game: {
      es: { title: '¿Armamos party?', text: 'Busco un equipo donde programar gameplay y UI. Si tienes un proyecto, una vacante o una jam, mándame un mensaje.' },
      en: { title: 'Want to party up?', text: 'I’m looking for a team where I can program gameplay and UI. Have a project, an opening or a jam? Send me a message.' },
    },
    web: {
      es: { title: 'Hablemos', text: '¿Tienes un proyecto web, una app o una vacante? Escríbeme y te respondo pronto.' },
      en: { title: 'Let’s talk', text: 'Have a web project, an app or an opening? Write to me and I’ll get back to you soon.' },
    },
  },
};
