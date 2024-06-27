export const escucharMinions = () => {
  playKevin();
  playBob();
  playStuart();
  playDave();
  playPhil();
  playCarl();
};

const playKevin = () => {
  const audio = document.querySelector("#meet-kevin");
  const playButton = document.querySelector("#play-kevin");
  playButton.addEventListener("click", () => {
    audio.play();
  });
};

const playBob = () => {
  const audio = document.querySelector("#meet-bob");
  const playButton = document.querySelector("#play-bob");
  playButton.addEventListener("click", () => {
    audio.play();
  });
};
const playDave = () => {
  const audio = document.querySelector("#meet-dave");
  const playButton = document.querySelector("#play-dave");
  playButton.addEventListener("click", () => {
    audio.play();
  });
};

const playStuart = () => {
  const audio = document.querySelector("#meet-stuart");
  const playButton = document.querySelector("#play-stuart");
  playButton.addEventListener("click", () => {
    audio.play();
  });
};
const playPhil = () => {
  const audio = document.querySelector("#meet-phil");
  const playButton = document.querySelector("#play-phil");
  playButton.addEventListener("click", () => {
    audio.play();
  });
};
const playCarl = () => {
  const audio = document.querySelector("#meet-carl");
  const playButton = document.querySelector("#play-carl");
  playButton.addEventListener("click", () => {
    audio.play();
  });
};
