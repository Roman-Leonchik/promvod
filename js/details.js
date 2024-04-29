const swiperDetails = new Swiper('.js-swiper-details', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        960: {
            slidesPerView: 6,
        },
        480: {
            slidesPerView: 4,
        },
    },
});

const swiperDetailsList = new Swiper('.js-swiper-details-list', {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiperDetails,
    },
});