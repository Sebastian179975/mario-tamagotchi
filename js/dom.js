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

// Devuelve 'cansado' si la energía está bajo el umbral, 'normal' en caso contrario
function obtenerSpriteBase() {
  return mascota.energia <= UMBRAL_ENERGIA_CANSADO ? 'cansado' : 'normal';
}

function actualizarImagenDOM() {
  document.getElementById('imagen-mascota').src =
    'assets/' + mascota.tipo + '/' + obtenerSpriteBase() + '.svg';
}

// Impide que el tick del game loop sobreescriba el sprite mientras dura la animación
let mostrandoSpriteAccion = false;

// Muestra el sprite de acción 1.5s y vuelve al sprite base (normal o cansado)
function mostrarSpriteAccion(estado) {
  const imagenMascota = document.getElementById('imagen-mascota');
  mostrandoSpriteAccion = true;
  imagenMascota.src = 'assets/' + mascota.tipo + '/' + estado + '.svg';
  imagenMascota.classList.add('mascota-img--accion');

  setTimeout(() => {
    mostrandoSpriteAccion = false;
    imagenMascota.src = 'assets/' + mascota.tipo + '/' + obtenerSpriteBase() + '.svg';
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
