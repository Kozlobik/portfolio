if(window.innerWidth <= 631){

// Находим элементы в константы.

    const burger = document.querySelector('.burger')
    const fadeBlock = document.querySelector('.fade-block')
    const mobileMenu = document.querySelector('.header__mobile-menu-list')
    const menuLink = document.querySelectorAll('.menu-link')
    const burgerLines = document.querySelectorAll('.burger__line')

// Вешаем прослушку элемента на бургер.

burger.addEventListener('click',function () {
console.log('rrrrufjrthegdgjdgjsgj');
    mobileMenu.classList.toggle('active')


    burgerLines.forEach((item)=>{
        item.classList.toggle('active')
    })

    fadeBlock.classList.toggle('active')
})

// Прослушиваем ссылки мобильного меню, при клике на ссылку закрываетсяя меню и сайт скролится на определённую секцию.

menuLink.forEach(function(item){
    item.addEventListener('click', function(){
        burger.classList.remove('active')
        mobileMenu.classList.remove('active')
        fadeBlock.classList.remove('active')
        burgerLines.forEach((item)=>{
            item.classList.toggle('active')
        })
    })
})

}
