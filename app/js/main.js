
//SLICK-SLIDER

/* $(function () {
    $('.product').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images//icons/slider-arrow-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images//icons/slider-arrow-right.svg" alt="arrow"></button>',
    });
}); */


//Добавляем при наведении на товар картинка увеличивается scale.

const imgScale = document.querySelectorAll('.product-item__img');

imgScale.forEach(item => {
    item.classList.add('img__scale');
}); 


//Подключение мобильного меню.

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', function() {
    menuList.classList.toggle('menu__list--active');
});


