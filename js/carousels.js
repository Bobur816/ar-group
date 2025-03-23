$(window).on("load", () => {
  const head = new Swiper(".carousel__head", {
    loop: true,
    spaceBetween: 20,
  });

  const team = new Swiper(".carousel__team", {
    spaceBetween: 30,
    rtlTranslate: false,
    // drection: "rtl",
    fadeEffect: {
      crossFade: true,
    },

    navigation: {
      nextEl: ".team__next",
      prevEl: ".team__prev",
    },
  });
});
