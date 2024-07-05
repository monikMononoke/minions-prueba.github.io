const arrayImagenes = [
  "./images/memory/imagen-1.png",
  "./images/memory/imagen-2.png",
  "./images/memory/imagen-3.png",
  "./images/memory/imagen-4.png",
  "./images/memory/imagen-5.png",
  "./images/memory/imagen-6.png",
  "./images/memory/imagen-7.png",
  "./images/memory/imagen-8.png",
];

const elementosDiv = document.querySelectorAll(".carta");

const barajarArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const arrayDuplicado = [...arrayImagenes, ...arrayImagenes];

const estadoPartida = {
  partidaIniciada: false,
  primeraCartaVolteada: null,
  segundaCartaVolteda: null,
  cartaA: null,
  cartaB: null,
  parejaEncontrada: 0,
  cartasVueltas: 0,
  totalParejas: arrayImagenes.length,
  contador: 0,
};

export const memoryGame = () => {
  const botonIniciarPartida = document.querySelector(".start");
  botonIniciarPartida.addEventListener("click", () => {
    const contador = document.querySelector(".contador");
    contador.style.display = "block";
    botonIniciarPartida.style.display = "none";

    iniciarPartida(botonIniciarPartida);
    volteaCarta();
  });
};

const iniciarPartida = () => {
  estadoPartida.partidaIniciada = true;
  estadoPartida.primeraCartaVolteada = null;
  estadoPartida.segundaCartaVolteda = null;
  estadoPartida.cartaA = null;
  estadoPartida.cartaB = null;
  estadoPartida.parejaEncontrada = 0;
  estadoPartida.cartasVueltas = 0;
  estadoPartida.contador = 0;
  restearDivs();
};

const restearDivs = () => {
  elementosDiv.forEach((div) => {
    const img = div.querySelector("img");
    img.src = "";
    img.style.display = "none";
  });
};

const divContador = () => {
  const contador = document.querySelector(".contador");
  estadoPartida.contador++;
  contador.innerHTML = `Moves: ${estadoPartida.contador}`;
};

const volteaCarta = () => {
  const arrayBarajado = barajarArray(arrayDuplicado);

  elementosDiv.forEach((div) => {
    div.addEventListener("click", () => {
      const idElemento = div.getAttribute("data-id");
      const imagen = div.querySelector("img");

      imagen.src = arrayBarajado[idElemento];
      imagen.style.display = "block";

      divContador();

      if (estadoPartida.cartasVueltas === 0) {
        voltearPrimeraCarta(`${arrayBarajado[idElemento]}`);
        estadoPartida.cartaA = imagen;
      } else if (estadoPartida.cartasVueltas === 1) {
        voltearSegundaCarta(`${arrayBarajado[idElemento]}`);
        estadoPartida.cartaB = imagen;

        const comprobarSiSonPareja = comprobarSiSonIguales(
          estadoPartida.primeraCartaVolteada,
          estadoPartida.segundaCartaVolteda
        );

        if (comprobarSiSonPareja === true) {
          sonPareja(estadoPartida.cartaA, estadoPartida.cartaB);
        } else {
          noSonPareja(estadoPartida.cartaA, estadoPartida.cartaB);
        }
      }
    });
  });
};

const voltearPrimeraCarta = (carta) => {
  estadoPartida.primeraCartaVolteada = carta;
  estadoPartida.cartasVueltas++;
};

const voltearSegundaCarta = (carta) => {
  estadoPartida.segundaCartaVolteda = carta;
  estadoPartida.cartasVueltas++;
};

const comprobarSiSonIguales = (carta1, carta2) =>
  carta1 === carta2 ? true : false;

const sonPareja = (carta1, carta2) => {
  carta1.style.display = "block";
  carta2.style.display = "block";
  estadoPartida.parejaEncontrada++;
  comprobarSiLaPartidaHaTerminado();
};

const noSonPareja = (carta1, carta2) => {
  setTimeout(() => {
    carta1.style.display = "none";
    carta2.style.display = "none";
    carta1 = null;
    carta2 = null;
    resetearCartas();
  }, 500);
};

const resetearCartas = () => {
  estadoPartida.primeraCartaVolteada = null;
  estadoPartida.segundaCartaVolteda = null;
  estadoPartida.cartasVueltas = 0;
};

const comprobarSiLaPartidaHaTerminado = () => {
  if (estadoPartida.parejaEncontrada === estadoPartida.totalParejas) {
    const textoJuegoCompletado = document.querySelector(".juego-completado");
    textoJuegoCompletado.style.display = "block";
    setTimeout(() => {
      resetearCartas();
      restearDivs();
      textoJuegoCompletado.style.display = "none";
      const contador = document.querySelector(".contador");
      contador.innerHTML = `Moves: `;
      contador.style.display = "none";
      const botonIniciarPartida = document.querySelector(".start");
      botonIniciarPartida.style.display = "block";
      estadoPartida.partidaIniciada = false;
    }, 5000);
  } else {
    resetearCartas();
  }
};
