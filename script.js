
const navlinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const body = document.body;


menuOpenButton.addEventListener("click", () => {
    // TOggle mobile menu visibility

    document.body.classList.toggle("show-mobile-menu");
});
// close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => {
    body.classList.remove("show-mobile-menu");
});

// Close menu when the nav-link is clicked
navlinks.forEach(link => {
    link.addEventListener("click", () => menuCloseButton.click())
})

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        786: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },

    }
  });