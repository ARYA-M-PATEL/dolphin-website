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
      slidesPerView: 3,
      spaceBetween: 10, // Adjust as needed
    },
  },
});

// ***working - portion***

// const p_btns = document.querySelector(".w-links");
// const p_btn = document.querySelectorAll(".w-link");
// const p_img_elem = document.querySelectorAll(".img-overlay");

// p_btns.addEventListener("click", (e) => {
//   const p_btn_clicked = e.target;
//   console.log(p_btn_clicked);

//   p_btn.forEach((curElem) => curElem.classList.remove("w-link-active"));

//   p_btn_clicked.classList.add("w-link-active");

//   const btn_num = p_btn_clicked.dataset.btnNum;
//   console.log(btn_num);

//   const img_active = document.querySelectorAll(`.w-link--${btn_num}`);

//   p_img_elem.forEach((curElem) => curElem.classList.add("w-text-not-active"));

//   img_active.forEach((curElem) =>
//     curElem.classList.remove("w-text-not-active")
//   );
// });

const p_btns = document.querySelector(".w-links");
const p_btn = document.querySelectorAll(".w-link");
const p_img_elem = document.querySelectorAll(".img-overlay");

// Add "w-text-not-active" class to all image elements except the first one
p_img_elem.forEach((curElem, index) => {
  if (index !== 0) {
    curElem.classList.add("w-text-not-active");
  }
});

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target.closest(".w-link");
  if (!p_btn_clicked) return; // If clicked outside .w-link, exit

  const btn_num = p_btn_clicked.dataset.btnNum;

  p_btn.forEach((curElem) => {
    if (curElem !== p_btn_clicked) {
      curElem.classList.remove("w-link-active");
    }
  });

  p_btn_clicked.classList.add("w-link-active");
  p_btn_clicked.classList.add("w-link-active");

  p_img_elem.forEach((curElem) => {
    if (curElem.classList.contains(`w-link--${btn_num}`)) {
      curElem.classList.remove("w-text-not-active");
    } else {
      curElem.classList.add("w-text-not-active");
    }
  });
});

// const p_btns = document.querySelector(".w-links");
// const p_btn = document.querySelectorAll(".w-link");
// const p_img_elem = document.querySelectorAll(".img-overlay");

// p_btns.addEventListener("click", (e) => {
//   const p_btn_clicked = e.target.closest(".w-link");
//   if (!p_btn_clicked) return; // If clicked outside .w-link, exit

//   const btn_num = p_btn_clicked.dataset.btnNum;

//   p_btn.forEach((curElem) => {
//     if (curElem !== p_btn_clicked) {
//       curElem.classList.remove("w-link-active");
//     }
//   });

//   p_btn_clicked.classList.add("w-link-active");

//   p_img_elem.forEach((curElem) => {
//     if (curElem.classList.contains(`w-link--${btn_num}`)) {
//       curElem.classList.remove("w-text-not-active");
//     } else {
//       curElem.classList.add("w-text-not-active");
//     }
//   });
// });

// ***Our Section ***

// *********our section******

// const about_us1 = document.querySelector(".our-links");
// const about_us2 = document.querySelector(".our-link");
// const our_content = document.querySelector(".our-content");

// our_content.forEach((curElem, index) => {
//   if (index !== 0) {
//     curElem.classList.add("our-text-not-active");
//   }
// });

// about_us1.addEventListener("click", (e) => {
//   const our_btn_clicked = e.target.closest(".our-link");
//   if (!our_btn_clicked) return;

//   const btn_num1 = our_btn_clicked.dataset.btnNum;

//   about_us2.forEach((curElem) => {
//     if (curElem !== our_btn_clicked) {
//       curElem.classList.remove.add("our-link-active");
//     }
//   });

//   our_btn_clicked.classList.add("our-link-active");

//   our_content.forEach((curElem) => {
//     if (curElem.classList.contains(`our-link--${btn_num1}`)) {
//       curElem.classList.remove("our-text-not-active");
//     } else {
//       curElem.classList.add("our-text-not-active");
//     }
//   });
// });

// *** home page vedio ***
var video = document.getElementById("myVideo"); // Increase speed by settingplaybackRate property video.
// playbackRate = 1; // This will play the video at
// twice the normal speed
