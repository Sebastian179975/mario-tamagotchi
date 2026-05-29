document.addEventListener('DOMContentLoaded', () => {
  inicializarSelectorPersonaje();
  registrarEventoFormulario();
  registrarEventosBotonesAccion();
  registrarEventoReiniciar();
  recuperarPartidaGuardada();
});

// Si hay una partida válida en localStorage la restaura y arranca el loop directamente
function recuperarPartidaGuardada() {
  const hayPartidaGuardada = cargarEstadoDesdeStorage();
  if (!hayPartidaGuardada) return;

  actualizarEstadoCompletoDOM();
  mostrarPantallaPrincipal();
  iniciarGameLoop();
}

function inicializarSelectorPersonaje() {
  const botonesPersonaje = document.querySelectorAll('.personaje-opcion');

  botonesPersonaje.forEach((boton) => {
    boton.addEventListener('click', () => {
      botonesPersonaje.forEach((b) => b.classList.remove('seleccionado'));
      boton.classList.add('seleccionado');
    });
  });
}
