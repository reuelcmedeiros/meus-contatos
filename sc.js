let foto = document.getElementById("foto");
let nome = document.getElementById("nome");

foto.addEventListener("click", function () {
  foto.style.transform = "scale(3)";
  nome.style.opacity = "0";
});

