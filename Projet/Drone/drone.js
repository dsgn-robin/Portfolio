const boutonUp = document.querySelector(".ppcp-up");
const card = document.querySelector(".ppcp-content-s");

if (boutonUp && card) {
  boutonUp.addEventListener("click", () => {
    card.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
} else {
}

const BtnSTPS = document.querySelector(".ppcpc-r-c-btnst-s-1");
const VideoPS = document.querySelector(
  ".ppcpc-r-content-s-1 video:nth-child(1)",
);
const VideoSTPS = document.querySelector(
  ".ppcpc-r-content-s-1 video:nth-child(2)",
);

BtnSTPS.onclick = function () {
  VideoPS.classList.toggle("open");
  VideoSTPS.classList.toggle("open");
  VideoPS.muted = !VideoPS.muted;
  VideoSTPS.muted = !VideoSTPS.muted;
  VideoSTPS.currentTime = 0;
  VideoPS.currentTime = 0;
};
