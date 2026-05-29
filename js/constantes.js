// Valores iniciales de la mascota al adoptar
const HAMBRE_INICIAL    = 80;
const ENERGIA_INICIAL   = 80;
const FELICIDAD_INICIAL = 80;

// Límites absolutos de los stats
const VALOR_MINIMO = 0;
const VALOR_MAXIMO = 100;

// Energía por debajo de este valor activa el sprite cansado automáticamente
const UMBRAL_ENERGIA_CANSADO = 25;

// Game loop — intervalo y decrementos automáticos por tick
const INTERVALO_GAME_LOOP_MS    = 3000;
const DECREMENTO_HAMBRE_TICK    = 5;
const DECREMENTO_ENERGIA_TICK   = 4;
const DECREMENTO_FELICIDAD_TICK = 3;

// Costes y ganancias de cada acción del jugador
const GANANCIA_HAMBRE_COMER      = 30;
const COSTE_HAMBRE_JUGAR         = 10;
const GANANCIA_FELICIDAD_JUGAR   = 25;
const COSTE_ENERGIA_JUGAR        = 20;
const GANANCIA_ENERGIA_DORMIR    = 40;
const COSTE_FELICIDAD_DORMIR     = 10;
