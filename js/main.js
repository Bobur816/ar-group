$(window).on("load", () => {
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

  // ______________________________language_________________________________

  $(".language__open").on("click", function (e) {
    $(this).parent().find(".language__body").slideToggle(400);
  });

  $(".language__body").on("click", function (e) {
    const langEl = e.target.closest(".lang-el");
    $(".language__open").html(langEl.innerHTML);
    $(this).slideToggle(400);
  });

  // ______________________________cards-show__more-btn_________________________________

  $(".cards-show__more-btn").on("click", function () {
    $(this).parent().hide();
    $(this).parent().parent().find(".for__more").show();
  });

  $(".form_tel").inputmask("+\\9\\98 99 999 99 99");

  // ______________________________slider_________________________________

  const sliderToLeft = new Splide("#auto-scroll-slider", {
    type: "loop",
    drag: true,
    arrows: false,
    pagination: false,
    fixedWidth: "19.9rem",
    gap: "0.75rem",
    autoScroll: {
      speed: 1.5,
      pauseOnHover: true,
      pauseOnFocus: true,
    },
    breakpoints: {
      768: { fixedWidth: "11.4rem" },
    },
  }).mount(window.splide.Extensions);

  const sliderToRight = new Splide("#auto-scroll-slider-right", {
    type: "loop",
    drag: true,
    arrows: false,
    pagination: false,
    fixedWidth: "19.9rem",
    gap: "0.75rem",
    updateOnMove: true,
    swipeThreshold: false,
    autoScroll: {
      speed: 1,
      pauseOnHover: true,
      pauseOnFocus: true,
    },
    breakpoints: {
      768: { fixedWidth: "11.4rem" },
    },
  }).mount(window.splide.Extensions);

  new WOW({
    offset: 50,
    mobile: false,
  }).init();
});
