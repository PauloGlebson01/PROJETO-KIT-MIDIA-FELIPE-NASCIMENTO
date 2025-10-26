const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

// Abrir/fechar menu mobile
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Fechar menu ao clicar no overlay
overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
  menuToggle.classList.remove("active");
});

// Scroll suave e fechar menu ao clicar em link
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
    menu.classList.remove("active");
    overlay.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});
