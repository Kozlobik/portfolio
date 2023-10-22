const fadeBlockHeader = document.querySelector('.fade-block-header')
const fadeBlockSkills = document.querySelector('.fade-block-skills')

if(window.innerWidth <= 631){

// Находим элементы в константы.

    const burger = document.querySelector('.burger')
    const mobileMenu = document.querySelector('.header__mobile-menu-list')
    const menuLink = document.querySelectorAll('.menu-link')
    const burgerLines = document.querySelectorAll('.burger__line')
    
    // Вешаем прослушку элемента на бургер.
    
    burger.addEventListener('click',function () {
        mobileMenu.classList.toggle('active')
        fadeBlockHeader.classList.toggle('active')

    burgerLines.forEach((item)=>{
        item.classList.toggle('active')
    })
    
})

// Прослушиваем ссылки мобильного меню, при клике на ссылку закрываетсяя меню и сайт скролится на определённую секцию.

menuLink.forEach(function(item){
    item.addEventListener('click', function(){
        burger.classList.remove('active')
        mobileMenu.classList.remove('active')
        burgerLines.forEach((item)=>{
            item.classList.toggle('active')
        })
        fadeBlockHeader.classList.toggle('active')
    })
})

}

const cardBtn = document.querySelectorAll('.card-btn')
const cross = document.querySelectorAll('.skill-card-cross')

cross.forEach(function(item){
    item.addEventListener('click', function(event){
        event.target.closest('.skill-card').classList.remove('active')
        fadeBlockSkills.classList.remove('active')
        document.querySelector('body').classList.remove('active')
    })
})

cardBtn.forEach(function(item){
    item.addEventListener('click', function(event){
        document.querySelector('body').classList.add('active')
        event.target.closest('.skill-card').classList.add('active')
        fadeBlockSkills.classList.add('active')
    })
})

// Form animation

const placeholder = document.querySelectorAll('[data-placeholder]');

placeholder.forEach(function(item){

    item.addEventListener('focus', function () {
        item.nextElementSibling.classList.add('focus')
        item.classList.add('focus')
    })

    item.addEventListener('blur', function () {
        if (item.value.length > 0){
            item.nextElementSibling.classList.add('focus')
            item.classList.add('focus')
        }
        else{
            item.nextElementSibling.classList.remove('focus')
            item.classList.remove('focus')
        }
        
    })
}
)