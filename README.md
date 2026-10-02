# AENM

Este proyecto sera una pagina web de amor para mi novia.

La idea es construir una experiencia romantica y personal usando un stack simple de sitio estatico, para mantener compatibilidad directa con GitHub Pages.

## Stack actual

- `Vite` como bundler y entorno de desarrollo
- `Tailwind CSS` para estilos
- `GSAP` para animaciones
- `src/` para la aplicacion
- `public/media/` para imagenes, logo y futuros archivos de musica
- `dist/` como salida lista para GitHub Pages

## Objetivo del proyecto

Crear una web especial, visualmente bonita y emotiva, centrada en una experiencia personalizada para mi novia.

## Despliegue

El sitio sera alojado en GitHub Pages.

Por esa razon, mantenemos un stack moderno pero 100% compatible con hosting estatico:

- Vite
- Tailwind CSS
- GSAP
- HTML generado estaticamente

## Paleta de colores

La identidad visual de la pagina se basara en estos tonos:

- `Midnight Blue` - `#1C2E4A`
- `Dusty Blue` - `#52677D`
- `Ivory` - `#BDC4D4`
- `Deep Navy` - `#0F1A2B`
- `Buttercream` - `#D1CFC9`

Estos colores serviran como base para el navbar, fondos, textos destacados y secciones romanticas del sitio.

## Estructura actual

```text
AENM/
|-- index.html
|-- README.md
|-- package.json
|-- vite.config.js
|-- src/
|   |-- main.js
|   `-- style.css
|-- public/
|   `-- media/
|       |-- IMAGES/
|       |-- LOGO/
|       `-- MUSIC/
`-- ASSETS/
    |-- IMAGES/
    `-- LOGO/
```

## Nota de trabajo

Migramos la base del proyecto a `Vite + Tailwind + GSAP` para poder construir una experiencia romantica mas moderna, animada y pulida, sin perder compatibilidad con GitHub Pages.

## Scripts utiles

- `npm run dev` para desarrollo local
- `npm run build` para generar `dist/`
- `npm run preview` para revisar el build final

## GitHub Pages

La configuracion actual usa:

- `base: "/UN-ESPACIO-PARA-NOSOTROS/"` en `vite.config.js`

Si el nombre del repositorio cambia, ese valor tambien debe actualizarse para que las rutas funcionen correctamente en GitHub Pages.


## Publicacion automatica en GitHub Pages

El workflow `.github/workflows/deploy-pages.yml` instala las dependencias, compila el sitio y publica `dist/` cuando se suben cambios a `main`. Tambien permite iniciar un despliegue desde Actions mediante Run workflow.

En el repositorio de GitHub, configurar Settings > Pages > Source como GitHub Actions. El workflow obtiene la ruta base de GitHub Pages para que las imagenes y los archivos CSS y JavaScript funcionen con el nombre real del repositorio.
