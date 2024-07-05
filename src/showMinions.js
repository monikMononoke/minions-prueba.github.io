export const showMinions = () =>
  window.addEventListener("scroll", () => {
    const minionsLeft = [
      { transform: "translateX(-100%)", opacity: "0" },
      { transform: "translateX(0)", opacity: "1" },
    ];

    const meetRight = [
      { transform: "translateX(100%)", opacity: "0" },
      { transform: "translateX(0)", opacity: "1" },
    ];

    const minionsRight = [
      { transform: "translateX(100%)", opacity: "0" },
      { transform: "translateX(0)", opacity: "1" },
    ];

    const meetLeft = [
      { transform: "translateX(-100%)", opacity: "0" },
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
      const meet = section.querySelector(".meet-right");

      const posicion = section.getBoundingClientRect();
      const imagenAnimada = section.classList.contains("animada");

      if (posicion.top <= 250 && !imagenAnimada) {
        imagen.animate(minionsLeft, minionsTiming);
        meet.animate(meetRight, minionsTiming);
        setTimeout(() => {
          imagen.style.opacity = "1";
          imagen.style.transform = "translateX(0)";
          meet.style.opacity = "1";
          meet.style.transform = "translateX(0)";
          section.classList.add("animada");
          section.classList.add("fondoAnimado");
        }, 100);
      }
    });

    sectionsRigth.forEach((section) => {
      const imagen = section.querySelector("img");
      const meet = section.querySelector(".meet-left");

      const posicion = section.getBoundingClientRect();
      const imagenAnimada = section.classList.contains("animada");

      if (posicion.top <= 250 && !imagenAnimada) {
        imagen.animate(minionsRight, minionsTiming);
        meet.animate(meetLeft, minionsTiming);

        setTimeout(() => {
          imagen.style.opacity = "1";
          imagen.style.transform = "translateX(0)";
          meet.style.opacity = "1";
          meet.style.transform = "translateX(0)";
          section.classList.add("animada");
        }, 100);
      }
    });
  });
