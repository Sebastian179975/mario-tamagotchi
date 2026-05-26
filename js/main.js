// Sprint 1 — punto de entrada
// La lógica completa del juego se implementa en Sprint 2.

document.addEventListener('DOMContentLoaded', () => {
  inicializarSelectorPersonaje();
});

/**
 * Marca como seleccionado el personaje pulsado y deselecciona los demás.
 * La opción activa se lee en Sprint 2 al procesar el formulario de adopción.
 */
function inicializarSelectorPersonaje() {
  const botonesPersonaje = document.querySelectorAll('.personaje-opcion');

  botonesPersonaje.forEach((boton) => {
    boton.addEventListener('click', () => {
      botonesPersonaje.forEach((b) => b.classList.remove('seleccionado'));
      boton.classList.add('seleccionado');
    });
  });
}
