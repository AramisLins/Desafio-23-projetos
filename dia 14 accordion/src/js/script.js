const headers = document.querySelectorAll('.header')
const accordionItems = document.querySelectorAll(".accordion-item")


headers.forEach(function (header) {
    header.addEventListener('click', function () {
        // console.log('teste')

        const item = this.parentNode;
        const isActive = item.classList.contains("accordionAtivo")

        accordionItems.forEach(function (item) {
            item.classList.remove('accordionAtivo')
            item.classList.add('accordionFechado')
        })

        if (!isActive) {
            item.classList.add('accordionAtivo')
            item.classList.remove('accordionFechado')

        }

    })
})