/*console.log('Hello World'); */

/* Es es pàra que la etiqueta con la clase .menu-btn detecte los click */
document.querySelector('.menu-btn').addEventListener('click',()=>{

   /* console.log('Click!!!')  ---- esto  muestra los click en consola */ 

    /* para aparecer y desaparecer el menu al hacer click*/
   document.querySelector ('.nav-menu').classList.toggle ('show') /* quita la clase chow */

});

/* para el efecto de Scroll Reveal */
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.newscards',{delay:500});
ScrollReveal().reveal('.cards-banner-one',{delay:500});
ScrollReveal().reveal('.cards-banner-two',{delay:500});