const swup = new Swup({
  containers: ["#mobile-nav", "#nav", "#swup"], // Endi nav va content birga yuklanadi
});

// Hamma button, slider yoki boshqa JS kodingni shu function ichiga yoz
function initScripts() {
  // ______________________________header__scroll_________________________________
  let rootFont = parseInt($(":root").css("font-size"));
  let scroll = $(window).scrollTop();
  scroll > rootFont * 2 ? $(".header").addClass("header__scrolled") : $(".header").removeClass("header__scrolled");

  $(document).on("scroll", function () {
    let rootFont = parseInt($(":root").css("font-size"));
    let scroll = $(window).scrollTop();
    scroll > rootFont * 2 ? $(".header").addClass("header__scrolled") : $(".header").removeClass("header__scrolled");
  });

  // ______________________________.mobile__toggler________________________________

  $(".mobile-nav__open").on("click", function () {
    $(".mobile-nav").fadeIn(300);
    setTimeout(() => {
      $(".mobile-nav__wrapper").slideDown(300);
    }, 300);
    setTimeout(() => {
      $(".mobile-nav__close").fadeIn(100);
    }, 700);
  });
  $(".mobile-nav__close").on("click", function () {
    $(".mobile-nav__close").fadeOut(100);
    $(".mobile-nav__wrapper").slideUp(300);
    setTimeout(() => {
      $(".mobile-nav").fadeOut(300);
    }, 300);
  });
  $(".mobile-nav__list__link").on("click", function () {
    setTimeout(() => {
      $(".mobile-nav").fadeOut(300);
      $(".mobile-nav__wrapper").slideUp(300);
    }, 200);
  });

  // ______________________________popup_________________________________
  $(".corner-call-btn").on("click", function () {
    $(".popup-call-form").fadeIn(300);
  });

  $(".call-form__open").on("click", function () {
    $(".popup-call-form").fadeIn(300);
  });

  $(".popup__close").on("click", function () {
    $(".popup").fadeOut(300);
  });

  $(".popup-mini__form").on("submit", function (e) {
    e.preventDefault();
    $(".popup-call-form").fadeOut(300);
    $(".successful").fadeIn(300);
    setTimeout(() => {
      $(".popup__form input").val("");
    }, 700);
  });

  $(".callback-form").on("submit", function (e) {
    e.preventDefault();
    $(".successful").fadeIn(300);
    setTimeout(() => {
      $(".callback-form input").val("");
    }, 700);
  });

  $(".popup").click((e) => {
    let div = $(".popup__wrapper");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".popup").fadeOut(400);

      setTimeout(() => {
        $(".popup__form input").val("");
      }, 700);
    }
  });

  function applyMask() {
    $(".form_tel").inputmask("remove"); // eski maskani o‘chirish
    $(".form_tel").inputmask({
      mask: "+\\9\\98 99 999 99 99",
    });
  }

  applyMask();

  // ______________________________splides_________________________________

  let splide1;
  let splide2;

  function createSplide() {
    splide1 = new Splide("#auto-scroll-slider", {
      type: "loop",
      drag: true,
      arrows: false,
      pagination: false,
      fixedWidth: "15rem",
      gap: "1.5rem",
      direction: document.documentElement.dir === "rtl" ? "rtl" : "ltr",
      autoScroll: {
        speed: 1,
        pauseOnHover: true,
        pauseOnFocus: true,
      },
      breakpoints: {
        768: { fixedWidth: "8rem", gap: "0.5rem" },
      },
    }).mount(window.splide.Extensions);

    splide2 = new Splide("#auto-scroll-slider-right", {
      type: "loop",
      drag: true,
      arrows: false,
      pagination: false,
      fixedWidth: "auto",
      gap: "1.5rem",
      updateOnMove: true,
      swipeThreshold: false,
      direction: document.documentElement.dir === "rtl" ? "rtl" : "ltr",

      autoScroll: {
        speed: 1,
        pauseOnHover: true,
        pauseOnFocus: true,
      },
      breakpoints: {
        768: { fixedWidth: "auto" },
      },
    }).mount(window.splide.Extensions);
  }

  function destroySplides() {
    splide1.destroy();
    splide2.destroy();
  }

  createSplide();

  // ______________________________language_________________________________

  function toggleRTL(lang) {
    const isRtl = lang === "Ar";
    if (isRtl) {
      document.documentElement.setAttribute("dir", "rtl");
      $(".form_tel").css("text-align", "right");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      $(".form_tel").css("text-align", "left");
    }

    destroySplides();
    createSplide();
    applyMask();
  }

  $(".language__open").on("click", function (e) {
    $(this).parent().find(".language__body").slideToggle(300);
    $(".language__open").toggleClass("active");
  });

  $(".language__body").on("click", function (e) {
    const langEl = e.target.closest(".lang-el");
    $(".language__open span").text(langEl.textContent);
    $(".language__open").removeClass("active");
    $(this).slideToggle(300);

    toggleRTL(langEl.textContent);
  });

  // _________________________________________service-toggler___________________________________________

  $(".services-item .plus-toggle").on("click", function () {
    let parentEl = $(this).closest(".services-item");

    if (parentEl.hasClass("active")) {
      parentEl.removeClass("active");
      parentEl.find(".services-item__body").slideUp(400);
      $(this).removeClass("active");
    } else {
      $(".services-item__body").slideUp(400);
      $(".plus-toggle").removeClass("active");

      $(".services-item").removeClass("active");
      parentEl.addClass("active");

      parentEl.find(".services-item__body").slideDown(400);
      $(this).addClass("active");
    }
  });

  // ______________________________cards-show__more-btn_________________________________

  $(".cards-show__more-btn").on("click", function () {
    $(this).parent().hide();
    $(this).parent().parent().find(".for__more").show();
  });

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
}

// Boshlang‘ich sahifada ham ishlatish uchun chaqiramiz
initScripts();

// Har safar sahifa o‘zgarganda qayta yuklash uchun
swup.hooks.on("page:view", () => {
  initScripts();
});
