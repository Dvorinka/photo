function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const start = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    let startTime;

    function scrollAnimation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);

      window.scrollTo(0, start + (targetPosition - start) * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(scrollAnimation);
      }
    }

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(scrollAnimation);
  }