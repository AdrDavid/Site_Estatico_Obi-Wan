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
    const distanciaTop = distanciaDotopo(event.target) - 120;
    nativascroll(distanciaTop);

}

menuLinks.forEach((link) =>{
    link.addEventListener('click', scrollToSection);
})