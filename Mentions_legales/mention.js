const boutonUp = document.querySelector(".ppcp-up");
const card = document.querySelector(".ppcp-content-ml");

if (boutonUp && card) {
  boutonUp.addEventListener("click", () => {
    card.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
} else {
}
