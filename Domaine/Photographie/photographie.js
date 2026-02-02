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

document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal");

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    revealOnScroll.observe(el);
  });
});
