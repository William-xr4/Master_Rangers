var imagem_objeto ="";
var canvas = new fabric.Canvas("canvas");
var pos_x;
var pos_y;

function atualiza_imagem(imagem, largura, altura){
    fabric.Image.fromURL(imagem, function(img){
        imagem_objeto=img;
        imagem_objeto.scaleToWidth(largura);
        imagem_objeto.scaleToHeight(altura);
        imagem_objeto.set({
            top:pos_y, 
            left:pos_x
        });
        canvas.add(imagem_objeto);
    });
}
window.addEventListener("keydown", tecla_pressionada);

function tecla_pressionada(evento){
    var tecla =evento.keyCode;

    if(tecla=="69"){
        pos_x =-60;
        pos_y =300;
        atualiza_imagem("br_M.R.png", 150, 250);
        console.log("e foi pressionada");
    }
    if(tecla=="86"){
        pos_x =200;
        pos_y =250;
        atualiza_imagem("gr.png", 200, 300);
        console.log("v foi pressionada");
    }
    if(tecla=="65"){
        pos_x =330;
        pos_y =250;
        atualiza_imagem("pr.png", 140, 240);
        console.log("a foi pressionada");
    }
    if(tecla=="82"){
        pos_x =440;
        pos_y =250;
        atualiza_imagem("rr1.png", 200, 280);
        console.log("r foi pressionada");
    }
    if(tecla=="73"){
        pos_x =600;
        pos_y =250;
        atualiza_imagem("yr.png", 200, 280);
        console.log("i foi pressionada");
    }
}