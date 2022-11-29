var canvas = document.getElementById("canvas");
var contexto = canvas.getContext("2d");
var altura_do_jogador = 180;
var largura_do_jogador = 190;

if(tecla=="84"){
    atualiza_bloco("br_M.R.png");
    console.log("a foi pressionada");
}
if(tecla=="69"){
    atualiza_bloco("_M.R.png");
    console.log("b foi pressionada");
}
if(tecla=="67"){
    atualiza_bloco("_M.R.png");
    console.log("c foi pressionada");
}
if(tecla=="68"){
    atualiza_bloco("_M.R.png");
    console.log("d foi pressionada");
}
if(tecla=="69"){
    atualiza_bloco("_M.R.png");
    console.log("e foi pressionada");
}