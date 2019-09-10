$(document).ready(function () {
  // slick slider init
  $('.gallery__items').slick({
    centerMode: true,
    centerPadding: '120px',
    slidesToShow: 4,
    prevArrow: `<button class="gallery__btn gallery__btn--prev">
                  <svg>
                    <use xlink:href="dist/img/symbol/sprite.svg#back"></use>
                  </svg>
                </button>`,
    nextArrow: `<button class="gallery__btn gallery__btn--next">
                  <svg>
                    <use xlink:href="dist/img/symbol/sprite.svg#next"></use>
                  </svg>
                </button>`
  });
});