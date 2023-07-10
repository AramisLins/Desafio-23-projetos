const cpfEl = document.querySelector("#cpf")
const gerarCpfBtn = document.querySelector("#gerar-cpf")
const copiarCpfBtn = document.querySelector("#copiar-cpf")

function gerarCPF(){
    let n = Math.floor(Math.random()* 999999999) + 1
    let nStr = n.toString().padStart(9, '0')
    let dv1 = calcurarDV(nStr, 10)
    let dv2 = calcurarDV(nStr + dv1, 11)

    cpfEl.innerText = formmatarCPF(nStr + dv1 + dv2)
}

function calcurarDV(numero, peso){
    let total = 0
    for(let i = 0; i < numero.length; i++){
        total += parseInt(numero.charAt(i)) * peso--
    }
    let resto = total % 11
    return resto < 2 ? 0 : 11 - resto
}

function formmatarCPF(cpf){
    const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/
    return cpf.replace(regex, '$1.$2.$3-$4')
}

function copiarCPF(){
    const cpf = cpfEl.innerText
    navigator.clipboard.writeText(cpf).then(() =>{
        alert(`CPF ${cpf} copiado para área de transferência`)
    }),
    (err) =>{
        console.log('erro ao copiar o cpf')
    }
}

gerarCpfBtn.addEventListener('click', gerarCPF)
copiarCpfBtn.addEventListener('click', copiarCPF)