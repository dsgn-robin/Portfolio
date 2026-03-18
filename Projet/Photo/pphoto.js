const boutonUp = document.querySelector(".ppcp-up");
const card = document.querySelector(".ppcp-content-pp");

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

// FULL SCREEN IMG

document.addEventListener("click", function (event) {
  const cible = event.target;

  if (
    cible.classList.contains("reveal") &&
    cible.classList.contains("active")
  ) {
    togglePleinEcran(cible);
  }
});

function togglePleinEcran(element) {
  const isFullScreen =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!isFullScreen) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
