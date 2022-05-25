document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});

function iniciarApp(){
    agregarBarra();
    navScroll();
}

function agregarBarra(){
    const barra = document.querySelector('header');
    const sobreLeones = document.querySelector('.sobre-leones');
    const body = document.querySelector('body')
    
    window.addEventListener('scroll',function(){
        if(sobreLeones.getBoundingClientRect().top < 0){
            barra.classList.add('fijo');
            body.classList.add('body-scroll')
        }else{
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll')
        }
    })
}

function navScroll(){
    const nav = document.querySelectorAll('.navegacion-principal a');
    nav.forEach(nav => {
        nav.addEventListener('click', function(e){
            e.preventDefault();
            const selectScroll = e.target.attributes.href.value;
            const seleccionado = document.querySelector(selectScroll);
            seleccionado.scrollIntoView({behavior: "smooth"})
        })
    })
}