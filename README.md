# Mariogotchi 🍄

Tamagotchi temático de Super Mario Bros desarrollado con HTML, CSS y JavaScript vanilla.

## Demo en producción

🔗 **[https://sebastian179975.github.io/mario-tamagotchi/](https://sebastian179975.github.io/mario-tamagotchi/)**

## Personajes

| Mario | Luigi | Yoshi |
|-------|-------|-------|
| 🔴 Clásico | 🟢 El hermano | 🦕 El dinosaurio |

Cada personaje tiene 5 sprites: normal, comiendo, durmiendo, cansado y muerto.

## Funcionalidades

- **Adopción** — elige nombre y personaje antes de empezar
- **Barras de estado** — hambre 🍄, energía ⭐ y felicidad 😊 en tiempo real
- **Game loop** — los stats bajan automáticamente cada 3 segundos
- **Botones de acción** — Comer, Jugar (minijuego) y Dormir
- **Minijuego PPT** — Piedra 🪨 Papel 📄 Tijeras ✂️ cuyo resultado afecta a los stats
- **Sprite cansado** — aparece automáticamente cuando la energía baja de 25
- **Animación** — la mascota flota constantemente
- **Persistencia** — el estado se guarda en localStorage y se recupera al recargar
- **Game Over** — si los tres stats llegan a 0 aparece la pantalla de KO

## Sprints completados

| Sprint | Descripción | Estado |
|--------|-------------|--------|
| 1 | Maquetación retro estilo NES | ✅ |
| 2 | Lógica de estado y DOM | ✅ |
| 3 | Game loop y persistencia localStorage | ✅ |
| 4 | Refactor, animaciones, minijuego y despliegue | ✅ |

## Tecnologías

HTML5 · CSS3 · JavaScript ES6 · localStorage · GitHub Pages

## Estructura del proyecto

```
mariogotchi/
├── index.html
├── css/
│   └── estilos.css
├── js/
│   ├── constantes.js
│   ├── mascota.js
│   ├── dom.js
│   ├── storage.js
│   ├── gameLoop.js
│   ├── minijuego.js
│   ├── eventos.js
│   └── main.js
└── assets/
    ├── mario/   (normal, comiendo, durmiendo, cansado, muerto)
    ├── luigi/   (normal, comiendo, durmiendo, cansado, muerto)
    └── yoshi/   (normal, comiendo, durmiendo, cansado, muerto)
```
