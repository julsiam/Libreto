// function myFunction() {
//   searchForm = document.querySelector('.search-form');

//   document.querySelector('#search-btn').onclick = () => {
//     searchForm.classList.toggle('active');
//   }

// }

// window.onscroll = () => {

//   searchForm.classList.remove('active');

//   if (window.scrollY > 80) {
//     document.querySelector('.header .header-2').classList.add('active');
//   } else {
//     document.querySelector('.header .header-2').classList.remove('active');
//   }

// }

// window.onload = () => {

//   if (window.scrollY > 80) {
//     document.querySelector('.header .header-2').classList.add('active');
//   } else {
//     document.querySelector('.header .header-2').classList.remove('active');
//   }

//   fadeOut();

// }


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


$(document).ready(function () {
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

});


$(document).ready(function () {
  var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 850,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

});


$(document).ready(function () {
  $('#autoWidth').lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $('#autoWidth').removeClass('cS-hidden');
    }

  });

  $('#total').text(autoplaySlider.getTotalSlideCount());
});

$(document).ready(function () {
  var autoplaySlider = $('#autoplay').lightSlider({
    auto: true,
    loop: true,
    pauseOnHover: true,
    onBeforeSlide: function (el) {
      $('#current').text(el.getCurrentSlideCount());
    }
  });
  $('#total').text(autoplaySlider.getTotalSlideCount());
});


$(document).ready(function () {
  $(".testmonial_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed: 600,
    items: 3,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    margin: 30,
    dots: true,
    responsive: {
      320: {
        items: 1
      },
      767: {
        items: 2
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }

  });
});


$(document).ready(function () {
  var typed = new Typed(".typed2", {
    strings: [
      "Free Shipping",
      "Quality Books",
      "Guarantee Money-Back"
    ],
    typeSpeed: 30,
    backSpeed: 20,
    loop: true
  });
});

