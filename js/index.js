const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
console.log(menuLinks)

function distanciaDotopo(element){
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativascroll(distanciaDotopo) {  
    window.scroll({
        top: distanciaDotopo,
        behavior: "smooth",
    });
}
function scrollToSection(event){
    event.preventDefault();
    const distanciaTop = distanciaDotopo(event.target) - 100;
    nativascroll(distanciaTop);

}

menuLinks.forEach((link) =>{
    link.addEventListener('click', scrollToSection);
})

const menu = document.querySelector('#menus')
menu.addEventListener('click',function(){
   let menuMobile = document.querySelector('.menuMobile')
    if(menuMobile.classList.contains('none')){
        menuMobile.classList.remove('none')
        menuMobile.classList.add('flex')
    }else if(menuMobile.classList.contains('flex')){
        menuMobile.classList.remove('flex')
        menuMobile.classList.add('none')
    }
})

var li = document.querySelectorAll('.li')
for(i = 0; i < li.length; i++) {
    li[i].addEventListener('click',function(){
        let menuMobile = document.querySelector('.menuMobile')
        menuMobile.classList.remove('flex')
        menuMobile.classList.add('none')
    })
}