document.addEventListener('DOMContentLoaded', () => {
  inicializarSelectorPersonaje();
  registrarEventoFormulario();
  registrarEventoReiniciar();
});

function inicializarSelectorPersonaje() {
  const botonesPersonaje = document.querySelectorAll('.personaje-opcion');

  botonesPersonaje.forEach((boton) => {
    boton.addEventListener('click', () => {
      botonesPersonaje.forEach((b) => b.classList.remove('seleccionado'));
      boton.classList.add('seleccionado');
    });
  });
}
