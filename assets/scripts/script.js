$( document ).ready(function( $ ) {
  $( '.gallery' ).sliderPro({
    slideDistance: 10, // расстояние между слайдами
    width: 424,
    height: 265,
    orientation: 'vertical',
    loop: false,
    arrows: true,
    buttons: false,
    thumbnailsPosition: 'right',
    // thumbnailPointer: true,
    aspectRatio: -1,
    thumbnailWidth: 91,
    thumbnailHeight: 57,
    // breakpoints: {
    //   800: {
    //     thumbnailsPosition: 'bottom',
    //     thumbnailWidth: 270,
    //     thumbnailHeight: 100
    //   },
    //   500: {
    //     thumbnailsPosition: 'bottom',
    //     thumbnailWidth: 120,
    //     thumbnailHeight: 50
    //   }
    // }
  });
});