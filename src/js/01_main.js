function mainSlider() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 1200,
        autoplay: true,
        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
    })
}

document.addEventListener("DOMContentLoaded", ready);

function ready() {

    mainSlider()
}