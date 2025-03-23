document.body.onload = function () {
  const progressLevel = document.querySelector(".proggress__level");
  const tumb = document.querySelector(".preloader__proggress-tumb");
  const progressBar = document.querySelector(".preloader__proggress");

  // ⚠ Bu yerga umumiy davomiylik (millisekundlarda) beriladi
  const duration = 5000; // 5 sekund davom etsa
  const fps = 60; // Qanchalik silliq bo‘lsin desang, shuncha katta
  const totalFrames = (duration / 1000) * fps;
  let currentFrame = 0;

  function animateProgress() {
    currentFrame++;

    // Progress foizi hisoblanadi
    let progress = Math.min((currentFrame / totalFrames) * 100, 100);
    progressLevel.textContent = Math.floor(progress);

    // Tumb holati hisoblanadi
    const progressWidth = progressBar.offsetWidth - tumb.offsetWidth;
    tumb.style.left = `${progress}%`;

    if (currentFrame < totalFrames) {
      requestAnimationFrame(animateProgress);
    } else {
      // Optional: tugagandan keyin preloaderni yo‘qotish
      document.querySelector(".preloader").style.opacity = 0;
      document.querySelector(".preloader").style.visibility = "hidden";
    }
  }

  setTimeout(() => {
    requestAnimationFrame(animateProgress);
  }, 2000);
};
