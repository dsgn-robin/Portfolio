const banner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("accept-cookies");
const rejectBtn = document.getElementById("reject-cookies");
const flou = document.querySelector(".ppc-active-back-portfolio");

/* =========================
   🔵 FONCTIONNALITÉS
========================= */

// 👉 Fonction analytics (Google Analytics par exemple)
function enableAnalytics() {
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", "G-XXXXXXX");
}

// 👉 Fonction marketing (ex: pixel Meta si un jour tu l’ajoutes)
function enableMarketing() {
  console.log("Marketing cookies activés");
}

// 👉 Fonction stockage préférences
function saveConsent(value) {
  localStorage.setItem("cookies-consent", value);
  localStorage.setItem("cookies-date", new Date().toISOString());
}

/* =========================
   🚀 ACCEPTATION
========================= */

acceptBtn.addEventListener("click", () => {
  saveConsent("accepted");
  banner.style.display = "none";
  flou.style.display = "none";
  

  // 🟢 activation des fonctionnalités
  enableAnalytics();
  enableMarketing();
});

/* =========================
   🚫 REFUS
========================= */

rejectBtn.addEventListener("click", () => {
  saveConsent("rejected");
  banner.style.display = "none";
  flou.style.display = "none";

  // 🔴 rien n’est activé
  console.log("Cookies analytiques refusés");
});

/* =========================
   🔄 AU CHARGEMENT
========================= */

window.addEventListener("DOMContentLoaded", () => {
  const consent = localStorage.getItem("cookies-consent");

  if (!consent) {
    banner.style.display = "block";
    flou.style.display = "block";
    return;
  }

  if (consent === "accepted") {
    enableAnalytics();
    enableMarketing();
    banner.style.display = "none";
    flou.style.display = "none";
  }

  if (consent === "rejected") {
    console.log("Mode sans cookies activé");
    banner.style.display = "none";
    flou.style.display = "none";
  }
});
// ----- FLÉCHES SYSTÈME -----

const PortfolioPage = document.querySelector(".portfolio-page");
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

// ----- DÉPLACEMENT -----

let position = "HOME";

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    if (position === "HOME") {
      allerADroite();
    } else if (position === "GAUCHE") {
      retourAuCentreG();
    }
  } else if (event.key === "ArrowLeft") {
    if (position === "HOME") {
      allerAGauche();
    } else if (position === "DROITE") {
      retourAuCentreD();
    }
  }
});

function allerADroite() {
  position = "DROITE";

  PortfolioPage.style.transform = "translateX(-100%)";
  AboutPage.style.transform = "translateX(0%)";
}

function allerAGauche() {
  position = "GAUCHE";

  PortfolioPage.style.transform = "translateX(100%)";
  ContactPage.style.transform = "translateX(0%)";
}

function retourAuCentreG() {
  position = "HOME";
  PortfolioPage.style.transform = "translateX(0%)";
  ContactPage.style.transform = "translateX(-100%)";
}

function retourAuCentreD() {
  position = "HOME";
  PortfolioPage.style.transform = "translateX(0%)";
  AboutPage.style.transform = "translateX(100%)";
}

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

// ----- ENVOYER UN MESSAGE -----

document
  .getElementById("send-btn")
  .addEventListener("click", async function (e) {
    e.preventDefault();

    const nameField = document.getElementById("name");
    const emailField = document.getElementById("mail");
    const messageField = document.getElementById("message");
    const sendBtn = document.getElementById("send-btn");

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();

    if (!name || !email || !message) {
      alert("Merci de remplir tous les champs avant d’envoyer.");
      return;
    }

    const formspreeUrl = "https://formspree.io/f/xdazzzev";

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    sendBtn.textContent = "Envoi...";
    sendBtn.style.opacity = "0.5";
    sendBtn.disabled = true;

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("C'est envoyé ! Merci Robin te répondra bientôt.");
        nameField.value = "";
        emailField.value = "";
        messageField.value = "";
      } else {
        alert("Oups ! Un problème est survenu. Vérifie ton email.");
      }
    } catch (error) {
      alert("Erreur de connexion. Vérifie ton réseau.");
    } finally {
      sendBtn.textContent = "Envoyer";
      sendBtn.style.opacity = "1";
      sendBtn.disabled = false;
    }
  });



