export const backToTop = () => {
  const backToTopImage = document.querySelector(".back-to-top-image");
  const mainLogo = document.querySelector(".logo");

  backToTopImage.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  mainLogo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};
