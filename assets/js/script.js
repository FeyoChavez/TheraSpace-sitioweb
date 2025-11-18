const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

const toggleMenu = function(){
    navList.classList.toggle('active') // activa la propiedad active del css
    this.classList.toggle('active'); // intercala los iconos menu y close
}

navToggle.addEventListener('click', toggleMenu);

// header slideIn animation
const headerEle = document.querySelector('.header');
window.addEventListener('scroll', function(){
    if(this.scrollY > 50){
        headerEle.classList.add('active');
    } else {
        headerEle.classList.remove('active') 
        
    }
})

// copyright date
const date = document.querySelector('.date');
date.innerText = new Date().getFullYear(); // obtiene el anio actual y lo muestra en la clase date
