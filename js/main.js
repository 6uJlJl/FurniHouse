$(document).ready(function(){

  // ЛЕНИВАЯ ПОДГРУЗКА ИЗОБРАЖЕНИЙ (замена img data-src на img src)
 let bLazy = new Blazy({
    selector : 'img',
    offset: 300,
  });

  // До загрузки фото надпись "Загружается"
  $(".item__image").each(function(){
    $(this).on("load", function(){
      $(this).parent().find(".loading").css("z-index", "-1");
    })
  })

  // Маска ввода телефона
  $("input[type=tel]").mask("+7 (999) 999-99-99");

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


  // расчет кол-ва фото для слайдера
  $(".item__images").each(function(){

    let count = $(this).find(".fancybox").length;
    $(this).find(".item__shots span").text(count);

  })

  // Обратный звонок
  $(".callback__text").fancybox();

  // Форма заказа расчета
  // вызывается эта форма:
  // <section class="popup-calc" id="calc">
  //   <form method="post" action="callback.php" class="popup-callback__form">
  //     <p class="popup-callback__title">Оставьте свои контакты и мы сделаем расчет!</p>
  //     <label class="visually-hidden" for="calculate-name">Введите Ваше имя</label>
  //     <input class="popup-callback__input" type="text" name="name" id="calculate-name" placeholder="Ваше имя" required>
  //     <label class="visually-hidden" for="calculate-mail">Введите Ваше имя</label>
  //     <input class="popup-callback__input" type="email" name="mail" id="calculate-mail" placeholder="E-mail">
  //     <label class="visually-hidden" for="calculate-phone">Введите Ваш номер телефона</label>
  //     <input class="popup-callback__input" type="tel" name="phone" placeholder="Телефон" id="calculate-phone" required>
  //     <textarea class="popup-callback__textarea" name="sizes" id="calculate-textarea" cols="30" rows="30">Размеры и пожелания</textarea>
  //     <input type="hidden" name="item" value="Кухня - '+$(this).parent().parent().find(".item__title").text()+' по цене за метр - '+$(this).parent().parent().find(".descr__price span").text()+'">
  //     <input class="popup-callback__button popup-callback__button--calc" type="submit" value="Заказать расчет">
  //   </form>
  // </section>

  $(".descr__order").on('click', function(e) {
    e.preventDefault();
    console.log ($(this).parent().find(".item__name").text())
    var string = '<section class="popup-calc" id="calc"><form method="post" action="callback.php" class="popup-callback__form"><p class="popup-callback__title">Оставьте свои контакты и мы сделаем расчет!</p><label class="visually-hidden" for="calculate-name">Введите Ваше имя</label><input class="popup-callback__input" type="text" name="name" id="calculate-name" placeholder="Ваше имя"><label class="visually-hidden" for="calculate-mail">Введите Ваше имя</label><input class="popup-callback__input" type="email" name="mail" id="calculate-mail" placeholder="E-mail"><label class="visually-hidden" for="calculate-phone">Введите Ваш номер телефона</label><input class="popup-callback__input" type="tel" name="phone" placeholder="Телефон*" id="calculate-phone" required><textarea class="popup-callback__textarea" name="sizes" id="calculate-textarea" cols="30" rows="30">Размеры и пожелания</textarea><input type="hidden" name="item" value="Кухня - '+$(this).parent().parent().find(".item__title").text()+' по цене за метр - '+$(this).parent().parent().find(".descr__price span").text()+'"><input class="popup-callback__button popup-callback__button--calc" type="submit" value="Заказать расчет"></form></section>';
    $.fancybox.open({
      src : string,
      type : 'html',
      smallBtn : true
    });
    $("input[type=tel]").mask("+7 (999) 999-99-99");
    $(".popup-callback__textarea").on("focus", function(){
      if ( $(".popup-callback__textarea").val() == "Размеры и пожелания") {
        $(".popup-callback__textarea").val("");
      }

    })
  });


  // расчет порядка дополнительных блоков

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

  function checkMaterial (prop) {

    let filters = {
      classic : false,
      modern : false
    };

    $(".filters__item").each(function(){
      let id = $(this).find("input").prop("id");
      if ( (id == "classic") || (id == "modern")) {
        filters[$(this).find("input").prop("id")] = $(this).find("input").prop("checked");
      }
    })

    $(".main__item").each( function(){
      if (!( ($(this).hasClass("add")) || ($(this).hasClass("add-4")) || ($(this).hasClass("add-3")) )) {
        let isVisible = false;
        let  item = $(this);

        $.each(filters,function(index,value){
          if (value) {
            if (item.hasClass(index)) { isVisible = true }
          }
        });

        if (( $(this).hasClass(prop) )&&(isVisible)) {
          $(this).removeClass("hidden")
        };
      };
    });











  }

  function unCheckMaterial (prop) {
    $(".main__item").each( function(){
      if ( $(this).hasClass(prop) ) {
        $(this).addClass("hidden");
      }
    });
  }

  function unCheckStyle (prop) {
    $(".main__item").each( function(){
      if ( $(this).hasClass(prop) ) {
        $(this).addClass("hidden");
      }
    });
  }

  function checkStyle (prop) {

    let filters = {
      massiv : false,
      mdf : false,
      plastic : false,
      emal : false
    };

    $(".filters__item").each(function(){
      let id = $(this).find("input").prop("id");
      if ( (id != "classic") && (id != "modern")) {
        filters[$(this).find("input").prop("id")] = $(this).find("input").prop("checked");
      }
    })

    $(".main__item").each( function(){
      if (!( ($(this).hasClass("add")) || ($(this).hasClass("add-4")) || ($(this).hasClass("add-3")) )) {
        let isVisible = false;
        let  item = $(this);

        $.each(filters,function(index,value){
          if (value) {
            if (item.hasClass(index)) { isVisible = true }
          }
        });

        if (( $(this).hasClass(prop) )&&(isVisible)) {
          $(this).removeClass("hidden")
        };
      };
    });

  }

  $(".filters__item").on("change", function(){

    let id = $(this).find("input").attr("id");
    let isChecked = $(this).find("input").prop("checked");

    if ( isChecked ) {

      if ( id == "classic" ) {
        $("#modern").prop( "disabled", false );
        checkStyle("classic");
      } else
       if ( id == "modern" ) {
        $("#classic").prop( "disabled", false );
        checkStyle("modern");
       } else {
         checkMaterial(id);
       }

    }
    else {

      if ( id == "classic" ) {
        $("#modern").prop( "disabled", true );
        unCheckStyle ("classic");
      } else
       if ( id == "modern" ) {
        $("#classic").prop( "disabled", true );
        unCheckStyle ("modern");
       } else {
         unCheckMaterial(id);
       }

    }




    setOrder();

  })




})
