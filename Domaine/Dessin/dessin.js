const boutonUp = document.querySelector(".ppcp-up");
const card = document.querySelector(".ppcp-content-d");

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

document.querySelectorAll(".carousel-stage").forEach((stage) => {
  const slides = Array.from(stage.querySelectorAll(".slide"));
  const dotsEl = stage.parentElement.querySelector(".dots");
  let current = 0;

  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", `Aller à la diapositive ${i + 1}`);
    b.addEventListener("click", () => goTo(i));
    dotsEl.appendChild(b);
  });
  const dots = Array.from(dotsEl.children);

  function applyState(slide, state) {
    slide.style.zIndex = "1";
    if (state === "center") {
      slide.style.opacity = "1";
      slide.style.transform = "translate(-50%, -50%) scale(1) rotateY(0deg)";
      slide.style.zIndex = "3";
    } else if (state === "left") {
      slide.style.opacity = "0.45";
      slide.style.transform =
        "translate(-120%, -50%) scale(0.86) rotateY(15deg)";
      slide.style.zIndex = "2";
    } else if (state === "right") {
      slide.style.opacity = "0.45";
      slide.style.transform =
        "translate(20%, -50%) scale(0.86) rotateY(-15deg)";
      slide.style.zIndex = "2";
    } else {
      slide.style.opacity = "0";
      slide.style.transform = "translate(-50%, -50%) scale(0.9) rotateY(0deg)";
    }
  }

  function render() {
    const n = slides.length;
    const leftIndex = (current - 1 + n) % n;
    const rightIndex = (current + 1) % n;

    slides.forEach((slide, i) => {
      if (i === current) applyState(slide, "center");
      else if (i === leftIndex) applyState(slide, "left");
      else if (i === rightIndex) applyState(slide, "right");
      else applyState(slide, "hidden");
    });

    dots.forEach((d, i) =>
      d.setAttribute("aria-selected", i === current ? "true" : "false"),
    );
  }

  function goTo(i) {
    current = (i + slides.length) % slides.length;
    render();
  }

  function goNext() {
    goTo(current + 1);
  }
  function goPrev() {
    goTo(current - 1);
  }

  stage.addEventListener("click", (e) => {
    const slideEl = e.target.closest(".slide");
    if (!slideEl) return;

    const idx = slides.indexOf(slideEl);
    const leftIndex = (current - 1 + slides.length) % slides.length;
    const rightIndex = (current + 1) % slides.length;

    if (idx === leftIndex) goPrev();
    else if (idx === rightIndex) goNext();
  });

  render();

  window.addEventListener("keydown", (e) => {
    const rect = stage.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;

    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowTop") {
    card.scrollBy(0, 150);
  } else if (event.key === "ArrowBottom") {
    card.scrollBy(0, 150);
  }
});
