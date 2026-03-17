const palabras = ["Mamá", "La Abuela", "La Tía", "La Nona"];
let indice = 0;

setInterval(() => {
  const rotador = document.getElementById("rotator");
  rotador.style.opacity = 0; // desaparece

  setTimeout(() => {
    indice = (indice + 1) % palabras.length;
    rotator.textContent = palabras[indice];
    rotator.style.opacity = 1; // aparece
  }, 500);
}, 2000);

const checkbox = document.getElementById("check-menu");

document.querySelectorAll(".check-menu a").forEach(link => {
  link.addEventListener("click", () => {
    checkbox.checked = false;
  });
});

document.addEventListener("click", (e) => {
  if (!document.querySelector(".check-menu").contains(e.target) &&
      !document.querySelector("label[for='check-menu']").contains(e.target)) {
    checkbox.checked = false;
  }
});