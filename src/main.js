import Atropos from "https://cdn.jsdelivr.net/npm/atropos@2/atropos.min.mjs";

import { handlerDesplegarMenu } from "./menuDesplegado.js";
import { backToTop } from "./backToTop.js";
import { showMinions } from "./showMinions.js";
import { editCursor } from "./customCursor.js";
import { escucharMinions } from "./soundsMinions.js";
import { memoryGame } from "./memoryGame.js";

const myAtropos = Atropos({
  el: ".my-atropos",
  shadow: false,
  shadowOffset: false,
  rotate: true,
  rotateTouch: `scroll-y`,
});

window.addEventListener("mousemove", editCursor);
showMinions();
handlerDesplegarMenu();
backToTop();
escucharMinions();
memoryGame();
