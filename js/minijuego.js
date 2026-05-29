function abrirMinijuego() {
  document.getElementById('zona-resultado').classList.add('oculto');
  document.getElementById('zona-eleccion').classList.remove('oculto');
  document.getElementById('modal-minijuego').classList.remove('oculto');
}

function cerrarMinijuego() {
  document.getElementById('modal-minijuego').classList.add('oculto');
}

function elegirOpcionCPU() {
  const indiceAleatorio = Math.floor(Math.random() * OPCIONES_PPT.length);
  return OPCIONES_PPT[indiceAleatorio];
}

function obtenerEmojiOpcion(opcion) {
  const emojis = { piedra: '🪨', papel: '📄', tijeras: '✂️' };
  return emojis[opcion];
}

function procesarResultadoPPT(eleccionJugador) {
  const eleccionCPU    = elegirOpcionCPU();
  const resultado      = TABLA_RESULTADOS_PPT[eleccionJugador][eleccionCPU];
  const efectos        = EFECTOS_PPT[resultado];

  mascota.felicidad = limitarValor(mascota.felicidad + efectos.felicidad);
  mascota.energia   = limitarValor(mascota.energia   + efectos.energia);
  mascota.hambre    = limitarValor(mascota.hambre    + efectos.hambre);

  actualizarBarrasDOM();
  guardarEstadoEnStorage();
  mostrarResultadoPPT(eleccionJugador, eleccionCPU, resultado, efectos);
}

function mostrarResultadoPPT(jugador, cpu, resultado, efectos) {
  const textos = { gana: '¡VICTORIA! 🏆', pierde: 'DERROTA...', empate: 'EMPATE ⚡' };

  document.getElementById('zona-eleccion').classList.add('oculto');
  document.getElementById('zona-resultado').classList.remove('oculto');
  document.getElementById('texto-vs').textContent =
    obtenerEmojiOpcion(jugador) + ' TÚ  vs  CPU ' + obtenerEmojiOpcion(cpu);
  document.getElementById('texto-resultado').textContent = textos[resultado];
  document.getElementById('texto-efecto').textContent =
    '❤️ ' + (efectos.felicidad > 0 ? '+' : '') + efectos.felicidad +
    '  ⭐ ' + (efectos.energia  > 0 ? '+' : '') + efectos.energia +
    '  🍄 ' + (efectos.hambre   > 0 ? '+' : '') + efectos.hambre;

  setTimeout(cerrarMinijuego, 2500);
}

function registrarEventosMinijuego() {
  document.querySelectorAll('.boton-ppt').forEach((boton) => {
    boton.addEventListener('click', () => {
      procesarResultadoPPT(boton.dataset.opcion);
    });
  });
}
