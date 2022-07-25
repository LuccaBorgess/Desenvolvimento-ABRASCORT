let fundo = document.getElementById("fundo-logo")
let caminhao = document.getElementById("fundo-caminhao")
let botao = document.getElementById("botao-paralax")
let texto = document.getElementById("texto-paralax")

window.addEventListener('scroll', function() {
    var value = window.scrollY;

    caminhao.style.top = value * 0.5 + 'px';
})
