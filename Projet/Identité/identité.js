const boutonUp = document.querySelector(".ppcp-up");
const card = document.querySelector(".ppcp-content-i");

if (boutonUp && card) {
  boutonUp.addEventListener("click", () => {
    card.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
} else {
}

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

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowTop") {
    card.scrollBy(0, 150);
  } else if (event.key === "ArrowBottom") {
    card.scrollBy(0, 150);
  }
});
