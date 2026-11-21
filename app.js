// Funciones sencillas de la página Aprende Jugando.

document.addEventListener("DOMContentLoaded", () => {
    const encabezado = document.querySelector("header");
    const navegacion = document.querySelector("#menu-principal");

    // Menú desplegable para pantallas pequeñas.
    if (encabezado && navegacion) {
        const botonMenu = document.createElement("button");
        botonMenu.type = "button";
        botonMenu.className = "boton-menu";
        botonMenu.textContent = "☰ Menú";
        botonMenu.setAttribute("aria-controls", "menu-principal");
        botonMenu.setAttribute("aria-expanded", "false");
        botonMenu.setAttribute("aria-label", "Abrir o cerrar el menú de navegación");
        encabezado.insertBefore(botonMenu, navegacion);

        botonMenu.addEventListener("click", () => {
            const abierto = navegacion.classList.toggle("menu-abierto");
            botonMenu.setAttribute("aria-expanded", String(abierto));
            botonMenu.textContent = abierto ? "✕ Cerrar" : "☰ Menú";
        });

        navegacion.querySelectorAll("a").forEach((enlace) => {
            enlace.addEventListener("click", () => {
                navegacion.classList.remove("menu-abierto");
                botonMenu.setAttribute("aria-expanded", "false");
                botonMenu.textContent = "☰ Menú";
            });
        });
    }

    // Validación básica del formulario. No envía datos a un servidor.
    const formulario = document.querySelector("#formulario-contacto");
    const estado = document.querySelector("#estado-formulario");

    if (formulario && estado) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();

            if (!formulario.checkValidity()) {
                formulario.reportValidity();
                return;
            }

            estado.textContent = "Formulario revisado correctamente. Esta página aún no está conectada a un servicio para enviar mensajes.";
            estado.classList.add("visible");
        });
    }
});
