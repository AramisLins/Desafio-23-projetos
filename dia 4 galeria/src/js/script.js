const itemGaleria = document.querySelectorAll('.itemGaleria')
const lightbox = document.querySelector('.lightbox')
const lightboxImage = document.querySelector('.lightboxImage')
const lightboxClose = document.querySelector('.lightboxFechar')

itemGaleria.forEach((item) =>{
    item.addEventListener('click', ()=>{
        const imageUrl = document.querySelector('.galeriaImagem').getAttribute('data-src')
        lightboxImage.setAttribute('src', imageUrl)
        lightbox.style.display = 'flex'
    })
})

lightboxClose.addEventListener('click',() => {
    lightbox.style.display = 'none'
})