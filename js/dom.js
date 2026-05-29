// Actualiza las tres barras <progress> y sus textos numéricos con el estado actual
function actualizarBarrasDOM() {
  document.getElementById('barra-hambre').value      = mascota.hambre;
  document.getElementById('texto-hambre').textContent = mascota.hambre + '%';

  document.getElementById('barra-energia').value      = mascota.energia;
  document.getElementById('texto-energia').textContent = mascota.energia + '%';

  document.getElementById('barra-felicidad').value      = mascota.felicidad;
  document.getElementById('texto-felicidad').textContent = mascota.felicidad + '%';
}

function actualizarNombreDOM() {
  document.getElementById('nombre-mascota').textContent = mascota.nombre;
}

function actualizarImagenDOM() {
  const rutaNormal = 'assets/' + mascota.tipo + '/normal.svg';
  document.getElementById('imagen-mascota').src = rutaNormal;
}

// Muestra el sprite de acción 1.5s y vuelve al sprite normal
function mostrarSpriteAccion(estado) {
  const imagenMascota = document.getElementById('imagen-mascota');
  imagenMascota.src = 'assets/' + mascota.tipo + '/' + estado + '.svg';
  imagenMascota.classList.add('mascota-img--accion');

  setTimeout(() => {
    imagenMascota.src = 'assets/' + mascota.tipo + '/normal.svg';
    imagenMascota.classList.remove('mascota-img--accion');
  }, 1500);
}

function mostrarSpriteMuerto() {
  document.getElementById('imagen-game-over').src = 'assets/' + mascota.tipo + '/muerto.svg';
}

// Actualiza nombre, imagen y barras en una sola llamada
function actualizarEstadoCompletoDOM() {
  actualizarNombreDOM();
  actualizarImagenDOM();
  actualizarBarrasDOM();
}

// --- Funciones de cambio de pantalla ---

function mostrarPantallaAdopcion() {
  document.getElementById('pantalla-adopcion').classList.remove('oculto');
  document.getElementById('pantalla-principal').classList.add('oculto');
  document.getElementById('pantalla-game-over').classList.add('oculto');
}

function mostrarPantallaPrincipal() {
  document.getElementById('pantalla-adopcion').classList.add('oculto');
  document.getElementById('pantalla-principal').classList.remove('oculto');
  document.getElementById('pantalla-game-over').classList.add('oculto');
}

function mostrarPantallaGameOver() {
  document.getElementById('pantalla-adopcion').classList.add('oculto');
  document.getElementById('pantalla-principal').classList.add('oculto');
  document.getElementById('pantalla-game-over').classList.remove('oculto');
}
