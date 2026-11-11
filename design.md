# Diseño de la interfaz — PokéLegends

## 1. Idea y objetivo

PokéLegends es una maqueta web dedicada a los Pokémon legendarios de las nueve generaciones. He elegido esta temática porque permite combinar imágenes llamativas con pequeñas descripciones y organizar la información en apartados diferenciados. El objetivo principal de la práctica no es construir una Pokédex completa, sino utilizar **Bootstrap 5** para crear una interfaz adaptable a distintos tamaños de pantalla y probar varios de sus componentes.

## 2. Estructura de la página

La web se organiza en una sola página con enlaces internos para desplazarse entre secciones. La cabecera utiliza una **navbar** distribuida en tres columnas: botón de menú, nombre de la página y accesos a generaciones y galería. A continuación aparece una portada con una imagen de Mewtwo y texto superpuesto mediante una tarjeta de tipo `card-img-overlay`.

El contenido principal presenta seis filas que agrupan las nueve generaciones. Cada fila combina una tarjeta informativa con una imagen y alterna su posición para formar un **diseño en damero**. Después se incluye una franja de ancho completo y una galería de cuatro Pokémon que permite desplegar información adicional al pulsar sobre cada imagen. El pie de página reúne los enlaces a redes sociales.

## 3. Distribución responsive con Bootstrap

El diseño se basa en el sistema **Grid de 12 columnas** de Bootstrap. Se utilizan `container` para centrar el contenido, `row` para crear filas y `col-12 col-md-6` para organizar las secciones de generaciones. Así, en pantallas pequeñas cada bloque ocupa todo el ancho y, a partir del punto de ruptura `md` (768 px), se muestran dos columnas.

La galería emplea `col-12 col-md-3`, de manera que sus cuatro elementos aparecen uno debajo de otro en móvil y en una fila de cuatro columnas desde `md`. También se utilizan clases de Bootstrap para márgenes, espaciados, alineación, colores y sombras, evitando escribir CSS propio para tareas que el framework ya resuelve.

He comprobado el resultado en vistas de móvil (393 px), tablet (768 px) y ordenador. En las tres se mantiene la legibilidad y no se aprecia desbordamiento horizontal en las capturas revisadas.

## 4. Estilo visual

La estética combina una cabecera y un pie de página oscuros con un fondo general claro. Las tarjetas informativas son blancas, con esquinas redondeadas y sombras suaves, mientras que las imágenes se colocan sobre fondos azulados muy claros. Los títulos destacan por su tamaño y peso, y las etiquetas de generación utilizan colores de Bootstrap para facilitar la separación visual de los apartados.

La portada utiliza un fondo oscuro con degradado y un botón amarillo como llamada a la acción. En móvil se reduce la opacidad de la ilustración de Mewtwo y se oscurece la superposición para que el texto sea más fácil de leer. Los ajustes visuales personalizados se mantienen en `styles.css`, separado del contenido HTML.

## 5. Componentes e interactividad

La **navbar** contiene un menú desplegable que facilita la navegación por la página. En la galería se utiliza **Collapse** para mostrar u ocultar información sobre Lugia, Xerneas, Zacian y Miraidon al pulsar en sus imágenes. Los enlaces sociales aparecen en línea en pantallas medianas y grandes, mientras que en móvil se agrupan dentro de un **Accordion**.

Bootstrap proporciona tanto los estilos como el comportamiento de estos componentes mediante su archivo JavaScript *bundle*. Los iconos del menú y de las redes sociales proceden de **Bootstrap Icons**.

Como mejora adicional, he incorporado una animación de aparición al desplazarse por la página. Mediante `IntersectionObserver`, el archivo `script.js` detecta cuándo las imágenes de las generaciones entran en la zona visible y les añade una clase CSS que activa una transición suave de opacidad y posición. La animación se ejecuta una sola vez por imagen y contempla la preferencia del sistema para reducir el movimiento.

## 6. Imágenes y rendimiento

Las imágenes de los Pokémon se cargan desde el repositorio público de sprites de PokéAPI. En las imágenes situadas a lo largo del contenido se utiliza `loading="lazy"`, que permite retrasar su descarga hasta que se aproximan a la zona visible. La imagen principal de la portada no utiliza esta técnica porque interesa que esté disponible desde el primer momento.

Para mantener las proporciones de las ilustraciones se utiliza `object-fit: contain` junto con tamaños máximos y clases como `img-fluid`.

## 7. Organización y publicación

El proyecto se compone de tres archivos principales: `index.html` contiene la estructura y los componentes Bootstrap; `styles.css` reúne la personalización visual y las reglas responsive; y `script.js` implementa el efecto de aparición de imágenes. `README.md` explica el proyecto y este documento recoge las decisiones de diseño.

Durante el desarrollo se han guardado los avances mediante commits de Git y se ha publicado la página con GitHub Pages desde la rama `main`.

**Web publicada:** https://laurags28.github.io/practica3-bootstrap/

**Repositorio:** https://github.com/laurags28/practica3-bootstrap

## 8. Conclusión

El resultado es una maqueta que mantiene una estructura clara en ordenador, tablet y móvil. Esta práctica me ha permitido trabajar el Grid de Bootstrap y comprender cómo se combinan sus clases responsive con componentes interactivos, estilos CSS personalizados y una pequeña funcionalidad en JavaScript. La temática de Pokémon sirve como soporte visual para demostrar estas técnicas sin que sea necesario desarrollar un catálogo completo.
