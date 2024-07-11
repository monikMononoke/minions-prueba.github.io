export const animarHeader = () => {
  const divAtropos = document.querySelector('.atropos');
  const headerBello = divAtropos.querySelector('.rubik-h1');

  divAtropos.addEventListener('mousemove', (e) => {
    const area = divAtropos.getBoundingClientRect();
    const centrarX = area.left + area.width;
    const centrarY = area.top + area.height;
    const mouseX = e.clientX - centrarX;
    const mouseY = e.clientY - centrarY;

    const moverX = mouseX / 30;
    const moverY = mouseY / 30;

    headerBello.style.transform = `translate(${moverX}px, ${moverY}px)`;
  });
};
