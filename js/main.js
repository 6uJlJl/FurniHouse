$(document).ready(function(){

  // ЛЕНИВАЯ ПОДГРУЗКА ИЗОБРАЖЕНИЙ (замена img data-src на img src)
 let bLazy = new Blazy({
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

  // РАссчет порядка дополнительных блоков

  function setOrder() {
    let order = 0;
    $(".main__item").each(function(){
      if (!($(this).hasClass("hidden"))) {
        $(this).css("order", order);
        order++;
      }
    })

    if ( order-3 > 12) {
      $(".main__item.add").css("order", 4);
      $(".main__item.add-4").css("order", 8);
      $(".main__item.add-3").css("order", 12);
    }
    else {
      let minOrder = parseInt((order-3) / 3);
      $(".main__item.add").css("order", minOrder-1);
      $(".main__item.add-4").css("order", minOrder*2-1);
      $(".main__item.add-3").css("order", minOrder*3-1);
    }
    let bLazy = new Blazy({
      selector : 'img',
      offset: 100,
    });
  }

  setOrder();

  // ПЕРЕКЛЮЧЕНИЕ ФИЛЬТРОВ

  // function checkItems(filter){
  //   $(".main__item").each(function(){
  //     if ( $(this).hasClass(filter)) {
  //       $(this).removeClass("hidden");
  //     }
  //   })
  //   setOrder();
  // };

  // function hideItems(filter){
  //   $(".main__item").each(function(){
  //     if ( $(this).hasClass(filter)) {
  //       $(this).addClass("hidden");
  //     }
  //   })
  //   setOrder();
  // };

  // function unCheckItems(filter){

  //   let filters = {
  //     massiv : false,
  //     mdf : false,
  //     plastic : false,
  //     emal : false
  //   };

  //   $(".filters__item").each(function(){
  //     filters[$(this).data("filter")] = $(this).find("input").prop("checked");
  //   })

  //   $(".main__item").each(function(){

  //     if (!( ($(this).hasClass("add")) | ($(this).hasClass("add-4")) | ($(this).hasClass("add-3")) )) {
  //       let isVisible = false;
  //       let item = $(this);

  //       $.each(filters,function(index,value){
  //         if (value) {
  //           if (item.hasClass(index)) { isVisible = true }
  //         } else {
  //           if (!(item.hasClass(index))) { isVisible = false }
  //         }
  //       })

  //       if (isVisible) {
  //         item.removeClass("hidden");
  //       } else {
  //         item.addClass("hidden");
  //       }
  //     }

  //   })

  //   setOrder();
  // };

  function checkStyle(myfilter) {

    let filters = {
      massiv : false,
      mdf : false,
      plastic : false,
      emal : false
    };

    $(".filters__item").each(function(){
      filters[$(this).data("filter")] = $(this).find("input").prop("checked");
    })

    $(".main__item").each(function(){
      if (!( ($(this).hasClass("add")) || ($(this).hasClass("add-4")) || ($(this).hasClass("add-3")) )) {
        let isVisible = false;
        let  item = $(this);

        $.each(filters,function(index,value){

          if (value == true) {
            if (item.hasClass(index)) { isVisible = true }
          } else  if (value == false ) {
            if (item.hasClass(index)) { isVisible = false }
          };

        });


        if (( $(this).hasClass(myfilter) )&&(isVisible)) {
          $(this).removeClass("hidden")
        };
      };
    })

    setOrder();
  }

  function unCheckItem (filter) {
    $(".main__item").each(function(){
      if ( $(this).hasClass(filter)) {
        $(this).addClass("hidden");
      }
    })

    setOrder();
  }

  function checkMaterial(myfilter) {
    let filters = {
      classic : false,
      modern : false
    };

    $(".filters__item").each(function(){
      filters[$(this).data("filter")] = $(this).find("input").prop("checked");
    })

    $(".main__item").each(function(){
      if (!( ($(this).hasClass("add")) || ($(this).hasClass("add-4")) || ($(this).hasClass("add-3")) )) {
        let isVisible = false;
        let  item = $(this);

        $.each(filters,function(index,value){
          if (value) {
            if (item.hasClass(index)) { isVisible = true }
          }else if (value == false ) {
            if (item.hasClass(index)) { isVisible = false }
          };
        });

        if (( $(this).hasClass(myfilter) )&&(isVisible)) {
          $(this).removeClass("hidden")
        };
      };
    })

    setOrder();
  }

  $(".filters__item").on("change", function(){

    let filter =  $(this).data("filter");
    let checked = $(this).find("input").prop("checked");

    console.log(filter);


    if ((filter=="classic")||(filter=="modern")) {
      if ( checked ) {
        checkStyle(filter);
      } else {
        unCheckItem(filter);
      }
    } else {
      if ( checked ) {
        checkMaterial(filter);
      } else {
        unCheckItem(filter);
      }
    }

    setOrder();

  })




})
