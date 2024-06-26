export const handlerDesplegarMenu = () => {
  const iconoMenu = document.querySelector(".menu__icon");

  iconoMenu.addEventListener("click", () => {
    if (!iconoMenu.classList.contains("desplegado")) {
      desplegar();
      menuDesplegado();
      scrollToMinion();
    } else {
      plegar();
      menuPlegado();
    }
  });
};

const desplegar = () => {
  const iconoMenu = document.querySelector(".menu__icon");
  iconoMenu.classList.add("desplegado");
  const barrasMenu = document.querySelector(".barras");
  barrasMenu.style.display = "none";
  const gafitas = document.querySelector(".hidden-image");
  gafitas.style.display = "block";
};

const plegar = () => {
  const iconoMenu = document.querySelector(".menu__icon");
  iconoMenu.classList.remove("desplegado");
  const barrasMenu = document.querySelector(".barras");
  barrasMenu.style.display = "block";
  const gafitas = document.querySelector(".hidden-image");
  gafitas.style.display = "none";
};

const menuDesplegado = () => {
  const menu = document.querySelector(".menu");
  menu.innerHTML = `
    <div class="lista-menu">
    <ul class="lista">
    <li data-id="kevin" >KEVIN</a>
    <li data-id="bob" >BOB</a>
    <li data-id="dave">DAVE</a>
    <li data-id="carl">CARL</a>
    <li data-id="phil">PHIL</a>
    <li data-id="stuart">STUART</a>
    </ul>
    </div>
  `;
};

const menuPlegado = () => {
  const menu = document.querySelector(".menu");
  menu.innerHTML = "";
};

const scrollToMinion = () => {
  const divLista = document.querySelector(".lista");
  const lista = divLista.querySelectorAll("li");
  lista.forEach((elemento) => {
    elemento.addEventListener("click", () => {
      const dataId = elemento.getAttribute("data-id");
      const seccion = document.querySelector(`#${dataId}`);
      seccion.scrollIntoView({ behavior: "smooth" });
    });
  });
};
