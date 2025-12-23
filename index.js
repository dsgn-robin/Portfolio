const HomeButton = document.querySelector(".hp-button");
const HomePage = document.querySelector(".home-page");
const PortfolioPage = document.querySelector(".portfolio-page");
const Navbar = document.querySelector(".navbar");

const RideauDroite = document.querySelector(".rideaudroite");
const RideauGauche = document.querySelector(".rideaugauche");
const ArrowHome = document.querySelector(".ppdah-home");

// ---- Nouveau : cercle de chargement ----
const ring = document.querySelector(".progress-ring");
const radius = ring.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

ring.style.strokeDasharray = `${circumference} ${circumference}`;
ring.style.strokeDashoffset = circumference;

let holdTimeout;
let holding = false;

// ---- Appui long sur le HomeButton ----
HomeButton.addEventListener("mousedown", () => {
  holding = true;
  HomeButton.classList.add("holding");

  // Animation : remplir le cercle (0 → 100%)
  ring.style.transition = "stroke-dashoffset 1.2s linear";
  ring.style.strokeDashoffset = 0;

  // Après 2 sec, on déclenche TON ancienne action
  holdTimeout = setTimeout(() => {
    if (holding) {
      triggerHomeButton(); // ← ta fonction
    }
  }, 1200);
});

HomeButton.addEventListener("mouseup", cancelHold);
HomeButton.addEventListener("mouseleave", cancelHold);

function cancelHold() {
  holding = false;
  HomeButton.classList.remove("holding");

  clearTimeout(holdTimeout);

  // Reset de l'animation du cercle
  ring.style.transition = "stroke-dashoffset 0.2s";
  ring.style.strokeDashoffset = circumference;
}

// ---- TON ancienne action (inchangée) ----
function triggerHomeButton() {
  HomePage.classList.toggle("open");
  RideauDroite.classList.toggle("open");
  RideauGauche.classList.toggle("open");
}

// ---- Bouton retour (inchangé) ----
ArrowHome.onclick = function () {
  HomePage.classList.remove("open");
  RideauDroite.classList.remove("open");
  RideauGauche.classList.remove("open");
};

// ARROWS SYSTEM

const ArrowAbout = document.querySelector(".ppda-about");
const ArrowContact = document.querySelector(".ppda-contact");
const ArrowPortfolioC = document.querySelector(".ppda-portfolio-c");
const ArrowPortfolioA = document.querySelector(".ppda-portfolio-a");
const ContactPage = document.querySelector(".contact-page");
const AboutPage = document.querySelector(".about-page");

ArrowAbout.onclick = function () {
  PortfolioPage.style.transform = "translateX(-100%)";
  AboutPage.style.transform = "translateX(0%)";
};

ArrowContact.onclick = function () {
  PortfolioPage.style.transform = "translateX(100%)";
  ContactPage.style.transform = "translateX(0%)";
};

ArrowPortfolioC.onclick = function () {
  PortfolioPage.style.transform = "translateX(0%)";
  ContactPage.style.transform = "translateX(-100%)";
};

ArrowPortfolioA.onclick = function () {
  PortfolioPage.style.transform = "translateX(0%)";
  AboutPage.style.transform = "translateX(100%)";
};

// PAGE SYSTEM

document.addEventListener("DOMContentLoaded", () => {
  const discoverButtons = document.querySelectorAll(
    '[class*="ppcf-b-discover-"]'
  );
  const backButton = document.querySelector(".ppc-back");
  const allPages = document.querySelectorAll('[class*="ppc-page-"]');

  // Fonction pour ouvrir une page
  const openPage = (id) => {
    // Empêche le scroll global
    document.body.style.overflow = "hidden";

    // Ferme toutes les pages ouvertes
    allPages.forEach((page) => {
      page.classList.remove("open");
      page.style.overflowY = ""; // reset
      page.style.maxHeight = "";
    });

    // Ouvre la page correspondante
    const pageToOpen = document.querySelector(`.ppc-page-${id}`);
    if (pageToOpen) {
      pageToOpen.classList.add("open");

      // Active le scroll interne
      pageToOpen.style.overflowY = "auto";
      pageToOpen.style.maxHeight = "100vh";
    }

    // Ouvre le fond arrière
    backButton?.classList.add("open");
  };

  // Fonction pour fermer toutes les pages
  const closePages = () => {
    allPages.forEach((page) => {
      page.classList.remove("open");
      page.style.overflowY = "";
      page.style.maxHeight = "";
    });

    // Réactive le scroll du body
    document.body.style.overflow = "";

    // Ferme le fond arrière
    backButton?.classList.remove("open");
  };

  // Gestion des clics sur les boutons "discover"
  discoverButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const match = btn.className.match(/ppcf-b-discover-([a-zA-Z0-9_-]+)/);
      if (!match) return;
      const id = match[1];

      openPage(id);
    });
  });

  // Gestion des clics sur le bouton "retour"
  backButton?.addEventListener("click", closePages);

  // Si tu veux aussi des boutons de retour internes :
  document.querySelectorAll('[class*="ppcp-return-"]').forEach((ret) => {
    ret.addEventListener("click", closePages);
  });
});

// UP SYSTEM

const boutonsUp = document.querySelectorAll(".ppcp-up");

const cards = [
  ".ppcp-content-s",
  ".ppcp-content-d",
  ".ppcp-content-o",
  ".ppcp-content-m",
  ".ppcp-content-3",
  ".ppcp-content-p",
  ".ppcp-content-f",
  ".ppcp-content-pr",
];

boutonsUp.forEach((btn, index) => {
  console.log("bouton " + index);
  btn.addEventListener("click", () => {
    const card = document.querySelector(cards[index]);

    if (!card) {
      console.info("pas de carte");
      return;
    }
    console.info("carte " + index);
    console.info("carte " + cards[index]);
    if (card.scrollHeight > card.clientHeight) {
      console.info("je suis ici");

      card.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      console.info("non la");

      const topPosition = card.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  });
});

// --------------- CAROUSEL DESSIN ---------------

document.querySelectorAll(".carousel-stage").forEach((stage) => {
  const slides = Array.from(stage.querySelectorAll(".slide"));
  const dotsEl = stage.parentElement.querySelector(".dots"); // supposé juste au-dessus
  let current = 0;

  // Création des dots pour ce carousel
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
      d.setAttribute("aria-selected", i === current ? "true" : "false")
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
    // Gère seulement si le carousel est visible à l'écran
    const rect = stage.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;

    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  });
});

// COPIE COLLE INFOS

// PHOTOGRAPHIE

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

// ----- MAIL -----

const textElementMail = document.querySelector(".cpc-ia-text-mail span");

textElementMail.addEventListener("click", () => {
  const text = textElementMail.innerText;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Texte copié dans le presse-papier !");
    })
    .catch((err) => {
      console.error("Impossible de copier : ", err);
    });
});

// ----- TEL -----

const textElementTel = document.querySelector(".cpc-ia-text-phone span");

textElementTel.addEventListener("click", () => {
  const text = textElementTel.innerText;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Texte copié dans le presse-papier !");
    })
    .catch((err) => {
      console.error("Impossible de copier : ", err);
    });
});

// CONTACT SYSTEM

document.getElementById("send-btn").addEventListener("click", function (e) {
  e.preventDefault();

  // Récupération des valeurs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("mail").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Merci de remplir tous les champs avant d’envoyer.");
    return;
  }

  // Adresse où tu veux recevoir les messages
  const destinataire = "robin.courte@mail.com"; // <-- remplace par ton adresse !

  // Sujet et contenu du mail
  const subject = `Message de ${name}`;
  const body = `Nom / Entreprise : ${name}\nEmail : ${email}\n\nMessage :\n${message}`;

  // Création du lien mailto
  const mailtoLink = `mailto:${destinataire}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Ouvre le client mail
  window.location.href = mailtoLink;
});

// CONTENT ABOUT

const discoverButtonAP = document.querySelector(".apct-discover");
const backButtonAP = document.querySelector(".ap-back");
const APcard = document.querySelector(".ap-card");

discoverButtonAP.onclick = function () {
  APcard.classList.add("open");
  backButtonAP.classList.add("open");
};

backButtonAP.onclick = function () {
  APcard.classList.remove("open");
  backButtonAP.classList.remove("open");
};
