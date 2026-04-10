let foto = document.getElementById('foto');
let nome = document.getElementById('nome');
let txtContato = document.getElementById('txtContato');
let botoes = document.getElementsByClassName('botao');

//foto aumenta ao passar o mouse

foto.addEventListener('mouseenter', function(){
if(clique %2 === 0)
foto.style.transform="scale(3)";
nome.style.opacity = "0.0"; 
txtContato.style.opacity = "0.0";
})
foto.addEventListener('mouseleave', function(){
if(clique %2 === 0)
foto.style.transform="scale(1)";
nome.style.opacity = "1.0"; 
txtContato.style.opacity = "1.0";
})

/////////////////////////////////////////////////////////////////////

//glow nos botoes
/*
botoes.addEventListener('mouseenter', function()
{

})
*/