let foto = document.getElementById('foto');
let nome = document.getElementById('nome');
let txtContato = document.getElementById('txtContato');
//let botoes = document.getElementsByClassName('botao');

//foto aumenta ao passar o mouse

foto.addEventListener('mouseenter', function(){
foto.style.transform="scale(2)";
nome.style.opacity = "0.0"; 
txtContato.style.opacity = "0.0";
})

foto.addEventListener('mouseleave', function(){
foto.style.transform="scale(1)";
nome.style.opacity = "1.0"; 
txtContato.style.opacity = "1.0";
})
// Hamburger Menu
const hamburgerMenu = document.getElementById('hamburgerMenu');
const sobreMimModal = document.getElementById('sobreMimModal');
const fecharModal = document.getElementById('fecharModal');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  sobreMimModal.classList.toggle('active');
});

fecharModal.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
  sobreMimModal.classList.remove('active');
});

// Fechar clicando fora
sobreMimModal.addEventListener('click', (e) => {
  if (e.target === sobreMimModal) {
    hamburgerMenu.classList.remove('active');
    sobreMimModal.classList.remove('active');
  }
});
