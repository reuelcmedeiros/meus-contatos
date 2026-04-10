let foto = document.getElementById('foto');
let nome = document.getElementById('nome');
let txtContato = document.getElementById('txtContato');
let clique = 0;

//script de aumentar foto de perfil

foto.addEventListener('click', function(){
if(clique %2 === 0)
{
foto.style.transform="scale(1)";
nome.style.opacity = "1.0"; 
txtContato.style.opacity = "1.0";

clique++;
}
else
{
foto.style.transform="scale(3)";
nome.style.opacity = "0.0";
txtContato.style.opacity = "0.0";
clique++;
}



})

