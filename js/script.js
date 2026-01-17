const audio = document.getElementById("bg-music");
audio.volume = 0.3;
let message = document.querySelector(".message"),
  message_close = document.querySelector("#message_close");
message_close.addEventListener("click", function () {
  message.classList.add("hidden");
});
const dropdownTitle = document.querySelector(".header_dropdownTitle"),
  dropdownContent = document.querySelector(".header_dropdownContent");
dropdownTitle.addEventListener("click", (e) => {
  e.stopPropagation(), dropdownContent.classList.toggle("active");
}),
  document.addEventListener("click", (e) => {
    dropdownContent.contains(e.target) ||
      dropdownTitle.contains(e.target) ||
      dropdownContent.classList.remove("active");
  });
const header_bars = document.querySelector("#header_bars"),
  header_close = document.querySelector("#header_close"),
  header_menu = document.querySelector(".header_menu");
header_bars.addEventListener("click", function () {
  header_menu.classList.add("active");
}),
  header_close.addEventListener("click", function () {
    header_menu.classList.remove("active");
  });
let comments_swiper = new Swiper(".comments_swiper", {
    loop: !0,
    grabCursor: !0,
    autoplay: { delay: 1e3, disableOnInteraction: !0 },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 12 },
      576: { slidesPerView: 1, spaceBetween: 24 },
      768: { slidesPerView: 2, spaceBetween: 24 },
      1200: { slidesPerView: 3, spaceBetween: 24 },
    },
  }),
  posts_swiper = new Swiper(".posts_swiper", {
    loop: !0,
    grabCursor: !0,
    autoplay: { delay: 1e3, disableOnInteraction: !0 },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 12 },
      576: { slidesPerView: 1, spaceBetween: 24 },
      768: { slidesPerView: 2, spaceBetween: 24 },
      1200: { slidesPerView: 3, spaceBetween: 24 },
    },
  });
