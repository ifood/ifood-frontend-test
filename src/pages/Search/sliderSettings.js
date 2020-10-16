const sliderSettings = (length) => ({
  infinite: true,
  dots: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 920,
      settings: {
        slidesToShow: Math.min(4, length),
        slidesToScroll: Math.min(4, length),
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: Math.min(3, length),
        slidesToScroll: Math.min(3, length),
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: Math.min(2, length),
        slidesToScroll: Math.min(2, length),
      }
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: Math.min(1, length),
        slidesToScroll: Math.min(1, length),
      }
    },
  ],
});

export default sliderSettings;
