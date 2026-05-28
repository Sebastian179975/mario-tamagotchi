// Valida el formulario, inicializa la mascota y lanza la pantalla de juego
function registrarEventoFormulario() {
  const formulario   = document.getElementById('formulario-adopcion');
  const inputNombre  = document.getElementById('input-nombre');
  const errorNombre  = document.getElementById('error-nombre');

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    if (inputNombre.value.trim() === '') {
      errorNombre.textContent = '¡Escribe un nombre para tu mascota!';
      return;
    }

    errorNombre.textContent = '';

    const tipoSeleccionado = document.querySelector('.personaje-opcion.seleccionado');

    inicializarEstadoMascota(
      inputNombre.value.trim(),
      tipoSeleccionado.dataset.tipo
    );

    actualizarNombreDOM();
    actualizarImagenDOM();
    actualizarBarrasDOM();
    mostrarPantallaPrincipal();
    iniciarGameLoop();
  });
}

// Conecta los tres botones de acción con las funciones de mascota.js
function registrarEventosBotonesAccion() {
  document.getElementById('boton-alimentar').addEventListener('click', () => {
    alimentarMascota();
    actualizarBarrasDOM();
    guardarEstadoEnStorage();
  });

  document.getElementById('boton-jugar').addEventListener('click', () => {
    jugarConMascota();
    actualizarBarrasDOM();
    guardarEstadoEnStorage();
  });

  document.getElementById('boton-dormir').addEventListener('click', () => {
    dormirMascota();
    actualizarBarrasDOM();
    guardarEstadoEnStorage();
  });
}

// Vuelve a la pantalla de adopción y resetea el formulario
function registrarEventoReiniciar() {
  document.getElementById('boton-reiniciar').addEventListener('click', () => {
    document.getElementById('input-nombre').value = '';

    detenerGameLoop();
    borrarEstadoDelStorage();

    const botonesPersonaje = document.querySelectorAll('.personaje-opcion');
    botonesPersonaje.forEach((b) => b.classList.remove('seleccionado'));
    botonesPersonaje[0].classList.add('seleccionado');

    mostrarPantallaAdopcion();
  });
}
