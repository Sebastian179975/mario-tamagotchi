// Estado global de la mascota activa
let mascota = {
  nombre:    '',
  tipo:      'mario',
  hambre:    HAMBRE_INICIAL,
  energia:   ENERGIA_INICIAL,
  felicidad: FELICIDAD_INICIAL,
  estaViva:  true,
};

// Impide que un stat salga del rango [VALOR_MINIMO, VALOR_MAXIMO]
function limitarValor(valor) {
  return Math.min(VALOR_MAXIMO, Math.max(VALOR_MINIMO, valor));
}

function alimentarMascota() {
  mascota.hambre = limitarValor(mascota.hambre + GANANCIA_HAMBRE_COMER);
}

function jugarConMascota() {
  mascota.felicidad = limitarValor(mascota.felicidad + GANANCIA_FELICIDAD_JUGAR);
  mascota.energia   = limitarValor(mascota.energia   - COSTE_ENERGIA_JUGAR);
  mascota.hambre    = limitarValor(mascota.hambre    - COSTE_HAMBRE_JUGAR);
}

function dormirMascota() {
  mascota.energia   = limitarValor(mascota.energia   + GANANCIA_ENERGIA_DORMIR);
  mascota.felicidad = limitarValor(mascota.felicidad - COSTE_FELICIDAD_DORMIR);
}

function inicializarEstadoMascota(nombre, tipo) {
  mascota.nombre    = nombre;
  mascota.tipo      = tipo;
  mascota.hambre    = HAMBRE_INICIAL;
  mascota.energia   = ENERGIA_INICIAL;
  mascota.felicidad = FELICIDAD_INICIAL;
  mascota.estaViva  = true;
}
