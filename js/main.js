let burger = document.getElementById('burger');
let menu = document.querySelector('.menu')

burger.addEventListener('click', () =>{
    burger.classList.toggle('abierto');
    menu.classList.toggle('abierto');
})
