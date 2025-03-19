$(window).on("load", () => {
  const aboutUs = new Swiper(".carousel__about-us", {
    loop: true,
    spaceBetween: 30,
    fadeEffect: {
      crossFade: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".services__carousel-next",
      prevEl: ".services__carousel-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      400: {
        slidesPerView: 1.2,
        // spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      768: {
        slidesPerView: 4,
        // spaceBetween: 40,
      },
    },
  });

  const projects = new Swiper(".carousel__projects", {
    loop: true,
    spaceBetween: 30,
    fadeEffect: {
      crossFade: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".projects__carousel-next",
      prevEl: ".projects__carousel-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      400: {
        slidesPerView: 1.2,
        // spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        // spaceBetween: 40,
      },
    },
  });

  const news = new Swiper(".carousel__news", {
    loop: true,
    spaceBetween: 30,
    fadeEffect: {
      crossFade: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".news__carousel-next",
      prevEl: ".news__carousel-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      400: {
        slidesPerView: 1.2,
        // spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      768: {
        slidesPerView: 4,
        // spaceBetween: 40,
      },
    },
  });

  const testimonials = new Swiper(".carousel__testimonials", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    speed: 500,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".carousel_testimonials-next",
      prevEl: ".carousel_testimonials-prev",
    },

    // And if we need scrollbar

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });

  const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper(".mySwiper2", {
    // spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
});
