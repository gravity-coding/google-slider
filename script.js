var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.ri-arrow-right-s-line',
        prevEl: '.ri-arrow-left-s-line',
    },
});