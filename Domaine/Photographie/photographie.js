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

// EFFET AVANT APRES

const container = document.querySelector(".ppcpc-p1-i-container-p-1");
const afterImg = document.querySelector(".after");
const divider = document.querySelector(".ppcpc-p1-i-divider-p-1");

function updateClipFromX(x) {
  const cw = container.clientWidth;

  let percent = (x / cw) * 100;

  afterImg.style.clipPath = `inset(0 0 0 ${percent}%)`;
}

function initPosition() {
  const cw = container.clientWidth;
  const w = divider.offsetWidth;
  const startX = cw / 2 - w / 2;

  gsap.set(divider, { x: startX });
  updateClipFromX(startX);
}

Draggable.create(divider, {
  type: "x",
  bounds: container,
  onDrag: function () {
    updateClipFromX(this.x);
  },
});

window.addEventListener("load", initPosition);

// EFFET SUR LE HANDLE

const box = document.querySelector(".ppcpc-p1-i-handle-p-1");
let isPressed = false;

box.addEventListener("mousedown", () => {
  isPressed = true;
  box.classList.add("is-active");
});

window.addEventListener("mouseup", () => {
  if (isPressed) {
    isPressed = false;
    box.classList.remove("is-active");
  }
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
