const CLAVE_STORAGE = 'mariogotchi_estado';

function guardarEstadoEnStorage() {
  localStorage.setItem(CLAVE_STORAGE, JSON.stringify(mascota));
}

// Devuelve true si había una partida válida guardada y la restaura en el objeto mascota
function cargarEstadoDesdeStorage() {
  const estadoGuardado = localStorage.getItem(CLAVE_STORAGE);
  if (estadoGuardado === null) return false;

  const estadoCargado = JSON.parse(estadoGuardado);
  if (!estadoCargado.estaViva) return false;

  mascota.nombre    = estadoCargado.nombre;
  mascota.tipo      = estadoCargado.tipo;
  mascota.hambre    = estadoCargado.hambre;
  mascota.energia   = estadoCargado.energia;
  mascota.felicidad = estadoCargado.felicidad;
  mascota.estaViva  = estadoCargado.estaViva;

  return true;
}

function borrarEstadoDelStorage() {
  localStorage.removeItem(CLAVE_STORAGE);
}
