document.addEventListener('DOMContentLoaded', function () {

    // Hero Thumbnail Swiper
    const heroThumbs = new Swiper('.heroThumbs', {
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: 10,
        watchSlidesProgress: true,
    });

    // Hero Main Swiper
    const heroSwiper = new Swiper('.heroSwiper', {
        loop: true,
        speed: 800,
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        thumbs: {
            swiper: heroThumbs,
        },
    });

    // Partner Swiper
    const partnerSwiper = new Swiper('.partnerSwiper', {
        loop: true,
        speed: 3000,
        slidesPerView: "auto",
        spaceBetween: 30,
        freeMode: true,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: { slidesPerView: 4, spaceBetween: 20 },
            768: { slidesPerView: 6, spaceBetween: 30 },
            1024: { slidesPerView: 10, spaceBetween: 50 },
        }
    });

    const feedbackSwiper = new Swiper('.feedbackSwiper', {
        loop: true,
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.feedback-next',
            prevEl: '.feedback-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
    });

    // Awards Swiper
    const awardsSwiper = new Swiper('.awardsSwiper', {
        loop: true,
        speed: 1000,
        slidesPerView: 6,
        spaceBetween: 40,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 20 },
            480: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
            1299: { slidesPerView: 6, spaceBetween: 30 },
        }
    });

    // Initialize Fancybox
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });
});