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

//la traduccion
const traducciones_index = {
    es: {
        objetivo: "Objetivo de la encuesta",
        objetivoTexto1: "El objetivo de una encuesta sobre hábitos de ejercicio físico puede ser identificar los hábitos de ejercicio de un grupo de personas, o conocer los niveles de actividad física de una muestra de población. Encuestas deportivas son cuestionarios que recopilan opiniones y percepciones sobre el rendimiento deportivo, el entrenamiento, la dinámica del equipo y las experiencias de los atletas.",
        beneficios: "Beneficios de participar",
        beneficiosTexto1: "La actividad física regular puede mejorar la fuerza muscular y aumentar la resistencia.",
        beneficiosTexto2: "El ejercicio envía oxígeno y nutrientes a los tejidos y ayuda a que el sistema cardiovascular funcione con mayor eficacia.",
        beneficiosTexto3: "Cuando la salud del corazón y los pulmones mejora, hay más energía para realizar las tareas cotidianas.",
        servicios: "Nuestros Servicios",
        serviciosTexto1: "La protección de datos es una cuestión de confianza y su confianza es muy importante para nosotros.",
        serviciosTexto2: "Respetamos su privacidad y su esfera personal.",
        serviciosTexto3: "Para garantizar que se sienta seguro cuando participe en nuestras encuestas, entrevistas y pruebas de productos.",
        estadisticasTitulo: "Estadísticas Globales",
        estadisticasTexto: "El país del mundo donde se hace más actividad física es Uganda, que nada más registra un 5.5%, de inactividad, seguido de Mozambique, con un 6%.",
        generoTitulo: "Comparación por género y edad",
        generoTexto: "Los investigadores clasificaron como inactivos a los adultos entre 19 y 64 años que hacen menos de 150 minutos de ejercicio moderado a la semana.",
        ejerciciosTitulo: "Ejercicios recomendados",
        nutricionTitulo: "Nutrición complementaria",
        frutasTitulo: "Frutas y sus nutrientes",
        verdurasTitulo: "Verduras y sus nutrientes",
        tutorialesTitulo: "Tutoriales",
        rutinasTitulo: "Rutinas básicas",
        foroTitulo: "Foro de hábitos de Ejercicio",
        nombreLabel: "Nombre:",
        mensajeLabel: "Mensaje:",
        publicarBoton: "Publicar Mensaje",
        mensajesTitulo: "Mensajes",
        mensaje1: "¿Cuál es el mejor horario para hacer yoga si quiero mejorar mi flexibilidad?",
        respuesta1: "Respuesta mas votada: Por la mañana es ideal para empezar el día con energía.",
        mensaje2: "¿Cuántos días a la semana recomiendan nadar para mantenerse en forma?",
        respuesta2: "Respuesta mas votada: Tres días a la semana son perfectos para mantener un buen ritmo.",
        mensaje3: "¿Es mejor correr en la mañana o en la noche para bajar de peso?",
        respuesta3: "Respuesta mas votada: Cualquier horario funciona mientras seas constante, pero en la mañana ayuda a activar el metabolismo.",
        faqTitulo: "Preguntas frecuentes",
        faqPreg1: "¿Cuáles son las lesiones más comunes en el running?",
        faqPreg2: "¿Sabes cómo evitar lesiones en el gimnasio?",
        faqPreg3: "¿Es posible evitar la sobrecarga muscular?",
        faqPreg4: "¿Caliento bien antes de practicar deporte?",
        faqPreg5: "Con el inicio del año, ¿por qué no empezar a prevenir enfermedades coronarias?",
        faqPreg6: "¿Sabías que es posible aumentar tu flexibilidad?",
        faqPreg7: "¿Cómo debo actuar si estoy haciendo ejercicio y noto una contractura?",
        faqPreg8: "¿Sabes por qué empezar a nadar hoy mismo es bueno para tu salud?",
        faqPreg9: "¿Cualquier actividad puede ayudar a mejorar mi condición física?",
        faqPreg10: "¿Puedo practicar ejercicio si padezco ciática?",
        encuestaTitulo: "Encuesta de Hábitos de Ejercicio",
        nombreLabel: "Nombre:",
        edadLabel: "Edad:",
        frecuenciaLabel: "¿Con qué frecuencia haces ejercicio?",
        frecuenciaDefault: "Selecciona una opción",
        frecuenciaDiario: "Diario",
        frecuenciaSemanal: "Varias veces a la semana",
        frecuenciaOcasional: "Ocasionalmente",
        frecuenciaNunca: "Nunca",
        tipoEjercicioLabel: "¿Qué tipo de ejercicio prefieres?",
        duracionLabel: "¿Cuánto tiempo dedicas al ejercicio (en minutos)?",
        dificultadLabel: "¿Cómo consideras el nivel de dificultad de tu ejercicio?",
        dificultadDefault: "Selecciona una opción",
        dificultadBaja: "Baja",
        dificultadMedia: "Media",
        dificultadAlta: "Alta",
        enviarBoton: "Enviar",
        resultadosTitulo: "Resultados de la Encuesta",
        tablaNombre: "Nombre",
        tablaEdad: "Edad",
        tablaFrecuencia: "Frecuencia",
        tablaTipo: "Tipo",
        tablaDuracion: "Duración",
        tablaDificultad: "Dificultad",
        tablaAcciones: "Acciones",
        gimnasio1: "Gimnasio: EVOLUTION",
        gimnasio2: "Gimnasio: Megatlón Fitness Club",
        gimnasio3: "Gimnasio: Body Solid Fitness",
        gimnasio4: "Gimnasio: XTREME FORCE",
        gimnasio5: "Gimnasio: PRO FIT",
        gimnasio6: "Gimnasio: FIT Tendencias",
        boletinTitulo: "Boletín Informativo",
        boletinParrafo1: "La alimentación sana debe estar acompañada de actividad física para aumentar los beneficios. Muchas personas muestran rechazo a la hora de realizar ejercicio por una falta de hábito y porque las ventajas de esta práctica no son inmediatas.",
        boletinParrafo2: "Sin embargo, realizar ejercicio tiene magníficos resultados en el organismo y en la mente. Favorece la relajación y con unos 30 minutos diarios mejora la forma física rápida y espectacularmente. Los músculos se endurecen y se aprende a respirar adecuadamente.",
        boletinParrafo3: "El tipo de deporte que se practique depende de las preferencias de la persona y del objetivo que se pretenda conseguir. Así, tanto los deportes de equipo como los individuales pueden ayudar a lograrlo. Correr, la gimnasia, el ciclismo o la natación son deportes muy adecuados, pero no se debe pretender superar marcas, sino ir mejorando los propios límites.",
        redesTitulo: "Redes Sociales"
    },
    en: {
        objetivo: "Survey Objective",
        objetivoTexto1: "The objective of a survey on exercise habits may be to identify the exercise habits of a group of people or to understand the physical activity levels of a sample population. Sports surveys are questionnaires that collect opinions and perceptions about athletic performance, training, team dynamics, and athletes' experiences.",
        beneficios: "Benefits of Participation",
        beneficiosTexto1: "Regular physical activity can improve muscle strength and increase endurance.",
        beneficiosTexto2: "Exercise delivers oxygen and nutrients to tissues and helps the cardiovascular system work more efficiently.",
        beneficiosTexto3: "When heart and lung health improves, there is more energy for daily tasks.",
        servicios: "Our Services",
        serviciosTexto1: "Data protection is a matter of trust, and your trust is very important to us.",
        serviciosTexto2: "We respect your privacy and personal space.",
        serviciosTexto3: "To ensure you feel secure when participating in our surveys, interviews, and product tests.",
        estadisticasTitulo: "Global Statistics",
        estadisticasTexto: "The country with the highest physical activity is Uganda, which has only 5.5% inactivity, followed by Mozambique with 6%.",
        generoTitulo: "Comparison by Gender and Age",
        generoTexto: "Researchers classified adults aged 19 to 64 as inactive if they do less than 150 minutes of moderate exercise per week.",
        ejerciciosTitulo: "Recommended Exercises",
        nutricionTitulo: "Complementary Nutrition",
        frutasTitulo: "Fruits and Their Nutrients",
        verdurasTitulo: "Vegetables and Their Nutrients",
        tutorialesTitulo: "Tutorials",
        rutinasTitulo: "Basic Routines",
        foroTitulo: "Exercise Habits Forum",
        nombreLabel: "Name:",
        mensajeLabel: "Message:",
        publicarBoton: "Post Message",
        mensajesTitulo: "Messages",
        mensaje1: "What is the best time to do yoga if I want to improve flexibility?",
        respuesta1: "Top-voted answer: Morning is ideal to start the day with energy.",
        mensaje2: "How many days a week do you recommend swimming to stay fit?",
        respuesta2: "Top-voted answer: Three days a week is perfect to maintain a good pace.",
        mensaje3: "Is it better to run in the morning or at night to lose weight?",
        respuesta3: "Top-voted answer: Any time works if you're consistent, but mornings help activate metabolism.",
        faqTitulo: "Frequently Asked Questions",
        faqPreg1: "What are the most common running injuries?",
        faqPreg2: "Do you know how to avoid injuries at the gym?",
        faqPreg3: "Is it possible to avoid muscle overload?",
        faqPreg4: "Do I warm up properly before exercising?",
        faqPreg5: "With the start of the year, why not start preventing coronary diseases?",
        faqPreg6: "Did you know you can increase your flexibility?",
        faqPreg7: "How should I act if I'm exercising and notice a cramp?",
        faqPreg8: "Do you know why starting to swim today is good for your health?",
        faqPreg9: "Can any activity help improve my fitness?",
        faqPreg10: "Can I exercise if I have sciatica?",
        encuestaTitulo: "Exercise Habits Survey",
        nombreLabel: "Name:",
        edadLabel: "Age:",
        frecuenciaLabel: "How often do you exercise?",
        frecuenciaDefault: "Select an option",
        frecuenciaDiario: "Daily",
        frecuenciaSemanal: "Several times a week",
        frecuenciaOcasional: "Occasionally",
        frecuenciaNunca: "Never",
        tipoEjercicioLabel: "What type of exercise do you prefer?",
        duracionLabel: "How much time do you spend exercising (in minutes)?",
        dificultadLabel: "How do you rate the difficulty of your exercise?",
        dificultadDefault: "Select an option",
        dificultadBaja: "Low",
        dificultadMedia: "Medium",
        dificultadAlta: "High",
        enviarBoton: "Submit",
        resultadosTitulo: "Survey Results",
        tablaNombre: "Name",
        tablaEdad: "Age",
        tablaFrecuencia: "Frequency",
        tablaTipo: "Type",
        tablaDuracion: "Duration",
        tablaDificultad: "Difficulty",
        tablaAcciones: "Actions",
        gimnasio1: "Gym: EVOLUTION",
        gimnasio2: "Gym: Megatlón Fitness Club",
        gimnasio3: "Gym: Body Solid Fitness",
        gimnasio4: "Gym: XTREME FORCE",
        gimnasio5: "Gym: PRO FIT",
        gimnasio6: "Gym: FIT Trends",
        boletinTitulo: "Newsletter",
        boletinParrafo1: "Healthy eating should be accompanied by physical activity to increase its benefits. Many people are reluctant to exercise due to lack of habit and because the advantages of this practice are not immediate.",
        boletinParrafo2: "However, exercising has great results for the body and mind. It promotes relaxation, and with just 30 minutes a day, physical fitness improves quickly and spectacularly. Muscles become firmer, and one learns to breathe properly.",
        boletinParrafo3: "The type of sport practiced depends on the individual's preferences and the goal to be achieved. Both team and individual sports can help achieve this. Running, gymnastics, cycling, or swimming are very suitable sports, but one should not aim to break records but rather to gradually improve personal limits.",
        redesTitulo: "Social Media"
    }
};

function cambiarIdioma(idioma) {
    const elementosTraducibles = document.querySelectorAll("[data-translate-key]");
    elementosTraducibles.forEach((elemento) => {
        const key = elemento.getAttribute("data-translate-key");
        if (traducciones_index[idioma][key]) {
            elemento.textContent = traducciones_index[idioma][key];
        }
    });
}

document.getElementById("btn-espanol").addEventListener("click", () => cambiarIdioma("es"));
document.getElementById("btn-ingles").addEventListener("click", () => cambiarIdioma("en"));

