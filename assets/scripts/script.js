const swiper = new Swiper(".mySwiper", {
  direction: 'vertical',
  // spaceBetween: 0.5,
  slidesPerView: 4,
  freeMode: false,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 5,
  direction: 'vertical',
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  thumbs: {
    swiper: swiper,
  },
});

