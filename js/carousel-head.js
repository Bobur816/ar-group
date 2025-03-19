$(window).on("load", () => {
  const slideDuration = 10000;
  function updateProgres() {
    $(".carousel__head-item").each(function () {
      let progresBar = $(this).find(".progress-bar")[0];
      let progres = $(this).find(".progress")[0];

      if ($(this).hasClass("swiper-slide-thumb-active")) {
        $(progresBar).css("opacity", "1");
        $(progres).css("transition", `width ${slideDuration / 1000}s linear`);
        $(progres).css("width", "100%");
      } else {
        $(progresBar).css("opacity", "0");
        setTimeout(() => {
          $(progres).css("transition", "none");
          $(progres).css("width", "0%");
        }, 200);
      }
    });
  }

  const head = new Swiper(".carousel__head", {
    // loop: true,
    speed: 500,

    // freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });

  var swiper2 = new Swiper(".carousel__head-back", {
    // loop: true,
    effect: "fade",
    autoplay: { delay: slideDuration },
    speed: 1000,
    thumbs: {
      swiper: head,
    },

    on: {
      slideChange: function () {
        updateProgres();
      },
    },
  });

  const headBackContainer = document.querySelector(".carousel__head-back .swiper-wrapper");

  document.querySelectorAll(".carousel__head-item").forEach((e, index) => {
    let newSlide = document.createElement("div");
    newSlide.classList.add("swiper-slide", "carousel__head-back-item");
    let img = document.createElement("img");
    img.src = e.dataset.imagePath;
    img.alt = "head-back";
    newSlide.appendChild(img);
    headBackContainer.appendChild(newSlide);
  });

  setTimeout(() => {
    updateProgres();
  }, 100);
});
