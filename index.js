var setaParaDireita = window.document.getElementById("seta-para-direita")
var Bruna = window.document.getElementById("bruna")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var setaParaEsquerda = window.document.getElementById("seta-para-esquerda")

function RolarParaDireita() {
    
    Leonardo.style = "display:none"
    setaParaDireita.style = "display:none"
    setaParaEsquerda.style = "display:flex; margin-top: 55px"
    Bruna.style = "display:flex"
    
}

function RolarParaEsquerda() {
    Bruna.style = "display:none"
    Leonardo.style = "display:flex"
    setaParaDireita.style = "display:flex; margin-top: 55px"
    setaParaEsquerda.style = "display:none"
}
