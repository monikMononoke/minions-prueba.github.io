export const showMinions = () =>
  window.addEventListener("scroll", () => {
    const minionsLeft = [
      { transform: "translateX(-100%)", opacity: "0" },
      { transform: "translateX(0)", opacity: "1" },
    ];

    const minionsRight = [
      { transform: "translateX(100%)", opacity: "0" },
      { transform: "translateX(0)", opacity: "1" },
    ];

    const minionsTiming = {
      duration: 300,
      iterations: 1,
    };

    const sectionsLeft = document.querySelectorAll(".section-left");

    const sectionsRigth = document.querySelectorAll(".section-right");

    sectionsLeft.forEach((section) => {
      const imagen = section.querySelector("img");

      const posicion = section.getBoundingClientRect();
      const imagenAnimada = section.classList.contains("animada");

      if (posicion.top <= 200 && !imagenAnimada) {
        imagen.animate(minionsLeft, minionsTiming);

        setTimeout(() => {
          imagen.style.opacity = "1";
          imagen.style.transform = "translateX(0)";
          section.classList.add("animada");
          section.classList.add("fondoAnimado");
        }, 100);
      }
    });

    sectionsRigth.forEach((section) => {
      const imagen = section.querySelector("img");

      const posicion = section.getBoundingClientRect();
      const imagenAnimada = section.classList.contains("animada");

      if (posicion.top <= 200 && !imagenAnimada) {
        imagen.animate(minionsRight, minionsTiming);

        setTimeout(() => {
          imagen.style.opacity = "1";
          imagen.style.transform = "translateX(0)";
          section.classList.add("animada");
        }, 100);
      }
    });
  });
