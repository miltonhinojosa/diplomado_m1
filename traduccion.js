// Leer y cargar el menú desde menu.xml y submenus.json

document.addEventListener('DOMContentLoaded', () => {
    cargarMenu();
});

async function traducirMenu(idioma) {
    try {
        // Traducimos el menusito
        const menuItems = document.querySelectorAll('#menu > li > a');
        menuItems.forEach((item) => {
            if (item.dataset[idioma]) {
                item.textContent = item.dataset[idioma];
            } else {
                console.warn(`No se encontró traducción para: ${item.textContent}`);
            }
        });

        // Traducimos los submenus
        const subMenuItems = document.querySelectorAll('#menu .dropdown-menu .dropdown-item');
        subMenuItems.forEach((item) => {
            if (item.dataset[idioma]) {
                item.textContent = item.dataset[idioma];
            } else {
                console.warn(`No se encontró traducción para submenú: ${item.textContent}`);
            }
        });
    } catch (error) {
        console.error('Error al traducir el menú:', error);
    }
}

document.getElementById('btn-espanol').addEventListener('click', () => traducirMenu('es'));
document.getElementById('btn-ingles').addEventListener('click', () => traducirMenu('en'));

const traducciones = {
    es: {
        objetivo: "Objetivo de la encuesta",
        objetivoTexto1: "El objetivo de una encuesta sobre hábitos de ejercicio físico puede ser identificar los hábitos de ejercicio de un grupo de personas, o conocer los niveles de actividad física de una muestra de población.",
        objetivoTexto2: "Encuestas deportivas son cuestionarios que recopilan opiniones y percepciones sobre el rendimiento deportivo, el entrenamiento, la dinámica del equipo y las experiencias de los atletas.",
        beneficios: "Beneficios de participar",
        beneficiosTexto1: "La actividad física regular puede mejorar la fuerza muscular y aumentar la resistencia.",
        beneficiosTexto2: "El ejercicio envía oxígeno y nutrientes a los tejidos y ayuda a que el sistema cardiovascular funcione con mayor eficacia.",
        beneficiosTexto3: "Cuando la salud del corazón y los pulmones mejora, hay más energía para realizar las tareas cotidianas.",
        servicios: "Nuestros Servicios",
        serviciosTexto1: "La protección de datos es una cuestión de confianza y su confianza es muy importante para nosotros.",
        serviciosTexto2: "Respetamos su privacidad y su esfera personal.",
        serviciosTexto3: "Para garantizar que se sienta seguro cuando participe en nuestras encuestas, entrevistas y pruebas de productos."
    },
    en: {
        objetivo: "Survey Objective",
        objetivoTexto1: "The objective of a survey on exercise habits may be to identify the exercise habits of a group of people or to understand the physical activity levels of a sample population.",
        objetivoTexto2: "Sports surveys are questionnaires that collect opinions and perceptions about athletic performance, training, team dynamics, and athletes' experiences.",
        beneficios: "Benefits of Participation",
        beneficiosTexto1: "Regular physical activity can improve muscle strength and increase endurance.",
        beneficiosTexto2: "Exercise delivers oxygen and nutrients to tissues and helps the cardiovascular system work more efficiently.",
        beneficiosTexto3: "When heart and lung health improves, there is more energy for daily tasks.",
        servicios: "Our Services",
        serviciosTexto1: "Data protection is a matter of trust, and your trust is very important to us.",
        serviciosTexto2: "We respect your privacy and personal space.",
        serviciosTexto3: "To ensure you feel secure when participating in our surveys, interviews, and product tests."
    }
};

function cambiarIdioma(idioma) {
    const elementosTraducibles = document.querySelectorAll("[data-translate-key]");
    elementosTraducibles.forEach((elemento) => {
        const key = elemento.getAttribute("data-translate-key");
        if (traducciones[idioma][key]) {
            elemento.textContent = traducciones[idioma][key];
        }
    });
}

// Listeners para botones de idioma
document.getElementById("btn-espanol").addEventListener("click", () => cambiarIdioma("es"));
document.getElementById("btn-ingles").addEventListener("click", () => cambiarIdioma("en"));

