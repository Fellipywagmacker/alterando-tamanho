let tamanho = 2;
function altPalavra() {
    h1 = document.querySelector('h1');
    h1.style.fontSize = `${tamanho}em`;
}

function aumPalvra() {
    tamanho += 0.5;
    altPalavra();
}

function dimPalavra() {
    if (tamanho > 0) {
    tamanho -= 0.5;
    altPalavra();
    }
}
