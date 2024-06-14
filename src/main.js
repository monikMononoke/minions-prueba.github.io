import Atropos from "https://cdn.jsdelivr.net/npm/atropos@2/atropos.min.mjs";

const myAtropos = Atropos({
  el: ".my-atropos",
  shadow: false,
  shadowOffset: false,
  rotate: true,
  rotateTouch: `scroll-y`,
});

const cursor = document.querySelector(".cursor");

const editCursor = (e) => {
  const { clientX: x, clientY: y } = e;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
};

window.addEventListener("mousemove", editCursor);
