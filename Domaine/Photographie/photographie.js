const boutonUp = document.querySelector(".ppcp-up");
const card = document.querySelector(".ppcp-content-p");

if (boutonUp && card) {
  boutonUp.addEventListener("click", () => {
    card.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
} else {
}

document.querySelectorAll(".dot-p").forEach((dot) => {
  dot.addEventListener("click", () => {
    const img = dot
      .closest("div[class^='ppcpc-image-p-1-']")
      .querySelector("img");

    if (img) {
      if (img.requestFullscreen) {
        img.requestFullscreen();
      } else if (img.webkitRequestFullscreen) {
        img.webkitRequestFullscreen();
      } else if (img.msRequestFullscreen) {
        img.msRequestFullscreen();
      }
    }
  });
});
