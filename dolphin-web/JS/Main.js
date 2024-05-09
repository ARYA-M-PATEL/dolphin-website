// *** Carousel ***
document.addEventListener("DOMContentLoaded", function () {
  var currentIndex = 0;
  var slides = document.querySelectorAll(".slide");
  // Assume each slide is shown for 8 seconds total
  var slideInterval = 3000;

  function showSlide(index) {
    slides.forEach(function (slide) {
      slide.style.opacity = "0";
    });

    var currentSlide = slides[index];
    currentSlide.style.opacity = "1";

    // Reapply the animation to ensure it starts from the beginning for each slide
    var img = currentSlide.querySelector("img");
    img.style.animation = "none"; // Reset the animation
    // Trigger reflow to apply the reset
    void img.offsetWidth;
    // Re-apply the correct animation based on the slide index
    // switch (index % 4) {
    //     case 0:
    //         img.style.animation = 'panRight 10s ease-in-out infinite'
    //         break
    //     case 1:
    //         img.style.animation = 'panDown 10s ease-in-out infinite'
    //         break
    //     case 2:
    //         img.style.animation = 'panLeft 10s ease-in-out infinite'
    //         break
    //     case 3:
    //         img.style.animation = 'panUp 10s ease-in-out infinite'
    //         break
    // }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Initially display the first slide
  showSlide(currentIndex);
  // Set the interval for changing slides, adjusted to match the CSS transition
  setInterval(nextSlide, slideInterval);
});

// *** swiper js ***
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },

  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // When screen width is 300px or less
    300: {
      slidesPerView: 1,
      spaceBetween: 10, // Adjust as needed
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10, // Adjust as needed
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10, // Adjust as needed
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10, // Adjust as needed
    },
  },
});

// *** research swiper js ***
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  // autoplay: {
  //   delay: 2500,
  // },

  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // When screen width is 300px or less
    300: {
      slidesPerView: 1,
      spaceBetween: 10, // Adjust as needed
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10, // Adjust as needed
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10, // Adjust as needed
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10, // Adjust as needed
    },
  },
});
