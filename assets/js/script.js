const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

const toggleMenu = function(){
    navList.classList.toggle('active') // activa la propiedad active del css
    this.classList.toggle('active'); // intercala los iconos menu y close
}

navToggle.addEventListener('click', toggleMenu);