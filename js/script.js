import Animate from './Animate.js';
const animacao = new Animate();

(function animacoes(){
    const h1 = document.querySelector(".topo h1");
    const p = document.querySelector(".topo p");
    const icon = document.querySelector(".topo a");
    animacao.setAnimationWrite(h1);
    animacao.startAnimate(h1);
    animacao.setAnimationWrite(p);
    animacao.startAnimate(p);
    animacao.setAnimationOpacity(icon);
    window.addEventListener("load", () => animacao.startAnimate(icon));
    
})();

// DEBOUNCE DO LODASH
// FUNÇÃO USADA DENTRO DO FRAMEWORK LODASH
// ELA SEGURA A ANIMAÇÃO DA ANIMACAO_COMSCROLL POR ALGUNS SEGUNDOS PARA MELHORAR A PERFORMANCE DO SITE
const debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

(function animacao_rolagem(){
    const sobre = document.querySelector(".sobre");
    const projetos = document.querySelector(".projetos");
    const elementos = []
    elementos.push(sobre, projetos)
    animacao.setAnimationRight(sobre, 100);
    animacao.setAnimationDown(projetos, 100);
    
    
    function anima_scroll(){
        /* Distância entre a barra de scroll e o topo do site
           A divisão do window.innerHeight serve para a animação aparecer em 3/4 da tela do usuário */
        const altura_scroll = window.pageYOffset + ((window.innerHeight * 3) / 4);
        elementos.forEach(item => {        
            if((altura_scroll) > item.offsetTop){
                animacao.startAnimate(item);
            }            
        })
    }

    window.addEventListener("scroll", debounce(function ativa_animacao_scroll() {
        anima_scroll()  
    }, 100));

})();