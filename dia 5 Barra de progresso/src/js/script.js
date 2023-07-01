const barradeProgresso = document.querySelector('.progresso')
const botaoPassar = document.querySelector('#btnNext')
const botaoVoltar = document.querySelector('#btnVoltar')

let progress = 0

function attProgresso(){
    barradeProgresso.style.width = progress + '%'
}

function aummentarProgresso(){
    progress += 25
    if(progress > 100) progress = 100;
    attProgresso()
}
function diminuirProgresso(){
    progress -= 25
    if(progress < 0) progress = 0;
    attProgresso()
}

botaoPassar.addEventListener('click', aummentarProgresso)
botaoVoltar.addEventListener('click', diminuirProgresso)
