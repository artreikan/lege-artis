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

  // accordion
  $('.accordion__head').on('click', function () {
    const $this = $(this);

    $this.toggleClass('accordion__head--active')
         .siblings('.accordion__head')
         .removeClass('accordion__head--active');

    $('.accordion__body').not($this.next()).slideUp(300);
    $this.next().slideToggle(300);
  });
});