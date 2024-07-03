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
  cartaA: null,
  cartaB: null,
  segundaCartaVolteda: null,
  parejaEncontrada: 0,
  cartasVueltas: 0,
  totalParejas: arrayImagenes.length,
};

export const memoryGame = () => {
  const botonIniciarPartida = document.querySelector(".start");
  botonIniciarPartida.addEventListener("click", () => {
    iniciarPartida(botonIniciarPartida);
    volteaCarta();
  });
};

const iniciarPartida = (botonIniciar) => {
  estadoPartida.partidaIniciada = true;
  estadoPartida.primeraCartaVolteada = null;
  estadoPartida.segundaCartaVolteda = null;
  estadoPartida.cartaA = null;
  estadoPartida.cartaB = null;
  estadoPartida.parejaEncontrada = 0;
  estadoPartida.cartasVueltas = 0;

  divsReset();

  botonIniciar.disabled = true;
};

const divsReset = () => {
  elementosDiv.forEach((div) => {
    const img = div.querySelector("img");
    img.src = "";
    img.style.display = "none";
  });
};

const volteaCarta = () => {
  const arrayBarajado = barajarArray(arrayDuplicado);
  console.log(arrayBarajado);

  elementosDiv.forEach((div) => {
    div.addEventListener("click", () => {
      const idElemento = div.getAttribute("data-id");
      const imagen = div.querySelector("img");

      imagen.src = arrayBarajado[idElemento];
      imagen.style.display = "block";

      if (estadoPartida.cartasVueltas === 0) {
        primeraCartaVolteada(`${arrayBarajado[idElemento]}`);
        estadoPartida.cartaA = imagen;
      } else if (estadoPartida.cartasVueltas === 1) {
        segundaCartaVolteda(`${arrayBarajado[idElemento]}`);
        estadoPartida.cartaB = imagen;

        const comprobarSiSonPareja = siSonPareja(
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

const primeraCartaVolteada = (carta) => {
  estadoPartida.primeraCartaVolteada = carta;
  estadoPartida.cartasVueltas++;
};

const segundaCartaVolteda = (carta) => {
  estadoPartida.segundaCartaVolteda = carta;
  estadoPartida.cartasVueltas++;
};

const siSonPareja = (carta1, carta2) => (carta1 === carta2 ? true : false);

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
      finDeLaPartida();
      textoJuegoCompletado.style.display = "none";
    }, 4000);
  } else {
    resetearCartas();
  }
};

const finDeLaPartida = () => {
  if (
    estadoPartida.partidaIniciada === true &&
    estadoPartida.parejaEncontrada === arrayImagenes.length
  ) {
    empezarUnaNuevaPartida();
  }
};

const empezarUnaNuevaPartida = () => {
  estadoPartida.partidaIniciada = false;
  estadoPartida.parejaEncontrada = 0;

  divsReset();
  const botonIniciarPartida = document.querySelector(".start");

  botonIniciarPartida.disabled = false;
};
