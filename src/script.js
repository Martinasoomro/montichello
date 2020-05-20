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

// /*-------------------FORM VALIDTION--------------------------'/

const email = document.getElementById('email');
    const name = document.getElementById('name');
    const submit = document.getElementById('submit');
    const submittedBox = document.getElementById('submitted-box');

    const validateName = () => {
        if (name.value === '') {
            name.setCustomValidity('Please fill in your name');
            return false;
        } else {
            name.setCustomValidity('');
            return true;
        }
    }

    const validateEmail = () => {
        if (email.value === '' || email.validity.typeMismatch) {
            email.setCustomValidity('Please fill in a valid email adress');
            return false;
        } else {
        email.setCustomValidity('');
        return true;
        }
    }

    name.addEventListener('input', function () {
        validateName();
    });

    email.addEventListener('input', function() {
        validateEmail();
    });

    submit.addEventListener('click', function (event) {
        if (validateName() && validateEmail()) {
            submittedBox.style.display = 'block';
            event.preventDefault();
        }
    });
});
