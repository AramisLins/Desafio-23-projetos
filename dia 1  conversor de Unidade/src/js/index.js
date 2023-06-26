
const inputElement = document.querySelector('#input')
const fromElement = document.querySelector('#from')
const toElement = document.querySelector('#to')
const saida = document.querySelector('#resultado')
const botaoConversao = document.querySelector('#conversor')
const mensagemElement = document.querySelector('#mensagem')

function conversor(){
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if(fromValue == toValue){
        saida.value = inputElement.value
        mensagemElement.textContent = ''
        return;
    }
    //Converter a entrada para metros
    let meters;
    switch(fromValue){
        case 'm':
            meters = inputElement.value
            break;
        case 'km':
            meters = inputElement.value * 1000
            break;
        case 'cm':
            meters = inputElement.value / 100
            break;
        case 'mm':
            meters = inputElement.value / 1000
            break;

    }

    //Converter metros para unidade de saída
    let result;
    switch(toValue){
        case 'm':
            result = meters
            break;
        case 'km':
            result = meters / 1000
            break;
        case 'cm':
            result = meters * 100
            break;
        case 'mm':
            result = meters * 1000
            break;

    }
    //Exibir resultado no input
    saida.value = result

    //Exibir resultado na mensagem
    const fromLabel = fromElement.options[fromElement.selectedIndex].text
    const toLabel = toElement.options[toElement.selectedIndex].text

    const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`
    mensagemElement.textContent = message

}

botaoConversao.addEventListener('click', conversor)