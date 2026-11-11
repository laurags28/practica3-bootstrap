# PokéLegends · Práctica 3 de Diseño de Interfaces Web

**PokéLegends** es una maqueta de una página web dedicada a los Pokémon legendarios de las nueve generaciones. El proyecto se ha desarrollado para la **Práctica 3 de Diseño de Interfaces Web**, con el objetivo de aplicar Bootstrap 5, especialmente su sistema de cuadrícula (*Grid*), sus componentes interactivos y el diseño responsive.

## Web publicada

**[Ver PokéLegends en GitHub Pages](https://laurags28.github.io/practica3-bootstrap/)**

## Tecnologías utilizadas

- **HTML5:** estructura y contenido de la página.
- **Bootstrap 5:** distribución en columnas, componentes y utilidades de diseño.
- **Bootstrap Icons:** iconos de navegación y redes sociales.
- **CSS3:** personalización visual, efectos y adaptación a pantallas pequeñas.
- **JavaScript:** animaciones de aparición de imágenes mediante `IntersectionObserver`.

Los estilos y scripts de Bootstrap se incorporan mediante CDN. Las ilustraciones de Pokémon utilizadas en la página se cargan desde el repositorio de sprites de PokéAPI.

## Diseño y funcionalidades

La web incluye una cabecera con `navbar` organizada en tres columnas (menú, logotipo y herramientas), una portada con `card-img-overlay` y seis filas de contenido en damero que alternan tarjetas informativas e imágenes.

Para adaptar la página a diferentes dispositivos se utilizan las clases del Grid de Bootstrap, especialmente `container`, `row`, `col-12` y `col-md-6`. De esta manera, las filas muestran dos columnas desde el tamaño `md` (768 px) y una sola en pantallas más pequeñas.

También se han incorporado los siguientes componentes y técnicas:

- **`collapse`:** permite desplegar información al pulsar las imágenes de la galería.
- **`accordion`:** muestra los enlaces a redes sociales de forma desplegable en la versión móvil.
- **`col-12 col-md-3`:** organiza la galería en cuatro columnas en escritorio y una en móvil.
- **`loading="lazy"`:** retrasa la carga de las imágenes que todavía no están próximas a la zona visible.
- **`IntersectionObserver`:** activa una animación suave cuando las imágenes entran en pantalla durante el desplazamiento.
- **Media queries:** ajustan algunos estilos de la portada en dispositivos pequeños.

## Estructura del proyecto

```text
practica3-bootstrap/
├── index.html       # Estructura HTML y componentes Bootstrap
├── styles.css       # Estilos personalizados y diseño responsive
├── script.js        # Animaciones de aparición al hacer scroll
└── README.md        # Documentación del proyecto
```

## Cómo ejecutar la página

1. Descarga o clona el repositorio.
2. Abre la carpeta del proyecto en Visual Studio Code.
3. Abre `index.html` en el navegador o utiliza la extensión **Live Server**.

Se necesita conexión a Internet para cargar Bootstrap y las imágenes enlazadas desde servicios externos. No es necesario instalar dependencias ni configurar un servidor de backend.

## Publicación

El proyecto está alojado en **GitHub Pages**, utilizando la rama `main` y la carpeta raíz (`/`) del repositorio. Los cambios se gestionan mediante commits de Git.

## Objetivo de la práctica

El propósito principal es demostrar el uso del Grid y los componentes de Bootstrap en una maqueta responsive. La temática de Pokémon sirve como contenido visual para practicar la distribución, la adaptación a distintas resoluciones y las interacciones de la interfaz.
