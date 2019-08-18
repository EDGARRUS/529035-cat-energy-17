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

// Скрипты на меню
var mainNav = document.querySelector(".main-nav");
var buttonNav = document.querySelector(".top__menu-toggle");
buttonNav.classList.remove("top__menu-toggle--opened");
mainNav.classList.add("visuallyhidden");
buttonNav.addEventListener("click", function () {
  buttonNav.classList.toggle("top__menu-toggle--opened");
  mainNav.classList.toggle("visuallyhidden");
});

// Скрипты на переключение слайдеров
var btnPast = document.getElementById("past");
var btnPresent = document.getElementById("present");
var sliderBefore = document.querySelector(".slider__img-before");
var sliderAfter = document.querySelector(".slider__img-after");

btnPresent.oninput = function () {
  sliderAfter.setAttribute("style", "display: block");
  sliderBefore.setAttribute("style", "display: none");
};

btnPast.oninput = function () {
  sliderBefore.setAttribute("style", "display: block");
  sliderAfter.setAttribute("style", "display: none");
};

// Скрипты на слайдер-ползунок

var slider = document.getElementById("range");
var imgAfter = sliderAfter.querySelector("img");

function sliderAction(value) {
  var widthBefore = value;
  var widthAfter = 100 - value;
  sliderBefore.style.width = widthBefore + "%";
  sliderAfter.style.width = widthAfter + "%";
  imgAfter.style.transform = "translateX(-" + value + "%)"
};
