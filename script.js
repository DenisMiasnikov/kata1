var mySwiper = new Swiper ('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clicable: true,
      },
      slidesPerView: 'auto',
});

if( window.innerWidth >= 768 ) {
    mySwiper.destroy();
};

var hiddenMessage = document.querySelectorAll('.hide');

var addCheckHandler = function (item) {
    var buttonShow = document.querySelector('.button_show');
    buttonShow.addEventListener('click', function () {
        item.classList.remove('hide')
        buttonShow.classList.add('hide')
    });
    var buttonHide = document.querySelector('.button_hide');
    buttonHide.addEventListener('click', function () {
        item.classList.add('hide')
        buttonShow.classList.remove('hide')
    });
  };
  
  for (var i = 0; i < hiddenMessage.length; i++) {
    addCheckHandler(hiddenMessage[i]);
  }
  
  
var hiddenMessagePc = document.querySelectorAll('.hide_pc');

  var addCheckHandlerPc = function (item) {
      var buttonShow = document.querySelector('.button_show');
      buttonShow.addEventListener('click', function () {
          item.classList.remove('hide_pc')
          buttonShow.classList.add('hide')
      });
      var buttonHide = document.querySelector('.button_hide');
      buttonHide.addEventListener('click', function () {
          item.classList.add('hide_pc')
          buttonShow.classList.remove('hide')
      });
    };
    
    for (var i = 0; i < hiddenMessagePc.length; i++) {
      addCheckHandlerPc(hiddenMessagePc[i]);
    }


var hiddenMessageTablet = document.querySelectorAll('.hide_tablet');

var addCheckHandlerTablet = function (item) {
    var buttonShow = document.querySelector('.button_show');
    buttonShow.addEventListener('click', function () {
        item.classList.remove('hide_tablet')
        buttonShow.classList.add('hide')
    });
    var buttonHide = document.querySelector('.button_hide');
    buttonHide.addEventListener('click', function () {
        item.classList.add('hide_tablet')
        buttonShow.classList.remove('hide')
    });
  };
  
  for (var i = 0; i < hiddenMessageTablet.length; i++) {
    addCheckHandlerTablet(hiddenMessageTablet[i]);
  }
