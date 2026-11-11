
document.addEventListener("DOMContentLoaded", () => {

    // Seleccionamos las imágenes de las generaciones.
    const imagenes = document.querySelectorAll(".pokemon-image");

    // Comprobamos si el navegador admite IntersectionObserver.
    if (!("IntersectionObserver" in window)) {
        return;
    }

    // Configuramos el observador.
    const observador = new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            // Comprobamos si la imagen está entrando en pantalla.
            if (entrada.isIntersecting) {

                // Activamos la animación.
                entrada.target.classList.add("visible");

                // Dejamos de observar la imagen una vez mostrada.
                observador.unobserve(entrada.target);
            }

        });

    }, {
        threshold: 0.1
    });

    // Preparamos las imágenes para la animación.
    imagenes.forEach((imagen) => {
        imagen.classList.add("reveal-ready");
        observador.observe(imagen);
    });

});
