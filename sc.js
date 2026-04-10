const foto = document.getElementById("foto");
const nome = document.getElementById("nome");
const txtContato = document.getElementById("txtContato");

// Efeito de aumentar suavemente ao passar o mouse
foto.addEventListener("mouseenter", () => {
  foto.style.transform = "scale(1.2)"; // 1.2 é elegante, 3.0 quebra o site
  nome.style.opacity = "0.2";
  txtContato.style.opacity = "0.2";
});

foto.addEventListener("mouseleave", () => {
  foto.style.transform = "scale(1)";
  nome.style.opacity = "1";
  txtContato.style.opacity = "1";
});

// Se quiser o clique para fixar o zoom (opcional):
let ampliado = false;
foto.addEventListener("click", () => {
  ampliado = !ampliado;
  foto.style.transform = ampliado ? "scale(1.5)" : "scale(1)";
});
