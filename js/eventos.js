// Registra el submit del formulario y delega en procesarAdopcion
function registrarEventoFormulario() {
  document.getElementById('formulario-adopcion').addEventListener('submit', (evento) => {
    evento.preventDefault();
    procesarAdopcion();
  });
}

function procesarAdopcion() {
  const inputNombre = document.getElementById('input-nombre');
  const errorNombre = document.getElementById('error-nombre');

  if (inputNombre.value.trim() === '') {
    errorNombre.textContent = '¡Escribe un nombre para tu mascota!';
    return;
  }

  errorNombre.textContent = '';
  const tipoSeleccionado = document.querySelector('.personaje-opcion.seleccionado');

  inicializarEstadoMascota(inputNombre.value.trim(), tipoSeleccionado.dataset.tipo);
  actualizarEstadoCompletoDOM();
  guardarEstadoEnStorage();
  mostrarPantallaPrincipal();
  iniciarGameLoop();
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

// Registra el botón reiniciar y delega en procesarReinicio
function registrarEventoReiniciar() {
  document.getElementById('boton-reiniciar').addEventListener('click', procesarReinicio);
}

function procesarReinicio() {
  detenerGameLoop();
  borrarEstadoDelStorage();

  document.getElementById('input-nombre').value = '';
  const botonesPersonaje = document.querySelectorAll('.personaje-opcion');
  botonesPersonaje.forEach((b) => b.classList.remove('seleccionado'));
  botonesPersonaje[0].classList.add('seleccionado');

  mostrarPantallaAdopcion();
}
