var slider = tns({
  container: '.my-slider',
  items: 4,
  slideBy: 'page',
  controlsContainer: '.controls',
  mouseDrag: true,
  gutter: 10,
  responsive: {
    320: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});
