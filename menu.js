document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('menu').hasChildNodes()) {
        cargarMenu();
    }
});

async function cargarMenu() {
    try {
        // Cargar el archivo XML del menú principal
        const respuestaXML = await fetch('menu.xml');
        const textoXML = await respuestaXML.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(textoXML, 'application/xml');

        // Cargar el archivo JSON de los submenús
        const respuestaJSON = await fetch('submenus.json');
        const datosSubmenus = await respuestaJSON.json();

        const menuContenedor = document.getElementById('menu');
        menuContenedor.innerHTML = ''; // Asegurarse de vaciar el menú antes de generarlo

        xmlDoc.querySelectorAll('opcion').forEach((opcion) => {
            const nombreOpcionEs = opcion.querySelector('nombre').getAttribute('es');
            const nombreOpcionEn = opcion.querySelector('nombre').getAttribute('en');

            // Crear elemento del menú principal
            const li = document.createElement('li');
            li.classList.add('nav-item', 'dropdown');

            const enlace = document.createElement('a');
            enlace.classList.add('nav-link', 'dropdown-toggle');
            enlace.textContent = nombreOpcionEs; // Valor por defecto en español
            enlace.href = "#";
            enlace.setAttribute('data-bs-toggle', 'dropdown');
            enlace.setAttribute('aria-expanded', 'false');
            enlace.dataset.es = nombreOpcionEs;
            enlace.dataset.en = nombreOpcionEn;

            li.appendChild(enlace);

            // Verificar si hay submenús
            if (datosSubmenus[nombreOpcionEs] && datosSubmenus[nombreOpcionEs].length > 0) {
                const ulSubmenu = document.createElement('ul');
                ulSubmenu.classList.add('dropdown-menu');

                datosSubmenus[nombreOpcionEs].forEach((submenu) => {
                    const liSubmenu = document.createElement('li');
                    const enlaceSubmenu = document.createElement('a');
                    enlaceSubmenu.classList.add('dropdown-item');
                    enlaceSubmenu.textContent = submenu.nombre; // Por defecto en español
                    enlaceSubmenu.href = submenu.enlace;
                    enlaceSubmenu.dataset.es = submenu.nombre;
                    enlaceSubmenu.dataset.en = submenu.nombre_en;

                    liSubmenu.appendChild(enlaceSubmenu);
                    ulSubmenu.appendChild(liSubmenu);
                });

                li.appendChild(ulSubmenu);
            }

            menuContenedor.appendChild(li);
        });
    } catch (error) {
        console.error('Error al cargar el menú:', error);
    }
}
// el carrusel
document.addEventListener('DOMContentLoaded', () => {
    const contenedorCarrusel = document.querySelector('#carrusel > div');
    const diapositivas = document.querySelectorAll('#carrusel > div > div');
    const botonAnterior = document.getElementById('anterior');
    const botonSiguiente = document.getElementById('siguiente');
    let indiceActual = 0;

    // Actualizar la posición del carrusel
    function actualizarCarrusel() {
        const desplazamiento = -indiceActual * 100; // Cada diapositiva ocupa el 100% del ancho
        contenedorCarrusel.style.transform = `translateX(${desplazamiento}%)`;
    }

    // Mover a la siguiente diapositiva
    function moverSiguiente() {
        indiceActual = (indiceActual + 1) % diapositivas.length;
        actualizarCarrusel();
    }

    // Mover a la diapositiva anterior
    function moverAnterior() {
        indiceActual = (indiceActual - 1 + diapositivas.length) % diapositivas.length;
        actualizarCarrusel();
    }

    // Configuración de botones de navegación
    botonSiguiente.addEventListener('click', moverSiguiente);
    botonAnterior.addEventListener('click', moverAnterior);

    // Configuración de rotación automática
    setInterval(() => {
        moverSiguiente();
    }, 3000); // Cambia cada 3 segundos
});

