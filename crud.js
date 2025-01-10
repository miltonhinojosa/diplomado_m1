document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('encuesta-form');
    const tablaResultados = document.getElementById('tabla-resultados');
    let datosEncuesta = [];
    let indiceEdicion = null;

    async function cargarDatos() {
        try {
            const respuesta = await fetch('datos.json');
            datosEncuesta = await respuesta.json();
            renderizarTabla();
        } catch (error) {
            console.error('Error al cargar los datos:', error);
        }
    }

    function guardarDatosSimulado() {
        console.log('Datos guardados localmente (simulación):', JSON.stringify(datosEncuesta, null, 2));
    }

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

    // validar
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

    // insetar
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
            datosEncuesta[indiceEdicion] = nuevoRegistro;
            indiceEdicion = null; 
        } else {
            datosEncuesta.push(nuevoRegistro); 
        }

        renderizarTabla();
        guardarDatosSimulado();
        formulario.reset();
    });

    // eliminar
    window.eliminarRegistro = (index) => {
        datosEncuesta.splice(index, 1);
        renderizarTabla();
        guardarDatosSimulado();
    };

    // editar
    window.editarRegistro = (index) => {
        const registro = datosEncuesta[index];
        formulario.nombre.value = registro.nombre;
        formulario.edad.value = registro.edad;
        formulario.frecuencia.value = registro.frecuencia;
        formulario['tipo-ejercicio'].value = registro.tipo;
        formulario.duracion.value = registro.duracion;
        formulario.dificultad.value = registro.dificultad;

        indiceEdicion = index;
    };

    cargarDatos();
});

