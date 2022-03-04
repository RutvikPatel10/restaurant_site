$('.slick_slider_demo').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    infinite: true,
    prevArrow:'<span class="prev_arrow"><i class="fa-solid fa-left-long fa-xl"></i></span>',
    nextArrow:'<span class="next_arrow"><i class="fa-solid fa-right-long fa-xl"></i></span>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: true,
          centerMode: true,
          infinite: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          infinite: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 468,
        settings: {
          arrows: true,
          infinite: true,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
});

$('.slick-slider-demo-2').slick({
  centerMode: false,
  centerPadding: '60px',
  slidesToShow: 3,
  infinite: true,
  prevArrow:'<span class="prev_arrow"><i class="fa-solid fa-left-long fa-xl"></i></span>',
  nextArrow:'<span class="next_arrow"><i class="fa-solid fa-right-long fa-xl"></i></span>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: true,
        centerMode: false,
        infinite: true,
        centerPadding: '40px',
        slidesToShow: 2
      } 
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        infinite: true,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});