# Prompt para Antigravity/v0 - Portafolio Alex Silva

## Contexto del Proyecto
Crear un portafolio web one-page minimalista pero técnicamente sofisticado para Alex Silva, desarrollador full-stack y fundador de Manquilef. El sitio debe transmitir experticia técnica con un tono accesible y conversacional, generando confianza para freelance y networking.

---

## Especificaciones Técnicas

### Stack Requerido:
- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS + CSS Modules para animaciones custom
- **Animaciones:** Framer Motion para scroll animations y micro-interactions
- **UI Components:** Integrar componentes de reactbits.dev, Aceternity UI o Magic UI
- **Optimización:** Lazy loading de imágenes, code splitting, SEO optimizado

### Paleta de Colores:
- **Primario:** #593F62 (morado profundo)
- **Acento:** #76153C (borgoña)
- **Alternativo:** #494368 (gris-morado)
- **Background:** Degradados oscuros con sutileza (#0a0a0a a #1a1a1a)
- **Text:** Blanco/gris claro para contraste

### Tipografía:
- **Headings:** Inter o Satoshi (bold, moderno)
- **Body:** Inter o Geist (legible, profesional)
- **Mono:** JetBrains Mono para detalles técnicos

---

## Estructura de Secciones

### 1. Hero Section
**Objetivo:** Impacto inmediato con elegancia técnica

**Contenido:**
```
<h1>Alex Silva</h1>
<h2>Full-stack developer construyendo soluciones que importan</h2>
<p>De representar a Chile en robótica a crear Manquilef. Siempre explorando lo último en tech.</p>
<button>Ver mi trabajo ↓</button>
```

**Elementos visuales:**
- Fondo con grid animado sutil o partículas (Three.js/React Three Fiber opcional)
- Efecto de gradient blur que se mueve con el cursor
- Texto con efecto de typing o morphing text en el h2
- CTA button con efecto magnetic hover
- Smooth scroll al hacer click

**Referencias de diseño:**
- Hero de Linear.app (minimalismo + animación sutil)
- Partículas de GitHub Universe (si usamos 3D)

---

### 2. About Section
**Objetivo:** Humanizar y establecer credibilidad narrativa

**Contenido:**
```
<h2>El Camino</h2>
<p>A los 14 años representé a Chile en la World Robot Summit 2018. No fue suerte—era inevitable. Desde entonces no he parado: Linux, side projects con lo último en tech, y ahora levantando Manquilef para crear soluciones digitales que realmente resuelven problemas.</p>

<p>No soy el típico dev que se queda en su zona de confort. Si hay una tecnología nueva, ya la probé. Si hay un problema complejo, lo quiero resolver. Y si trabajamos juntos, vas a notar la diferencia.</p>
```

**Elementos visuales:**
- Timeline minimalista horizontal o vertical:
  - 2018: World Robot Summit
  - 2024: Certificaciones (Node.js, Python, Backend)
  - 2025: Fundación de Manquilef
- Stats counter animado al hacer scroll:
  - "15+ proyectos personales"
  - "5+ tecnologías dominadas"
  - "10+ años en tech"
- Foto profesional de Alex con border gradient sutil
- Text reveal animation (palabras aparecen al scroll)

**Referencias de diseño:**
- Timeline de Stripe (elegante, minimalista)
- Stats de Vercel Analytics

---

### 3. Expertise Section
**Objetivo:** Mostrar áreas de dominio sin listar tecnologías aburridas

**Contenido:**
Crear 3 cards interactivas:

**Card 1: Backend Development**
```
<h3>Backend Development</h3>
<p>Arquitecturas escalables que no colapsan</p>
<ul>
  <li>Node.js & Express/Fastify</li>
  <li>Python & Django/FastAPI</li>
  <li>APIs RESTful & GraphQL</li>
  <li>Bases de datos SQL/NoSQL</li>
</ul>
```

**Card 2: Frontend Crafting**
```
<h3>Frontend Crafting</h3>
<p>Interfaces que se sienten bien</p>
<ul>
  <li>React & Next.js</li>
  <li>TypeScript</li>
  <li>Tailwind & Design Systems</li>
  <li>Animaciones con Framer Motion</li>
</ul>
```

**Card 3: Innovation & Problem Solving**
```
<h3>Innovation & Problem Solving</h3>
<p>Si existe una tech nueva, ya la probé</p>
<ul>
  <li>De robótica a IA</li>
  <li>Siempre experimentando</li>
  <li>Linux power user</li>
  <li>Arquitectura de soluciones</li>
</ul>
```

**Elementos visuales:**
- Cards con glassmorphism effect (fondo translúcido)
- Hover effect con tilt 3D sutil (usar react-tilt o CSS transform)
- Gradient border que se ilumina al hover
- Iconos modernos para cada tecnología (Lucide React)
- Animación de fade-in escalonada al scroll

**Referencias de diseño:**
- Cards de Aceternity UI
- Bento boxes de Apple

---

### 4. Projects Section
**Objetivo:** Mostrar trabajo real con contexto de valor

**Contenido:**
Grid de 3-4 proyectos destacados. Estructura por proyecto:

**Proyecto Featured: Manquilef**
```
<h3>Manquilef</h3>
<p>Mi empresa de tecnología y soluciones digitales innovadoras</p>
<p class="problem">El problema: Las startups necesitan ejecutar ideas rápido sin sacrificar calidad</p>
<p class="solution">La solución: De la idea a producción con stack moderno y arquitecturas probadas</p>
<div class="tech-stack">
  [Next.js] [Node.js] [PostgreSQL] [Vercel]
</div>
<a href="#">Ver más →</a>
```

**Proyectos adicionales (placeholder si no tienes definidos):**
```
Proyecto 2: Sistema de gestión interno
Proyecto 3: Aplicación web con IA
Proyecto 4: API robusta para cliente

[Alex, aquí puedes reemplazar con tus proyectos reales]
```

**Elementos visuales:**
- Bento grid layout (diferente tamaño de cards)
- Screenshots o mockups con hover zoom sutil
- Tech stack como badges pequeños con iconos
- Gradient overlay en imágenes
- Featured project ocupa más espacio visual
- Hover effect: card levita y muestra más info

**Referencias de diseño:**
- Projects grid de Rauno Freiberg
- Bento grid de Magic UI

---

### 5. Credentials Section
**Objetivo:** Validar experticia con certificaciones

**Contenido:**
```
<h2>Respaldo Técnico</h2>
<p>Certificaciones que validan lo que ya hacía por pasión</p>
```

**Certificados a mostrar:**
- Desarrollo Backend con Node.js (Platzi, Feb 2026)
- Matemáticas para Programación (Platzi, Feb 2026)
- Programación con Python (Platzi, Feb 2026)
- Introducción al Desarrollo Backend (Platzi, Feb 2026)
- Emprendimiento Social (Fundación Telefónica Movistar Chile, Ene 2024)

**Elementos visuales:**
- Cards horizontales pequeñas con:
  - Logo de la institución (Platzi, LinkedIn)
  - Nombre del certificado
  - Fecha
  - Badge de verificación sutil
- Animación de fade-in al scroll
- Link discreto: "Ver todas en LinkedIn →"
- Layout en grid 2 columnas en desktop, stack en mobile

**Referencias de diseño:**
- Credentials de LinkedIn pero más visual

---

### 6. Contact/CTA Section
**Objetivo:** Generar acción inmediata para networking/freelance

**Contenido:**
```
<h2>¿Hablamos?</h2>
<p>¿Necesitas un dev que entienda tu visión y la ejecute? Let's work together.</p>

[Formulario simple]
Nombre:
Email:
Mensaje (opcional):
[Button: Enviar →]

<div class="contact-links">
  <a href="mailto:alex@example.com">Email</a>
  <a href="linkedin">LinkedIn</a>
  <a href="github">GitHub</a>
  <a href="calendly">Agendar call</a>
</div>
```

**Elementos visuales:**
- Background con gradient animado sutil
- Form con inputs minimalistas (border gradient al focus)
- Buttons con magnetic effect
- Links de contacto como chips/badges
- Animación de "paper plane" al enviar (opcional)

**Funcionalidad:**
- Form submission usando Web3Forms, Formspree o similar
- Validación client-side
- Toast notification al enviar

**Referencias de diseño:**
- Contact section de Linear

---

### 7. Footer
**Objetivo:** Cierre limpio con detalles técnicos

**Contenido:**
```
<footer>
  <p>© 2025 Alex Silva • Hecho con React + Framer Motion + ☕</p>
  <div class="social-links">
    <a href="#">GitHub</a>
    <a href="#">LinkedIn</a>
    <a href="#">Email</a>
  </div>
</footer>
```

**Elementos visuales:**
- Minimalista, texto pequeño
- Links con underline animation al hover
- Emoji de café con micro-animación al hover (steam rising)

---

## Efectos y Animaciones Específicas

### Micro-interactions requeridas:
1. **Smooth scroll** entre secciones (lenis o framer-motion)
2. **Cursor custom** con gradient glow que sigue el mouse (opcional pero wow)
3. **Magnetic buttons**: CTAs se mueven sutilmente hacia el cursor
4. **Text reveal**: Palabras/letras aparecen al scroll con stagger
5. **Parallax sutil**: Hero background se mueve más lento que el contenido
6. **Card tilt**: Projects y expertise cards con efecto 3D al hover
7. **Gradient animation**: Backgrounds y borders con gradientes animados
8. **Fade in/up**: Elementos aparecen con fade al hacer scroll (Intersection Observer)
9. **Number counter**: Stats se animan de 0 al número final
10. **Hover states fluidos**: Todos los elementos interactivos con transiciones suaves

### Performance:
- Lazy load imágenes
- Usar next/image para optimización automática
- Framer Motion con `layoutId` para shared element transitions
- Preload fonts críticas
- Code splitting por sección
- Lighthouse score objetivo: 95+

---

## Responsive Design

### Breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Wide: 1440px+

### Consideraciones mobile:
- Hero height ajustado (no 100vh completo)
- Grid de projects en 1 columna
- Timeline vertical
- Stats counter en 2 columnas
- Touch-friendly buttons (min 44px)
- Reducir animaciones complejas en mobile

---

## SEO y Metadata

```typescript
// Metadata para Next.js
export const metadata = {
  title: 'Alex Silva - Full-stack Developer & Founder',
  description: 'Desarrollador full-stack chileno, fundador de Manquilef. De la World Robot Summit a crear soluciones digitales innovadoras.',
  keywords: ['full-stack developer', 'Node.js', 'React', 'Next.js', 'Python', 'Chile', 'Manquilef'],
  authors: [{ name: 'Alex Silva' }],
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    title: 'Alex Silva - Full-stack Developer',
    description: 'Desarrollador full-stack y fundador de Manquilef',
    siteName: 'Alex Silva Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Silva - Full-stack Developer',
    description: 'Desarrollador full-stack y fundador de Manquilef',
  },
}
```

---

## Estructura de Archivos Sugerida

```
/app
  /page.tsx (main portfolio page)
  /layout.tsx (metadata, fonts)
  /globals.css
/components
  /sections
    /Hero.tsx
    /About.tsx
    /Expertise.tsx
    /Projects.tsx
    /Credentials.tsx
    /Contact.tsx
    /Footer.tsx
  /ui
    /Button.tsx
    /Card.tsx
    /Input.tsx
    /Badge.tsx
/lib
  /utils.ts (cn, etc)
  /animations.ts (framer motion variants)
/public
  /images
  /icons
```

---

## Referencias de Inspiración

**Sitios a estudiar para estilo:**
1. https://linear.app - Minimalismo + animaciones sutiles
2. https://rauno.me - Grid de proyectos + micro-interactions
3. https://vercel.com - Tipografía + gradientes
4. https://ui.aceternity.com - Componentes con efectos wow
5. https://magicui.design - Animaciones suaves

**Componentes específicos a replicar:**
- Hero con grid animado: Linear
- Project cards con tilt: Aceternity UI
- Timeline: Stripe
- Gradient effects: Vercel
- Text animations: Rauno Freiberg

---

## Notas Finales

**Tonalidad del copy:**
- Conversacional pero técnico
- Confiado pero no arrogante
- "Construyo cosas que funcionan" > "Soy experto senior"
- Usar "yo" y "tú" para cercanía
- Evitar jerga innecesaria

**Testing antes de deploy:**
- Cross-browser (Chrome, Firefox, Safari)
- Mobile real devices
- Lighthouse audit
- Accessibility (keyboard navigation, screen readers)
- Forms funcionando
- Links externos (GitHub, LinkedIn) correctos

---

## Prompt Final para v0/Antigravity

"Crea un portafolio web one-page para Alex Silva, desarrollador full-stack y fundador de Manquilef. El sitio debe ser minimalista pero técnicamente impresionante, usando Next.js 14, Tailwind, y Framer Motion. Paleta oscura con acentos en #593F62 y #76153C.

Incluye: Hero con grid animado y CTA, About con timeline y stats counter, Expertise con 3 cards (Backend, Frontend, Innovation), Projects en bento grid destacando Manquilef, Credentials con certificaciones de LinkedIn, Contact con form y links, Footer minimalista.

Efectos clave: smooth scroll, magnetic buttons, text reveal al scroll, card tilt 3D, gradientes animados, parallax sutil en hero. Optimiza para mobile y performance (Lighthouse 95+).

Tono: Conversacional pero técnico, confiado pero accesible. Usa componentes de reactbits.dev o Aceternity UI para efectos wow sutiles. Inspiración: Linear.app + Rauno.me.

Referencias completas y especificaciones técnicas detalladas en el archivo adjunto."

---

**Archivo creado para Alex Silva**
**Versión: 1.0**
**Fecha: Febrero 2025**
