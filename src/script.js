// /*----------------SMOOTH SCROLL--------------*/

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// /*---------------------HEADER SLIDER------------------*/

$(".header-slider-container").slick({
  infinite: true,
  // autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  dotsClass: "vertical-dots",
  arrows: false,
});

// /*------------------------NEWS SLIDER--------------------*/

$(".news-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  arrows: false,
});

$(".left").click(function () {
  $(".news__slider").slick("slickPrev");
});

$(".right").click(function () {
  $(".news__slider").slick("slickNext");
});
// /*---------------------------------------------'/
