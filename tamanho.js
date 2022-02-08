let tamanho = 2;
let titulo = document.querySelector("h1");
if (titulo == null){
    titulo = document.querySelector("h2");
    if (titulo == null){
        titulo = document.querySelector("h3");
        if (titulo == null){
            titulo = document.querySelector("h4");
            if (titulo == null){
                titulo = document.querySelector("h5");
                if (titulo == null){
                    titulo = document.querySelector("h6");
                }
            }
        }
    }
}
if (titulo != null){
    botoes();
}
function atualiza() {
    titulo.style.fontSize = `${tamanho}em`
}
function aumPalavra() {
    if (tamanho < 7){
    tamanho += 0.25;
    atualiza();
}}

function dimPalavra() {
    if (tamanho > 1) {
        tamanho -= 0.25;
    atualiza();
}}
function botoes(){ 
cresce = document.createElement("button") ;
cresce.setAttribute("onclick","aumPalavra()")
dimunui = document.createElement("button");
dimunui.setAttribute("onclick","dimPalavra()")
cresce.textContent = "+";
dimunui.textContent = "-";
document.body.prepend(cresce);
document.body.append(dimunui);
}
