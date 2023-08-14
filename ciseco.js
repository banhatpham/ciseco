jQuery(document).ready(function ($) {
    startSlider($("#slider"), 30); // Slide container ID, SlideShow interval
  
    function startSlider(obj, timer) {
      var obj, timer;
      var id = "#" + obj.attr("id");
      var slideCount = obj.find("ul li").length;
      slideWidth = obj.attr("data-width");
      var sliderUlWidth = (slideCount + 1) * slideWidth;
      var time = 2;
      var $bar, isPause, tick, percentTime;
      isPause = false; //false for auto slideshow
  
      $bar = obj.find(".progress .bar");
  
      function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        tick = setInterval(interval, timer);
      }
  
      function interval() {
        if (isPause === false) {
          percentTime += 1 / (time + 0.1);
          $bar.css({
            width: percentTime + "%"
          });
          if (percentTime >= 100) {
            moveRight();
            startProgressbar();
          }
        }
      }
  
      function resetProgressbar() {
        $bar.css({
          width: 0 + "%"
        });
        clearTimeout(tick);
      }
  
      function startslide() {
        $(id + " ul li:last-child").prependTo(id + " ul");
        obj
          .find("ul")
          .css({ width: sliderUlWidth + "vw", marginLeft: -slideWidth + "vw" });
  
        obj.find("ul li:last-child").appendTo(obj.attr("id") + " ul");
      }
  
      if (slideCount > 1) {
        startslide();
        startProgressbar();
      } else {
        // hade navigation buttons for 1 slide only
        $(id + " button.control_prev").hide();
        $(id + " button.control_next").hide();
      }
  
      function moveLeft() {
        $(id + " ul").css({
          transition: "1s",
          transform: "translateX(" + slideWidth + "vw)"
        });
  
        setTimeout(function () {
          $(id + " ul li:last-child").prependTo(id + " ul");
          $(id + " ul").css({
            transition: "none",
            transform: "translateX(" + 0 + "vw)"
          });
  
          $("li.actslide")
            .prev()
            .addClass("actslide")
            .next()
            .removeClass("actslide");
        }, 1000);
      }
  
      function moveRight2() {
        // fix for only 2 slades
        $(id + " ul li:first-child").appendTo(id + " ul");
  
        $(id + " ul")
          .css({ transition: "none", transform: "translateX(100vw)" })
          .delay();
  
        setTimeout(
          function () {
            $(id + " ul").css({ transition: "1s", transform: "translateX(0vw)" });
          },
          100,
          setTimeout(function () {
            $(id + " ul").css({
              transition: "none",
              transform: "translateX(0vw)"
            });
            $("li.actslide")
              .next()
              .addClass("actslide")
              .prev()
              .removeClass("actslide");
          }, 1000)
        );
      }
  
      function moveRight() {
        if (slideCount > 2) {
          $(id + " ul").css({
            transition: "1s",
            transform: "translateX(" + -1 * slideWidth + "vw)"
          });
  
          setTimeout(function () {
            $(id + " ul li:first-child").appendTo(id + " ul");
            $(id + " ul").css({
              transition: "none",
              transform: "translateX(" + 0 + "vw)"
            });
  
            $("li.actslide")
              .next()
              .addClass("actslide")
              .prev()
              .removeClass("actslide");
          }, 1000);
        } else {
          moveRight2();
        }
      }
  
      $(id + " button.control_prev").click(function () {
        moveLeft();
        startProgressbar();
      });
  
      $(id + " button.control_next").click(function () {
        moveRight();
  
        startProgressbar();
      });
  
      $(id + " .progress").click(function () {
        if (isPause === false) {
          isPause = true;
        } else {
          isPause = false;
        }
      });
    }
  });


  // discover more 

  const config = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 32,
    // breakpoints: {
    //   1280: {
    //     perView: 3,
    //   },
    //   1024: {
    //     perView: 2,
    //   },
    //   768: {
    //     perView: 1,
    //   }
    // }
  }
  new Glide('.glide', config).mount()

  // product card slider 

  const productCards = document.querySelector('.product-cards');

if (productCards) {
  const productCardsSlider = new Swiper('.product-cards__slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.product-cards__next',
      prevEl: '.product-cards__prev',
    },
  })
}

// example 2

// const porductCards = document.querySelector('.product-cards__slider');

// if (porductCards) {
//   const productCardsSlider = new Swiper(porductCards, {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     on: {
//       init: function () {
//         const activeSlide = porductCards.querySelector('.swiper-slide-active');

//         const nextActiveSlide = activeSlide.nextElementSibling;

//         const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

//         activeSlide.classList.add('slider-visible');
//         nextActiveSlide.classList.add('slider-visible');
//         nextNextActiveSlide.classList.add('slider-visible');
//       },
//     },
//     navigation: {
//       nextEl: '.product-cards__next',
//       prevEl: '.product-cards__prev',
//     },
//   });
  
//   document.querySelector('.product-cards__prev').addEventListener('click', () => {
//     const activeSlide = porductCards.querySelector('.swiper-slide-next');

//     document.querySelectorAll('.product-cards__slider .swiper-slide').forEach(el => {
//       el.classList.remove('slider-visible');
//     });

//     if (activeSlide.previousElementSibling) {
//       const nextActiveSlide = activeSlide.previousElementSibling;
//       activeSlide.classList.add('slider-visible');
//       nextActiveSlide.classList.add('slider-visible');
//       activeSlide.nextElementSibling.classList.add('slider-visible');
//     }
//   });
  
//   document.querySelector('.product-cards__next').addEventListener('click', () => {
//     const activeSlide = porductCards.querySelector('.swiper-slide-active');

//     const nextActiveSlide = activeSlide.nextElementSibling;

//     const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

//     document.querySelectorAll('.product-cards__slider .swiper-slide').forEach(el => {
//       el.classList.remove('slider-visible');
//     });

//     activeSlide.classList.add('slider-visible');
//     nextActiveSlide.classList.add('slider-visible');
//     nextNextActiveSlide.classList.add('slider-visible');
//   });
// }

// add to wishlist button
const btns = document.querySelectorAll('.wishlist-badge__btn');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const isActive = btn.classList.contains('wishlist-badge__btn--active');
    btn.classList.toggle('wishlist-badge__btn--active');
    btn.title = isActive ? 'Add to wishlist' : 'Remove from wishlist';
  });
});

// explore

$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});

// chosen by our expert 
$('.product-carousel').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '<i class="arrow right">',
  prevArrow: '<i class="arrow left">',
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// good news from far away

const swiper = new Swiper(".swiper", {
  loop: true,
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});