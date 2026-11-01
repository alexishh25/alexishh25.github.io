# Portafolio de Alexis Herencia Huaracha (Dekszx)

Sitio web de portafolio personal con diseño pixel art, construido con Astro y Tailwind CSS.

## 🎮 Stack Tecnológico

- **Framework**: [Astro](https://astro.build/) 7.4.4
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) 4.3.3
- **Optimización de imágenes**: Sharp
- **Deploy**: GitHub Pages
- **Tipografías**: Press Start 2P (títulos pixel), Space Mono (cuerpo), VT323 (display)

## 🚀 Cómo correr el proyecto localmente

### Requisitos previos
- Node.js 22.23.4 o superior
- npm

### Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/alexishh25/alexishh25.github.io.git
cd alexishh25.github.io

# Instalar dependencias
npm install

# Optimizar imágenes (solo si agregaste nuevas imágenes en src/assets/)
node optimize-images.mjs

# Correr en desarrollo
npm run dev

# El sitio estará disponible en http://localhost:4321
```

### Construir para producción

```bash
# Construir el sitio
npm run build

# Previsualizar el build
npm run preview
```

## 📝 Cómo editar el contenido

### Editar proyectos

Los proyectos se encuentran en `src/data/projects.ts`. Cada proyecto tiene la siguiente estructura:

```typescript
{
  id: 'proyecto-id',
  title: 'Nombre del Proyecto',
  description: {
    es: 'Descripción en español',
    en: 'Description in English',
  },
  category: 'game' | 'software',
  tech: ['Tecnología 1', 'Tecnología 2'],
  image: '/nombre-imagen.webp', // o '/placeholder-project.png'
  demo: 'https://enlace-demo.com', // opcional
  repo: 'https://github.com/usuario/repo', // opcional
  teamSize: 3, // opcional
  date: '2026',
}
```

### Editar experiencia laboral

La experiencia se encuentra en `src/data/experience.ts`.

### Editar habilidades y certificaciones

Las habilidades están en `src/data/skills.ts`. Incluye:
- Lenguajes de programación
- Frameworks y engines
- Patrones de arquitectura
- Habilidades blandas
- Certificaciones

### Editar textos e idiomas

Los textos de la interfaz se encuentran en `src/i18n/index.ts`. El sitio soporta español (por defecto) e inglés.

## 🖼️ Cómo agregar o reemplazar imágenes

### Para proyectos

1. Agrega la imagen en formato PNG o JPG a `src/assets/`
2. Ejecuta `node optimize-images.mjs` para convertirla a WebP optimizado
3. Actualiza el campo `image` en `src/data/projects.ts` con el nombre del archivo WebP (ejemplo: `/mi-proyecto.webp`)

### Para reemplazar el logo de GDUPN

Actualmente hay un placeholder de emoji (🎮) en la sección de comunidad. Para reemplazarlo:

1. Agrega el logo en `public/` (ejemplo: `public/gdupn-logo.png`)
2. Edita `src/components/Community.astro`
3. Busca la sección con el emoji 🎮 y reemplázala con:

```html
<img 
  src="/gdupn-logo.png" 
  alt="Logo GDUPN" 
  class="w-24 h-24 mx-auto mb-4"
/>
```

## 📸 Placeholders pendientes

Los siguientes elementos tienen placeholders que debes reemplazar con contenido real:

1. **Imágenes de proyectos**: Todos los proyectos actualmente usan `/placeholder-project.png`. Agrega capturas o demos reales siguiendo las instrucciones de la sección "Cómo agregar o reemplazar imágenes".

2. **Demo del juego de Lima Game Jam 2026**: El enlace está configurado como `#`. Actualiza el campo `demo` en `src/data/projects.ts` con el enlace de itch.io cuando esté disponible.

3. **Logo de GDUPN**: Reemplaza el emoji 🎮 en `src/components/Community.astro` con el logo real (fondo amarillo #FDB833 con control de videojuego negro y texto GDUPN).

## 🌐 Deploy a GitHub Pages

### Configuración inicial (solo una vez)

1. Ve a **Settings** > **Pages** en tu repositorio de GitHub
2. En **Source**, selecciona **GitHub Actions**
3. Guarda los cambios

### Deploy automático

El sitio se despliega automáticamente cuando haces push a la rama `main`. El workflow de GitHub Actions:
1. Instala las dependencias
2. Optimiza las imágenes
3. Construye el sitio
4. Despliega a GitHub Pages

Tu sitio estará disponible en: `https://alexishh25.github.io/`

### Deploy manual

También puedes iniciar un deploy manualmente desde la pestaña **Actions** > **Deploy to GitHub Pages** > **Run workflow**.

## 🎨 Personalización de colores

Los colores principales están definidos en `src/styles/global.css`:

```css
--color-primary: #CF4023;  /* Rojo principal */
--color-secondary: #262626; /* Fondo oscuro */
--color-accent: #FDB833;    /* Amarillo de acento */
--color-light: #f5f5f5;     /* Texto claro */
--color-dark: #1a1a1a;      /* Fondo más oscuro */
```

## 📱 Responsive y Accesibilidad

El sitio está optimizado para:
- ✅ Diseño responsive (mobile-first)
- ✅ Navegación por teclado
- ✅ Contraste de colores WCAG AA
- ✅ Soporte para `prefers-reduced-motion`
- ✅ Meta tags para SEO y Open Graph
- ✅ Semántica HTML correcta

## 🐛 Troubleshooting

### El sitio no se ve en GitHub Pages
1. Verifica que GitHub Pages esté configurado en **Source: GitHub Actions**
2. Revisa el estado del workflow en la pestaña **Actions**
3. Asegúrate de que el campo `site` en `astro.config.mjs` sea correcto

### Las imágenes no se muestran
1. Verifica que las imágenes estén en la carpeta `public/`
2. Los nombres de archivo no deben tener espacios ni caracteres especiales
3. Usa rutas absolutas desde `/` (ejemplo: `/mi-imagen.webp`)

## 📧 Contacto

- **Email**: alexisherencia25@gmail.com
- **GitHub**: [@alexishh25](https://github.com/alexishh25)
- **LinkedIn**: [Alexis Herencia Huaracha](https://www.linkedin.com/in/alexis-javier-jesus-herencia-huaracha-570814261/)

---

Construido con ❤️ usando Astro y Tailwind CSS
