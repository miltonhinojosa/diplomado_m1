document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('menu').hasChildNodes()) {
        cargarMenu();
    }
});

//aqui cargamos el menusito y submenus
async function cargarMenu() {
    try {
        // Cargar XML del menusito
        const respuestaXML = await fetch('menu.xml');
        const textoXML = await respuestaXML.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(textoXML, 'application/xml');

        // Cargar JSON de los submenús
        const respuestaJSON = await fetch('submenus.json');
        const datosSubmenus = await respuestaJSON.json();

        const menuContenedor = document.getElementById('menu');
        menuContenedor.innerHTML = '';

        xmlDoc.querySelectorAll('opcion').forEach((opcion) => {
            const nombreOpcionEs = opcion.querySelector('nombre').getAttribute('es');
            const nombreOpcionEn = opcion.querySelector('nombre').getAttribute('en');

            // Crear elemento del menú principal
            const li = document.createElement('li');
            li.classList.add('nav-item', 'dropdown');

            const enlace = document.createElement('a');
            enlace.classList.add('nav-link', 'dropdown-toggle');
            enlace.textContent = nombreOpcionEs; //en español x defecto
            enlace.href = "#";
            enlace.setAttribute('data-bs-toggle', 'dropdown');
            enlace.setAttribute('aria-expanded', 'false');
            enlace.dataset.es = nombreOpcionEs;
            enlace.dataset.en = nombreOpcionEn;

            li.appendChild(enlace);

            if (datosSubmenus[nombreOpcionEs] && datosSubmenus[nombreOpcionEs].length > 0) {
                const ulSubmenu = document.createElement('ul');
                ulSubmenu.classList.add('dropdown-menu');

                datosSubmenus[nombreOpcionEs].forEach((submenu) => {
                    const liSubmenu = document.createElement('li');
                    const enlaceSubmenu = document.createElement('a');
                    enlaceSubmenu.classList.add('dropdown-item');
                    enlaceSubmenu.textContent = submenu.nombre; //en español x defecto
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

//para en carrusel tailwind
const carrusel = document.getElementById('carrusel');
const diapositivas = carrusel.firstElementChild.children;
const totalDiapositivas = diapositivas.length;
const botonAnterior = document.getElementById('anterior');
const botonSiguiente = document.getElementById('siguiente');
const indicadores = document.querySelectorAll('[data-slide]');
let indiceActual = 0;

function actualizarCarrusel() {
  carrusel.firstElementChild.style.transform = `translateX(-${indiceActual * 100}%)`;
  indicadores.forEach((indicador, indice) => {
    indicador.classList.toggle('bg-gray-800', indice === indiceActual);
    indicador.classList.toggle('bg-gray-400', indice !== indiceActual);
  });
}

function siguienteDiapositiva() {
  indiceActual = (indiceActual + 1) % totalDiapositivas;
  actualizarCarrusel();
}

function anteriorDiapositiva() {
  indiceActual = (indiceActual - 1 + totalDiapositivas) % totalDiapositivas;
  actualizarCarrusel();
}

botonAnterior.addEventListener('click', anteriorDiapositiva);
botonSiguiente.addEventListener('click', siguienteDiapositiva);

indicadores.forEach(indicador => {
  indicador.addEventListener('click', () => {
    indiceActual = parseInt(indicador.getAttribute('data-slide'));
    actualizarCarrusel();
  });
});

setInterval(siguienteDiapositiva, 3000);

