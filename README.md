# 🚀 Pedagia - Servicios Educativos IA

<div align="center">

![Pedagia Banner](./docs/banner.png)

**Sitio web de marketing para servicios educativos con IA dirigidos a docentes colombianos**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/License-Privado-red?style=for-the-badge)](./LICENSE)

*English version available at [./README.en.md](./README.en.md)*

</div>

---

## 📋 Tabla de Contenidos

1. [Acerca del Proyecto](#acerca-del-proyecto)
2. [Características](#características)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Tecnologías Utilizadas](#tecnologías-utilizadas)
5. [Guía de Instalación](#guía-de-instalación)
6. [Comandos Disponibles](#comandos-disponibles)
7. [Estructura de Páginas](#estructura-de-páginas)
8. [SEO y Metadata](#seo-y-metadata)
9. [Accesibilidad](#accesibilidad)
10. [Configuración de Deployment](#configuración-de-deployment)
11. [Personalización](#personalización)
12. [Contribuir](#contribuir)
13. [Licencia](#licencia)
14. [Contacto](#contacto)

---

## 📖 Acerca del Proyecto

### ¿Qué es Pedagia?

**Pedagia** es un negocio de servicios educativos con Inteligencia Artificial, especializado en ayudar a docentes colombianos a automatizar la creación de contenido pedagógico.

### El Problema que Resuelve

Los docentes en Colombia enfrentan daily desafíos:

```
❌ REALIDAD ACTUAL:
├── Trabajan 2-3 turnos (escuela + particulares + online)
├── Ganan $2.5M - $4.5M/mes (insuficiente)
├── Dedican 15-20 horas SEMANALES creando contenidos (sin pago extra)
└── Pagan $30k-$150k a terceros por tareas (sin garantía de calidad)

✅ SOLUCIÓN PEDAGIA:
├── IA especializada en pedagogía colombiana
├── Documentos alineados con DBA y normativa MEN
├── 50% más barato que servicios informales
└── Recuperan 15-20 horas/mes
```

### Servicios Ofrecidos

| # | Servicio | Precio (COP) | Plazo |
|---|----------|--------------|-------|
| 1 | Plan de Área / Asignatura | $80.000 - $150.000 | 48-72h |
| 2 | Contenidos Programáticos | $60.000 - $100.000 | 24-48h |
| 3 | Guía de Clase / Taller | $30.000 - $55.000 | 12-24h |
| 4 | Logros e Indicadores | $25.000 - $45.000 | 12-24h |
| 5 | Rúbrica de Evaluación | $20.000 - $35.000 | 12h |
| 6 | Instrumento de Evaluación | $30.000 - $50.000 | 24h |
| 7 | Proyecto de Aula | $120.000 - $200.000 | 3-5 días |
| 8 | Secuencia Didáctica | $45.000 - $80.000 | 48h |
| 9 | Informe de Período (x estudiante) | $5.000 - $8.000 | 12h |
| 10 | Plan de Mejoramiento | $15.000 - $25.000 | 24h |

### Flujo del Servicio

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           FLUJO DE PEDAGIA                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  DOCENTE                      SISTEMA IA                     ENTREGABLE   │
│  ──────                       ──────────                     ──────────    │
│                                                                             │
│     │                                                                          │
│     ▼                                                                          │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐ │
│  │ WhatsApp    │────▶│ Diagnóstico │────▶│ Mini-contrato│────▶│ Confirmar   │ │
│  │ Contacto    │     │ IA + preguntas     │ (precio+plazo)  │ Pago        │ │
│  └─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘ │
│                                                                     │        │
│                                                                     ▼        │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │                        7 AGENTES IA PROCESAN                           │ │
│  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌──────┐ ┌──────┐ ┌──────┐ │ │
│  │  │Curricu-│ │Evaluat-│ │Didácti-│ │Norma- │ │ QA   │ │Formato│ │Docs  │ │ │
│  │  │lar     │ │ivo     │ │co      │ │tivo   │ │      │ │      │ │Listos│ │ │
│  │  └────────┘ └────────┘ └────────┘ └────────┘ └──────┘ └──────┘ └──────┘ │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                     │        │
│                                                                     ▼        │
│                                                                  ┌─────────┐ │
│                                                                  │Google   │ │
│                                                                  │Drive    │ │
│                                                                  └─────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## ✨ Características

### ✅ Sitio Web (Marketing)

- **6 páginas completas**: Home, Servicios, Cómo Funciona, Casos de Éxito, Legal, Contacto
- **Diseño responsive** optimizado para móvil y escritorio
- **Botones de WhatsApp** en todas las páginas para conversión directa
- **Catálogo de servicios** con precios claros y tiempos de entrega

### ✅ SEO Optimizado

- Metadata dinámica para cada página
- Open Graph tags para redes sociales
- sitemap.xml automáticamente generado
- robots.txt configurado
- URLs amigables y semánticas
- Estructura HTML semántica

### ♿ Accesibilidad (WCAG)

- Skip-link para navegación por teclado
- aria-labels en todos los botones interactivos
- Labels asociados correctamente en formularios
- Focus states visibles
- Contraste de colores verificado
- Navegación por teclado completa

### 🎨 Diseño Moderno

- Tailwind CSS v4 con sistema de diseño personalizado
- Componentes reutilizables
- Animaciones suaves y transiciones
- Tipografía optimizada con Google Fonts
- Sistema de colores profesional

---

## 📁 Estructura del Proyecto

```
pedagia-web/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Layout principal con metadata global
│   ├── page.tsx                  # Página Home (/)
│   ├── globals.css               # Estilos globales y variables
│   │
│   ├── servicios/                # Página de servicios (/servicios)
│   │   └── page.tsx
│   │
│   ├── como-funciona/            # Cómo funciona (/como-funciona)
│   │   └── page.tsx
│   │
│   ├── casos-exito/              # Testimonios (/casos-exito)
│   │   └── page.tsx
│   │
│   ├── legal/                    # Legal (/legal)
│   │   ├── layout.tsx            # Layout con metadata
│   │   └── page.tsx
│   │
│   └── contacto/                 # Contacto (/contacto)
│       └── page.tsx
│
├── components/                   # Componentes reutilizables
│   ├── Header.tsx               # Navegación principal
│   └── Footer.tsx               # Pie de página
│
├── public/                      # Archivos estáticos
│   ├── sitemap.xml             # Mapa del sitio para SEO
│   ├── robots.txt              # Directrices para crawlers
│   ├── favicon.ico              # Icono del sitio
│   └── *.svg                   # Assets varios
│
├── docs/                        # Documentación del proyecto
│   └── banner.png              # Banner para README
│
├── .gitignore                   # Archivos ignorados por Git
├── package.json                 # Dependencias del proyecto
├── tsconfig.json                # Configuración de TypeScript
├── next.config.ts              # Configuración de Next.js
├── postcss.config.mjs          # Configuración de PostCSS
├── eslint.config.mjs            # Configuración de ESLint
└── README.md                   # Este archivo
```

---

## 🛠️ Tecnologías Utilizadas

### Core

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Next.js | 16.2.4 | Framework React con App Router |
| React | 19.2.4 | Biblioteca de UI |
| TypeScript | 5.x | Tipado estático |

### Estilos

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Tailwind CSS | 4.x | Framework de estilos utility-first |
| PostCSS | - | Procesador de CSS |

### Herramientas de Desarrollo

| Tecnología | Propósito |
|------------|-----------|
| ESLint | Linting y calidad de código |
| Vercel | Hosting y deployment |

### Servicios Externos

| Servicio | Propósito |
|----------|-----------|
| Vercel | Deployment automático desde GitHub |
| WhatsApp | Canal principal de comunicación |
| Google Drive | Entrega de documentos |

---

## 📦 Guía de Instalación

### Prerrequisitos

- Node.js 18.x o superior
- npm (incluido con Node.js)
- Git

### Paso 1: Clonar el repositorio

```bash
# Clonar el repositorio
git clone https://github.com/franciscollinas/PEDAGIA.git

# Entrar al directorio
cd PEDAGIA/pedagia-web
```

### Paso 2: Instalar dependencias

```bash
# Instalar todas las dependencias
npm install

# O si prefieres usar yarn
yarn install

# O pnpm
pnpm install
```

### Paso 3: Configurar variables de entorno (opcional)

Si necesitas variables de entorno, crea un archivo `.env.local`:

```bash
# Copiar el ejemplo
cp .env.example .env.local
```

### Paso 4: Iniciar el servidor de desarrollo

```bash
# Iniciar servidor en modo desarrollo
npm run dev

# La aplicación estará disponible en:
# http://localhost:3000
```

### Paso 5: Construir para producción

```bash
# Construir la aplicación
npm run build

# Iniciar en producción (después de build)
npm run start
```

---

## 📜 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con hot reload |
| `npm run build` | Construye la aplicación para producción |
| `npm run start` | Inicia el servidor de producción |
| `npm run lint` | Ejecuta ESLint para verificar el código |
| `npm run lint:fix` | Ejecuta ESLint y auto-corrige problemas |

---

## 📄 Estructura de Páginas

### 1. Home (`/`)

```
┌─────────────────────────────────────────────────────┐
│  HERO SECTION                                       │
│  "¿Cansado de trabajar 2 o 3 turnos solo para       │
│  armar contenidos?"                                 │
│  [💬 Hablar por WhatsApp] [Ver servicios]          │
├─────────────────────────────────────────────────────┤
│  PROBLEMA vs SOLUCIÓN                               │
│  ❌ 2-3 turnos | ✅ IA especializada                │
│  💰 $2.5M-4.5M/mes | ✅ 50% más barato              │
├─────────────────────────────────────────────────────┤
│  CÓMO FUNCIONA (5 pasos)                            │
│  1️⃣ WhatsApp → 2️⃣ Mini-contrato → 3️⃣ Pago →       │
│  4️⃣ IA trabaja → 5️⃣ Drive                          │
├─────────────────────────────────────────────────────┤
│  SERVICIOS (10 cards)                               │
│  Plan Área | Guía Clase | Logros | Rúbrica...      │
├─────────────────────────────────────────────────────┤
│  CASOS DE ÉXITO                                     │
│  María González | Carlos López | Andrea Martínez   │
├─────────────────────────────────────────────────────┤
│  FAQ (acordeón)                                     │
├─────────────────────────────────────────────────────┤
│  CTA FINAL                                          │
│  [💬 Hablar por WhatsApp]                           │
└─────────────────────────────────────────────────────┘
```

### 2. Servicios (`/servicios`)

```
┌─────────────────────────────────────────────────────┐
│  Título: "Servicios Educativos IA"                  │
├─────────────────────────────────────────────────────┤
│  PLANES CURRICULARES                                │
│  ┌──────────────┐ ┌──────────────┐                │
│  │ Plan de Área │ │ Contenidos   │                │
│  │ $80k-150k    │ │ $60k-100k    │                │
│  │ [Solicitar]  │ │ [Solicitar]  │                │
│  └──────────────┘ └──────────────┘                │
├─────────────────────────────────────────────────────┤
│  GUIAS DIDÁCTICAS                                   │
│  ┌──────────────┐ ┌──────────────┐                │
│  │ Guía de Clase│ │ Secuencia    │                │
│  │ $30k-55k     │ │ $45k-80k    │                │
│  └──────────────┘ └──────────────┘                │
├─────────────────────────────────────────────────────┤
│  ... (más categorías)                               │
├─────────────────────────────────────────────────────┤
│  DESCUENTOS                                         │
│  +30% urgencia | -20% paquetes 5+ | -15% combo    │
└─────────────────────────────────────────────────────┘
```

### 3. Cómo Funciona (`/como-funciona`)

```
┌─────────────────────────────────────────────────────┐
│  Título: "¿Cómo Funciona?"                          │
├─────────────────────────────────────────────────────┤
│  Paso 1: Escribe al WhatsApp                        │
│  [Mockup de chat]                                  │
│  "Necesito Plan de Área..."                         │
│  "Perfecto, ¿tu institución es oficial o privada?"│
├─────────────────────────────────────────────────────┤
│  Paso 2: Mini-contrato                              │
│  ┌─────────────────────────────────────────────┐   │
│  │ ORDEN #2024001                              │   │
│  │ Servicio: Plan Área 8°                      │   │
│  │ Precio: $120.000 COP                        │   │
│  │ Plazo: 48h                                  │   │
│  │ ¿Aceptas? [SÍ] [NO]                         │   │
│  └─────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────┤
│  ... (pasos 3, 4, 5)                               │
└─────────────────────────────────────────────────────┘
```

### 4. Casos de Éxito (`/casos-exito`)

```
┌─────────────────────────────────────────────────────┐
│  STATS                                             │
│  25+ Docentes | 98% Satisfacción | 15-20h ahorro   │
├─────────────────────────────────────────────────────┤
│  MARÍA GONZÁLEZ                                    │
│  ⭐⭐⭐⭐⭐                                          │
│  "Los documentos son exactamente como si yo      │
│   los hubiera escrito, pero sin perder 18h..."    │
│  Antes: 18h/mes, $400k/mes                         │
│  Después: 3h/mes, $280k/mes                       │
├─────────────────────────────────────────────────────┤
│  CARLOS LÓPEZ                                      │
│  ⭐⭐⭐⭐⭐                                          │
│  "Es como tener un asistente pedagógico 24/7"     │
│  Guía en 24h por $40k (vs $90k antes)             │
├─────────────────────────────────────────────────────┤
│  ANDREA MARTÍNEZ                                   │
│  ⭐⭐⭐⭐⭐                                          │
│  "30% menos tiempo en administración"            │
└─────────────────────────────────────────────────────┘
```

### 5. Legal (`/legal`)

```
┌─────────────────────────────────────────────────────┐
│  TABS                                              │
│  [Términos] [Privacidad] [Garantías] [Preguntas]   │
├─────────────────────────────────────────────────────┤
│  CONTENIDO (según tab seleccionada)                │
│  - Qué es el servicio                              │
│  - Responsabilidades                               │
│  - Resolución de conflictos                        │
│  - Política de datos (Ley 1581/2012)              │
│  - Garantías del contenido                         │
│  - Preguntas frecuentes jurídicas                  │
└─────────────────────────────────────────────────────┘
```

### 6. Contacto (`/contacto`)

```
┌─────────────────────────────────────────────────────┐
│  FORMULARIO + DATOS DE CONTACTO                    │
│  ┌────────────────────┐  ┌────────────────────────┐ │
│  │ FORMULARIO        │  │ CONTACTO DIRECTO      │ │
│  │ [Nombre]          │  │ 📱 WhatsApp: +57 XXX  │ │
│  │ [Email]           │  │ 📧 Email: hola@...     │ │
│  │ [Teléfono]        │  │ 📞 Teléfono: +57 XXX  │ │
│  │ [Mensaje]         │  │ 🕐 Lun-Vie 8am-6pm    │ │
│  │ [Enviar]          │  │                        │ │
│  └────────────────────┘  └────────────────────────┘ │
│                                                     │
│  [💬 Hablar por WhatsApp]                          │
└─────────────────────────────────────────────────────┘
```

---

## 🔍 SEO y Metadata

### Metadata Global

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://pedagia.co"),
  title: {
    default: "Pedagia - Servicios Educativos IA para Docentes Colombianos",
    template: "%s | Pedagia",
  },
  description: "IA especializada en pedagogía colombiana...",
  keywords: ["servicios educativos", "IA docente", "planes de área", ...],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://pedagia.co",
    siteName: "Pedagia",
    title: "Pedagia - Servicios Educativos IA",
    description: "IA pedagógica para docentes...",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedagia - Servicios Educativos IA",
    description: "IA pedagógica para docentes...",
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### Sitemap

El archivo `public/sitemap.xml` incluye todas las páginas del sitio:

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://pedagia.co/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- ... más URLs -->
</urlset>
```

---

## ♿ Accesibilidad

### Características Implementadas

| Característica | Descripción |
|---------------|-------------|
| **Skip Link** | Permite saltar al contenido principal |
| **aria-labels** | Labels descriptivos en botones |
| **Labels asociados** | `htmlFor` asociado con `id` en inputs |
| **Focus visible** | Outline claramente visible en focus |
| **Navegación por teclado** | Todos los elementos son accesibles |
| **Contraste** | Colores con ratio mínimo 4.5:1 |

### Estructura HTML Semántica

```html
<!-- Skip Link -->
<a href="#main-content" class="sr-only focus:not-sr-only">
  Saltar al contenido principal
</a>

<!-- Header con navegación -->
<header>
  <nav aria-label="Navegación principal">
    <!-- Links -->
  </nav>
</header>

<!-- Main content -->
<main id="main-content">
  <!-- Contenido -->
</main>

<!-- Footer -->
<footer>
  <!-- Links y contenido -->
</footer>
```

---

## 🚀 Configuración de Deployment

### Deploy con Vercel (Recomendado)

```bash
# Opción 1: CLI de Vercel
npm i -g vercel
vercel

# Opción 2: Desde GitHub
# 1. Ir a https://vercel.com
# 2. Importar repositorio de GitHub
# 3. Vercel automáticamente detecta Next.js
# 4. Click en "Deploy"
```

### Configuración de Dominio

1. Ve a **Settings → Domains** en Vercel
2. Agrega tu dominio (ej: pedagia.co)
3. Actualiza los DNS en tu registrador:

| Tipo | Nombre | Valor |
|------|--------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cdn.vercel-dns.com |

### Variables de Entorno

Si necesitas variables de entorno, agrégalas en **Settings → Environment Variables** en Vercel.

---

## 🎨 Personalización

### Colores

Los colores están definidos en `app/globals.css`:

```css
:root {
  --primary: #059669;      /* Verde principal */
  --primary-dark: #047857;
  --secondary: #0891b2;    /* Azul secundario */
  --dark: #1e293b;        /* Gris oscuro */
  --light: #f8fafc;       /* Fondo claro */
  --gray: #64748b;        /* Gris medio */
  --accent: #f59e0b;      /* Amarillo acento */
}
```

### Cambiar el Número de WhatsApp

Buscar y reemplazar en todos los archivos:

```bash
# Buscar el número actual
grep -r "573000000000" --include="*.tsx" --include="*.ts"
```

Reemplazar con el número real en formato `57XXXXXXXXX`.

### Agregar Más Servicios

1. Editar `app/servicios/page.tsx`
2. Agregar el nuevo servicio al array correspondiente
3. Actualizar precios y tiempos en `AGENTS.md` y `AGENTS.json`

---

## 🤝 Contribuir

### Flujo de Trabajo

1. **Fork** el repositorio
2. Crear una **branch** para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. **Commit** tus cambios (`git commit -m 'Agrega nueva característica'`)
4. **Push** a la branch (`git push origin feature/nueva-caracteristica`)
5. Crear un **Pull Request**

### Normas de Código

- Usar ESLint para verificar
- Mantener el código limpio y documentado
- Seguir las convenciones de Next.js

---

## 📝 Licencia

**Copyright © 2024 Pedagia**. Todos los derechos reservados.

Este proyecto es propiedad de Pedagia. El código fuente está disponible solo para fines de referencia.

---

## 📞 Contacto

| Canal | Contacto |
|-------|----------|
| **WhatsApp** | +57 300 000 0000 |
| **Email** | hola@pedagia.co |
| **Sitio Web** | https://pedagia.co |

---

<div align="center">

**¡Gracias por usar Pedagia! 🚀**

*Creado con ❤️ para los docentes colombianos*

</div>