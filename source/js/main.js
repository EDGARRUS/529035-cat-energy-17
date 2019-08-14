ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.938848, 30.320001],
      zoom: 15
    }, {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-pin.png',
      // Размеры метки.
      iconImageSize: [113, 106],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38],
    });

  window.addEventListener('resize', function () {

    if (document.documentElement.clientWidth < 768) {
      myPlacemark.options.set({iconImageSize: [62, 53]});
      myMap.setCenter([59.938631, 30.323055]);
    }
    ;
  });

  myMap.geoObjects
    .add(myPlacemark)
});
