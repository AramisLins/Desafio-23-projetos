
const topo = document.querySelector('#topo')



window.addEventListener('scroll', function (){

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if(scrollTop > 500){
        topo.style.display = 'block'
    } else {
        topo.style.display = 'none'
    }
})


topo.addEventListener('click', function(e){
    e.preventDefault()
    window.scrollTo({
        top: 0,
        behavior : "smooth"
    })
})