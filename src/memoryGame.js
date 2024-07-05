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
  segundaCartaVolteada: null,
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
    restearDivs();
    iniciarPartida(botonIniciarPartida);
    iniciarContador();
    volteaCarta();
  });
};

const iniciarContador = () => {
  const contador = document.querySelector(".contador");
  contador.style.display = "block";
};

const iniciarPartida = (botonIniciarPartida) => {
  estadoPartida.partidaIniciada = true;
  estadoPartida.primeraCartaVolteada = null;
  estadoPartida.segundaCartaVolteada = null;
  estadoPartida.cartaA = null;
  estadoPartida.cartaB = null;
  estadoPartida.parejaEncontrada = 0;
  estadoPartida.cartasVueltas = 0;
  estadoPartida.contador = 0;
  botonIniciarPartida.style.display = "none";
  botonIniciarPartida.disabled = true;
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
      divContador();

      const idElemento = div.getAttribute("data-id");
      const imagen = div.querySelector("img");

      imagen.src = arrayBarajado[idElemento];
      imagen.style.display = "block";

      if (estadoPartida.cartasVueltas === 0) {
        volteaPrimeraCarta(`${arrayBarajado[idElemento]}`);
        estadoPartida.cartaA = imagen;
      } else if (estadoPartida.cartasVueltas === 1) {
        volteaSegundaCarta(`${arrayBarajado[idElemento]}`);
        estadoPartida.cartaB = imagen;

        const comprobarSiSonPareja = comprobarSiSonIguales(
          estadoPartida.primeraCartaVolteada,
          estadoPartida.segundaCartaVolteada
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

const volteaPrimeraCarta = (carta) => {
  estadoPartida.primeraCartaVolteada = carta;
  estadoPartida.cartasVueltas++;
};

const volteaSegundaCarta = (carta) => {
  estadoPartida.segundaCartaVolteada = carta;
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

const comprobarSiLaPartidaHaTerminado = () => {
  if (estadoPartida.parejaEncontrada === estadoPartida.totalParejas) {
    const textoJuegoCompletado = document.querySelector(".juego-completado");
    textoJuegoCompletado.style.display = "block";
    setTimeout(() => {
      resetearCartas();
      restearDivs();
      resetarContador();
      iniciarContador();
      textoJuegoCompletado.style.display = "none";
      estadoPartida.partidaIniciada = false;

      if (estadoPartida === false) {
        const botonIniciarPartida = document.querySelector(".start");
        botonIniciarPartida.style.display = "block";
      }
    }, 5000);
  } else {
    resetearCartas();
  }
};

const resetearCartas = () => {
  estadoPartida.primeraCartaVolteada = null;
  estadoPartida.segundaCartaVolteada = null;
  estadoPartida.cartasVueltas = 0;
};

const resetarContador = () => {
  estadoPartida.contador = 0;
  const contador = document.querySelector(".contador");
  contador.innerHTML = `Moves: ${estadoPartida.contador}`;
};
