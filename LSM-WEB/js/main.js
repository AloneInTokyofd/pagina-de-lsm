// Menú móvil accesible y pequeños detalles de la interfaz.
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú");
      menuButton.focus();
    }
  });
}

// Año automático en el pie de página.
const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

// Si el video todavía no existe o no puede cargarse, muestra la tarjeta informativa.
const video = document.querySelector(".project-video");
const placeholder = document.getElementById("video-placeholder");

if (video && placeholder) {
  video.addEventListener("loadedmetadata", () => {
    placeholder.hidden = true;
  });

  video.addEventListener("error", () => {
    placeholder.hidden = false;
  });

  // Comprobación inicial del recurso local.
  video.addEventListener("loadeddata", () => {
    placeholder.hidden = true;
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const logoLia = document.querySelector(".logo-lia");

  if (!logoLia) return;

  const enlaceLia = logoLia.closest("a");

  if (!enlaceLia) return;

  enlaceLia.href = "https://lia-cecyt16.onrender.com";
  enlaceLia.target = "_blank";
  enlaceLia.rel = "noopener noreferrer";

  enlaceLia.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});