export const editCursor = (e) => {
  const cursor = document.querySelector(".cursor");
  const { clientX: x, clientY: y } = e;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
};
