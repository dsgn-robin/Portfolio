
const banner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("accept-cookies");
const rejectBtn = document.getElementById("reject-cookies");
const flou = document.querySelector(".ppc-active-back-portfolio");

window.addEventListener("load", () => {
  const choice = localStorage.getItem("cookies-consent");
  localStorage.removeItem("cookies-consent");

  if (!choice) {
    banner.style.display = "block";
    flou.style.display = "block";
  }
});

// Accepter
acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookies-consent", "accepted");
  banner.style.display = "none";
  flou.style.display = "none";

  // Ici tu peux activer Google Analytics etc.
});

// Refuser
rejectBtn.addEventListener("click", () => {
  localStorage.setItem("cookies-consent", "rejected");
  banner.style.display = "none";
  flou.style.display = "none";

  // Ici tu dois NE PAS activer les scripts de tracking
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



