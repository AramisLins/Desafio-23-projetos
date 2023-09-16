const popup = document.querySelector("#popup")
const cancelarBotao = document.querySelector("#cancelar")

//removendo o item quando recarregar a pagina
localStorage.removeItem("popupDisplayed")


document.addEventListener("mouseout", (event) =>{

    //checagem se foi exibido ou não
    const popupDisplayed = localStorage.getItem("popupDisplayed")


    if(!popupDisplayed && event.relatedTarget === null){
        popup.style.display = "block"
    }
})


cancelarBotao.addEventListener("click", ()=>{
    popup.style.display = "none"

    //fazendo um controle para que toda vez que saia não ative o popup
    localStorage.setItem("popupDisplayed", true)

})