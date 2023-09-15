new Swiper('.swiper', {
    navigation: {
        nextEl: '.portfolio__arrow_right',
        prevEl: '.portfolio__arrow_left',
        disabledClass: 'portfolio__arrow_disable',
      },
      breakpoints: {
        480: {
            grid: {
                fill: 'row',
                rows: 2
            }
        },

        768: {
            slidesPerView: 2,
            grid: {
                fill: 'row',
                rows: 2
            }
        }

        }
});


$('.header__contacts-burger').click(function() {
    $('.header__contacts').slideToggle();
})


/* можно было функцию как в примере выше, это просто другой вариант */
$('.present__order-btn').click(() => {
    $('.page__overlay_modal').show(400);
})   

/* 
show(400)  - 400 ms

 $('.page__overlay_modal').slideToggle(400)
 slideToggle(400).css('display', 'flex') - будет открываться сверху
 .fadeIn - плавно открыть
 .fadeOut - плавно закрыть
 */

$('.modal__close').click(() => {
    $('.page__overlay_modal').hide(400);
}) 

/*
$('.page__overlay').click((event) => {
    if ($(event.target).hasClass('page__overlay')) {
        $('.page__overlay_modal').hide(400);
    }    
}) 
*/

$('.page__overlay').click((event) => {
    if (event.target.classList.contains('page__overlay')) {
        $('.page__overlay_modal').hide(400);
    }    
}) 

