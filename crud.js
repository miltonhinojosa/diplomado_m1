document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('encuesta-form');
    const tablaResultados = document.getElementById('tabla-resultados');
    let datosEncuesta = [];
    let indiceEdicion = null; // Índice del registro que se está editando

    // Leer datos iniciales desde datos.json
    async function cargarDatos() {
        try {
            const respuesta = await fetch('datos.json');
            datosEncuesta = await respuesta.json();
            renderizarTabla();
        } catch (error) {
            console.error('Error al cargar los datos:', error);
        }
    }

    // Simular guardado de datos
    function guardarDatosSimulado() {
        console.log('Datos guardados localmente (simulación):', JSON.stringify(datosEncuesta, null, 2));
    }

    // Renderizar tabla
    function renderizarTabla() {
        tablaResultados.innerHTML = '';
        datosEncuesta.forEach((dato, index) => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${dato.nombre}</td>
                <td>${dato.edad}</td>
                <td>${dato.frecuencia}</td>
                <td>${dato.tipo}</td>
                <td>${dato.duracion}</td>
                <td>${dato.dificultad}</td>
                <td class="w-13">
                    <button class="btn btn-warning btn-sm" onclick="editarRegistro(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="eliminarRegistro(${index})">Eliminar</button>
                </td>
            `;
            tablaResultados.appendChild(fila);
        });
    }

    // Validar formulario
    function validarCampos() {
        let esValido = true;
        const campos = formulario.querySelectorAll('input, select');

        campos.forEach((campo) => {
            const error = campo.nextElementSibling;
            if (!campo.value) {
                esValido = false;
                error.textContent = 'Este campo es obligatorio';
                error.classList.remove('d-none');
            } else {
                error.classList.add('d-none');
            }
        });

        return esValido;
    }

    // Crear o actualizar registro
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!validarCampos()) {
            return;
        }

        const nuevoRegistro = {
            nombre: formulario.nombre.value.trim(),
            edad: parseInt(formulario.edad.value.trim(), 10),
            frecuencia: formulario.frecuencia.value.trim(),
            tipo: formulario['tipo-ejercicio'].value.trim(),
            duracion: parseInt(formulario.duracion.value.trim(), 10),
            dificultad: formulario.dificultad.value.trim(),
        };

        if (indiceEdicion !== null) {
            datosEncuesta[indiceEdicion] = nuevoRegistro; // Actualizar registro existente
            indiceEdicion = null; // Limpiar estado de edición
        } else {
            datosEncuesta.push(nuevoRegistro); // Crear nuevo registro
        }

        renderizarTabla();
        guardarDatosSimulado(); // Simular guardado
        formulario.reset();
    });

    // Eliminar registro
    window.eliminarRegistro = (index) => {
        datosEncuesta.splice(index, 1);
        renderizarTabla();
        guardarDatosSimulado(); // Simular guardado
    };

    // Editar registro
    window.editarRegistro = (index) => {
        const registro = datosEncuesta[index];
        formulario.nombre.value = registro.nombre;
        formulario.edad.value = registro.edad;
        formulario.frecuencia.value = registro.frecuencia;
        formulario['tipo-ejercicio'].value = registro.tipo;
        formulario.duracion.value = registro.duracion;
        formulario.dificultad.value = registro.dificultad;

        indiceEdicion = index; // Establecer índice para actualizar el registro en el futuro
    };

    cargarDatos();
});

