export interface Skill {
  name: string;
  level: 'advanced' | 'intermediate' | 'basic';
}

export interface SkillCategory {
  title: string;
  items: Skill[];
}

export const skillCategories = {
  languages: {
    title: 'languages',
    items: [
      { name: 'C#', level: 'advanced' as const },
      { name: 'Java', level: 'intermediate' as const },
      { name: 'C++', level: 'basic' as const },
      { name: 'JavaScript/TypeScript', level: 'basic' as const },
      { name: 'SQL', level: 'basic' as const },
      { name: 'Kotlin', level: 'basic' as const },
      { name: 'Lua', level: 'basic' as const },
      { name: 'Dart', level: 'basic' as const },
    ],
  },
  frameworks: {
    title: 'frameworks',
    items: [
      { name: 'Unity (UI Toolkit, Input System, VContainer)', level: 'advanced' as const },
      { name: 'WPF / .NET', level: 'intermediate' as const },
      { name: 'Spring Boot (Security, JPA)', level: 'intermediate' as const },
      { name: 'Angular 21 (Signals)', level: 'intermediate' as const },
      { name: 'OpenGL / GLUT', level: 'basic' as const },
      { name: 'Godot', level: 'basic' as const },
      { name: 'Roblox Studio', level: 'basic' as const },
      { name: 'Flutter', level: 'basic' as const },
    ],
  },
  architecture: {
    title: 'architecture',
    items: [
      { name: 'MVVM', level: 'advanced' as const },
      { name: 'MVP', level: 'advanced' as const },
      { name: 'MVC', level: 'intermediate' as const },
      { name: 'SOLID', level: 'advanced' as const },
      { name: 'Clean Architecture', level: 'intermediate' as const },
      { name: 'Dependency Injection', level: 'advanced' as const },
      { name: 'State Machines', level: 'intermediate' as const },
      { name: 'Object Pooling', level: 'intermediate' as const },
    ],
  },
  soft: {
    title: 'soft',
    items: [
      { name: 'Liderazgo de comunidad', level: 'intermediate' as const },
      { name: 'Organización de eventos', level: 'intermediate' as const },
      { name: 'Trabajo en equipo', level: 'advanced' as const },
      { name: 'Trabajo remoto', level: 'advanced' as const },
      { name: 'Documentación técnica', level: 'intermediate' as const },
      { name: 'Inglés (B1-B2)', level: 'intermediate' as const },
      { name: 'Game jams / Desarrollo rápido', level: 'intermediate' as const },
    ],
  },
};

export const certifications = [
  {
    name: {
      es: 'Lima Game Jam 2026',
      en: 'Lima Game Jam 2026',
    },
    issuer: 'Lima Game Jam',
    date: '2026-02',
  },
  {
    name: {
      es: 'CLP: Advanced Programming in C',
      en: 'CLP: Advanced Programming in C',
    },
    issuer: 'Cisco NetAcad',
    date: '2024-11',
  },
  {
    name: {
      es: 'Conceptos básicos de redes',
      en: 'Networking Basics',
    },
    issuer: 'Cisco NetAcad',
    date: '2025-06',
  },
];
