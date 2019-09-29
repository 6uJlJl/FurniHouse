$(document).ready(function(){

  var bLazy = new Blazy({
    selector : 'img',
    offset: 300,
  });

  // СЛАЙДЕРЫ
  $(".fancybox").fancybox({
    keyboard: true,
    arrows: true,
    zoom: false,
    buttons: [
      "close"
    ],
    slideClass: "fancybox",
    clickSlide: "close",
    clickOutside: "close",

	});

})
