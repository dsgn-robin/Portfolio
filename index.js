const HomeButton = document.querySelector(".hp-button");
const HomePage = document.querySelector(".home-page");
const PortfolioPage = document.querySelector(".portfolio-page");
const Navbar = document.querySelector(".navbar");

const RideauDroite = document.querySelector(".rideaudroite");
const RideauGauche = document.querySelector(".rideaugauche");
const ArrowHome = document.querySelector(".ppdah-home");

// ---- Nouveau : cercle de chargement ----
// const ring = document.querySelector(".progress-ring");
// const radius = ring.r.baseVal.value;
// const circumference = 2 * Math.PI * radius;

// ring.style.strokeDasharray = `${circumference} ${circumference}`;
// ring.style.strokeDashoffset = circumference;

// let holdTimeout;
// let holding = false;

// HomeButton.addEventListener("mousedown", () => {
//   holding = true;
//   HomeButton.classList.add("holding");

//   ring.style.transition = "stroke-dashoffset 1.2s linear";
//   ring.style.strokeDashoffset = 0;

//   holdTimeout = setTimeout(() => {
//     if (holding) {
//       triggerHomeButton();
//     }
//   }, 1200);
// });

// HomeButton.addEventListener("mouseup", cancelHold);
// HomeButton.addEventListener("mouseleave", cancelHold);

// function cancelHold() {
//   holding = false;
//   HomeButton.classList.remove("holding");

//   clearTimeout(holdTimeout);

//   ring.style.transition = "stroke-dashoffset 0.2s";
//   ring.style.strokeDashoffset = circumference;
// }

// function triggerHomeButton() {
//   HomePage.classList.toggle("open");
//   RideauDroite.classList.toggle("open");
//   RideauGauche.classList.toggle("open");
// }

// ArrowHome.onclick = function () {
//   HomePage.classList.remove("open");
//   RideauDroite.classList.remove("open");
//   RideauGauche.classList.remove("open");
// };

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

// document.addEventListener("DOMContentLoaded", () => {
//   const discoverButtons = document.querySelectorAll(
//     '[class*="ppcf-b-discover-"]',
//   );
//   const backButton = document.querySelector(".ppc-back");
//   const allPages = document.querySelectorAll('[class*="ppc-page-"]');

//   const openPage = (id) => {

//     document.body.style.overflow = "hidden";

//     allPages.forEach((page) => {
//       page.classList.remove("open");
//       page.style.overflowY = "";
//       page.style.maxHeight = "";
//     });

//     const pageToOpen = document.querySelector(`.ppc-page-${id}`);
//     if (pageToOpen) {
//       pageToOpen.classList.add("open");

//       pageToOpen.style.overflowY = "auto";
//       pageToOpen.style.maxHeight = "100vh";
//     }

//     backButton?.classList.add("open");
//   };

//   const closePages = () => {
//     allPages.forEach((page) => {
//       page.classList.remove("open");
//       page.style.overflowY = "";
//       page.style.maxHeight = "";
//     });

//     document.body.style.overflow = "";

//     backButton?.classList.remove("open");
//   };

//   discoverButtons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const match = btn.className.match(/ppcf-b-discover-([a-zA-Z0-9_-]+)/);
//       if (!match) return;
//       const id = match[1];

//       openPage(id);
//     });
//   });

//   backButton?.addEventListener("click", closePages);

//   document.querySelectorAll('[class*="ppcp-return-"]').forEach((ret) => {
//     ret.addEventListener("click", closePages);
//   });
// });

// UP SYSTEM

// const boutonsUp = document.querySelector(".ppcp-up");

// const cards = [
//   ".ppcp-content-s",
//   ".ppcp-content-d",
//   ".ppcp-content-i",
//   ".ppcp-content-m",
//   ".ppcp-content-3",
//   ".ppcp-content-p",
//   ".ppcp-content-f",
//   ".ppcp-content-pr",
// ];

// boutonsUp.forEach((btn, index) => {
//   console.log("bouton " + index);
//   btn.addEventListener("click", () => {
//     const card = document.querySelector(cards[index]);

//     if (!card) {
//       console.info("pas de carte");
//       return;
//     }
//     console.info("carte " + index);
//     console.info("carte " + cards[index]);
//     if (card.scrollHeight > card.clientHeight) {
//       console.info("je suis ici");

//       card.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     } else {
//       console.info("non la");

//       const topPosition = card.getBoundingClientRect().top + window.scrollY;
//       window.scrollTo({
//         top: topPosition,
//         behavior: "smooth",
//       });
//     }
//   });
// });

// COPIE COLLE INFOS

// PHOTOGRAPHIE

// document.querySelectorAll(".dot-p").forEach((dot) => {
//   dot.addEventListener("click", () => {
//     const img = dot
//       .closest("div[class^='ppcpc-image-p-1-']")
//       .querySelector("img");

//     if (img) {
//       if (img.requestFullscreen) {
//         img.requestFullscreen();
//       } else if (img.webkitRequestFullscreen) {
//         img.webkitRequestFullscreen();
//       } else if (img.msRequestFullscreen) {
//         img.msRequestFullscreen();
//       }
//     }
//   });
// });

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
    subject,
  )}&body=${encodeURIComponent(body)}`;

  // Ouvre le client mail
  window.location.href = mailtoLink;
});

// CONTENT ABOUT

const discoverButtonAP = document.querySelector(".apct-discover");
const backButtonAP = document.querySelector(".ap-back");
const APcard = document.querySelector(".ap-card");
const ReturnButtonAP = document.querySelector(".ap-card-return");

discoverButtonAP.onclick = function () {
  // document.body.style.overflow = "hidden";

  APcard.style.overflowY = "auto";
  // APcard.style.maxHeight = "100vh";

  APcard.classList.add("open");
  backButtonAP.classList.add("open");
};

backButtonAP.onclick = function () {
  document.body.style.overflow = "";

  APcard.classList.remove("open");
  backButtonAP.classList.remove("open");
};

ReturnButtonAP.onclick = function () {
  document.body.style.overflow = "";

  APcard.classList.remove("open");
  backButtonAP.classList.remove("open");
};

console.log("Le script est arrivé au bout");

// CAROUSEL DOMAINES

document.querySelectorAll(".carousel-stage").forEach((stage) => {
  const slides = Array.from(stage.querySelectorAll(".slide"));
  const dotsEl = stage.parentElement.querySelector(".dots");
  let current = 0;

  // --- GÉNÉRATION DES DOTS (Inchangé) ---
  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", `Aller à la diapositive ${i + 1}`);
    b.addEventListener("click", () => goTo(i));
    dotsEl.appendChild(b);
  });
  const dots = Array.from(dotsEl.children);

  // --- ÉTATS POUR 5 POSITIONS ---
  function applyState(slide, state) {
    slide.style.zIndex = "1";

    switch (state) {
      case "center":
        slide.style.opacity = "1";
        slide.style.transform = "translate(-50%, -50%) scale(1) rotateY(0deg)";
        slide.style.zIndex = "5"; // Au-dessus de tout
        break;

      case "left-1": // Proche gauche
        slide.style.opacity = "0.6";
        slide.style.transform =
          "translate(-110%, -50%) scale(0.8) rotateY(20deg)";
        slide.style.zIndex = "4";
        break;

      case "right-1": // Proche droite
        slide.style.opacity = "0.6";
        slide.style.transform =
          "translate(10%, -50%) scale(0.8) rotateY(-20deg)";
        slide.style.zIndex = "4";
        break;

      case "left-2": // Loin gauche (la nouvelle)
        slide.style.opacity = "0.25";
        slide.style.transform =
          "translate(-160%, -50%) scale(0.6) rotateY(35deg)";
        slide.style.zIndex = "3";
        break;

      case "right-2": // Loin droite (la nouvelle)
        slide.style.opacity = "0.25";
        slide.style.transform =
          "translate(60%, -50%) scale(0.6) rotateY(-35deg)";
        slide.style.zIndex = "3";
        break;

      default: // Cachée
        slide.style.opacity = "0";
        slide.style.transform =
          "translate(-50%, -50%) scale(0.5) rotateY(0deg)";
    }
  }

  // --- LOGIQUE DE CALCUL POUR 5 IMAGES ---
  function render() {
    const n = slides.length;

    // On calcule les 4 index autour du centre
    const l1 = (current - 1 + n) % n; // Gauche proche
    const l2 = (current - 2 + n) % n; // Gauche loin
    const r1 = (current + 1) % n; // Droite proche
    const r2 = (current + 2) % n; // Droite loin

    slides.forEach((slide, i) => {
      if (i === current) applyState(slide, "center");
      else if (i === l1) applyState(slide, "left-1");
      else if (i === l2) applyState(slide, "left-2");
      else if (i === r1) applyState(slide, "right-1");
      else if (i === r2) applyState(slide, "right-2");
      else applyState(slide, "hidden");
    });

    dots.forEach((d, i) =>
      d.setAttribute("aria-selected", i === current ? "true" : "false"),
    );
  }

  // --- FONCTIONS DE NAVIGATION ---
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

  // --- CLIC SUR LES SLIDES (Modifié pour gérer les 4 slides latérales) ---
  stage.addEventListener("click", (e) => {
    const slideEl = e.target.closest(".slide");
    if (!slideEl) return;

    const idx = slides.indexOf(slideEl);
    const n = slides.length;

    // Si on clique sur n'importe quelle slide à gauche du centre, on recule
    if (idx === (current - 1 + n) % n || idx === (current - 2 + n) % n) {
      goPrev();
    }
    // Si on clique sur n'importe quelle slide à droite du centre, on avance
    else if (idx === (current + 1) % n || idx === (current + 2) % n) {
      goNext();
    }
  });

  render();

  window.addEventListener("keydown", (e) => {
    const rect = stage.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  });
});
