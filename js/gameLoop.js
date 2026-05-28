let idGameLoop = null;

function iniciarGameLoop() {
  idGameLoop = setInterval(ejecutarTick, INTERVALO_GAME_LOOP_MS);
}

function detenerGameLoop() {
  clearInterval(idGameLoop);
  idGameLoop = null;
}

function ejecutarTick() {
  mascota.hambre    = limitarValor(mascota.hambre    - DECREMENTO_HAMBRE_TICK);
  mascota.energia   = limitarValor(mascota.energia   - DECREMENTO_ENERGIA_TICK);
  mascota.felicidad = limitarValor(mascota.felicidad - DECREMENTO_FELICIDAD_TICK);

  actualizarBarrasDOM();

  if (mascotaHaMuerto()) {
    procesarMuerteMascota();
  }
}

function mascotaHaMuerto() {
  return mascota.hambre    === VALOR_MINIMO
      && mascota.energia   === VALOR_MINIMO
      && mascota.felicidad === VALOR_MINIMO;
}

function procesarMuerteMascota() {
  mascota.estaViva = false;
  detenerGameLoop();
  mostrarPantallaGameOver();
}
