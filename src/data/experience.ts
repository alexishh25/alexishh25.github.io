export interface Experience {
  title: {
    es: string;
    en: string;
  };
  company: string;
  period: {
    es: string;
    en: string;
  };
  description: {
    es: string[];
    en: string[];
  };
  type: 'game' | 'software';
}

export const experiences: Experience[] = [
  {
    title: {
      es: 'Desarrollador Unity (Voluntariado)',
      en: 'Unity Developer (Volunteer)',
    },
    company: 'Delvet Studio',
    period: {
      es: 'Enero 2026 - Marzo 2026',
      en: 'January 2026 - March 2026',
    },
    description: {
      es: [
        'Desarrollo de sistemas de gameplay orientados a economía interna e inventarios',
        'Diseño e integración de UI conectadas a lógica de negocio',
        'Implementación de sistemas de compra con validación de recursos',
        'Debugging en arquitectura modular preexistente',
        'Trabajo remoto con revisión técnica y cumplimiento de entregables',
      ],
      en: [
        'Development of gameplay systems focused on internal economy and inventories',
        'Design and integration of UI connected to business logic',
        'Implementation of purchase systems with resource validation',
        'Debugging in pre-existing modular architecture',
        'Remote work with technical review and deliverable compliance',
      ],
    },
    type: 'game',
  },
  {
    title: {
      es: 'Practicante de Software (.NET/WPF)',
      en: 'Software Intern (.NET/WPF)',
    },
    company: 'Hard System Peru',
    period: {
      es: 'Agosto 2025 - Noviembre 2025',
      en: 'August 2025 - November 2025',
    },
    description: {
      es: [
        'Desarrollo de aplicaciones de escritorio con C# y XAML',
        'Aplicación de patrones MVVM y MVC',
        'Documentación técnica de flujos de trabajo',
        'Colaboración en análisis de experiencia de usuario',
      ],
      en: [
        'Development of desktop applications with C# and XAML',
        'Application of MVVM and MVC patterns',
        'Technical documentation of workflows',
        'Collaboration on user experience analysis',
      ],
    },
    type: 'software',
  },
];
