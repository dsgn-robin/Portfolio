const boutonUp = document.querySelector(".ppcp-up");
const card = document.querySelector(".ppcp-content-ep");

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


// 3D MODEL

// 1. Sélection des éléments du DOM
const modelViewer = document.querySelector('#mon-modele-variable');
const conteneur = document.querySelector('#conteneur-3d');
const toggleBtn = document.querySelector('#btn-toggle-rotate');
const btnFullscreen = document.querySelector('#btn-fullscreen');

// 2. Fonction pour changer de modèle 3D
function changerModele(nomFichier) {
  if (modelViewer) {
    modelViewer.src = nomFichier;
  }
}

// 3. Gestion de la rotation automatique (Play / Pause)
// Définition des SVG dans des variables
const svgPause = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">
  <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5"/>
</svg>`;
const svgPlay = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
</svg>`;

if (toggleBtn && modelViewer) {
  // Définir l'icône initiale
  toggleBtn.innerHTML = modelViewer.hasAttribute('auto-rotate') ? svgPause : svgPlay;

  toggleBtn.addEventListener('click', () => {
    if (modelViewer.hasAttribute('auto-rotate')) {
      modelViewer.removeAttribute('auto-rotate');
      toggleBtn.innerHTML = svgPlay;
    } else {
      modelViewer.setAttribute('auto-rotate', '');
      modelViewer.setAttribute('auto-rotate-delay', '1000');
      toggleBtn.innerHTML = svgPause;
    }
  });
}

const svgExpand = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"/>
</svg>`;
const svgClose = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-contract" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"/>
</svg>`;

// 4. Gestion du mode Plein Écran
// if (btnFullscreen && conteneur) {
//   btnFullscreen.addEventListener('click', () => {
//     if (!document.fullscreenElement) {
//       conteneur.requestFullscreen().catch(err => {
//         console.error(`Erreur plein écran : ${err.message}`);
//       });
//     } else {
//       document.exitFullscreen();
//     }
//   });

//   document.addEventListener('fullscreenchange', () => {
//     if (document.fullscreenElement) {
//       btnFullscreen.innerHTML = svgClose;
//     } else {
//       btnFullscreen.innerHTML = svgExpand;
//     }
//   });
// }

// Sélection du sélecteur de modèles
const selecteurModeles = document.querySelector('.selecteur-modeles');

if (btnFullscreen && conteneur) {
  btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      conteneur.requestFullscreen().catch(err => {
        console.error(`Erreur plein écran : ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  });

  // Synchronisation au changement d'état du plein écran
  document.addEventListener('fullscreenchange', () => {
    const isFullscreen = !!document.fullscreenElement;

    // 1. Mise à jour de l'icône du bouton plein écran
    btnFullscreen.innerHTML = isFullscreen ? svgClose : svgExpand;

    // 2. Masquer le texte des boutons du sélecteur en plein écran
    if (selecteurModeles) {
      const boutons = selecteurModeles.querySelectorAll('button');
      
      boutons.forEach(btn => {
        if (isFullscreen) {
          // Sauvegarde du texte original si pas encore fait
          if (!btn.dataset.text) {
            btn.dataset.text = btn.textContent;
          }
          btn.textContent = ''; // Efface le texte
        } else {
          // Restaure le texte d'origine quand on quitte le plein écran
          if (btn.dataset.text) {
            btn.textContent = btn.dataset.text;
          }
        }
      });
    }
  });
}

