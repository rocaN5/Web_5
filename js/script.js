// Код написал: Шевченко Дмитрий 

// ••• To Top Button END •••

$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 650){
      $('#top-button').fadeIn();
    } else{
      $('#top-button').fadeOut();
    }
  });

  $("#top-button").click(function(){
    $('html ,body').animate({scrollTop : 0});
  });
});

// ••• To Top Button END •••

// ••• Acbivement Cards Highlight •••

$(document).ready(function($) {

  setInterval(function() {
    moveActiveSelector();
  }, 3000);

  var curentActive = 0;

  function moveActiveSelector() {
    $('.achivement__card.active__card').removeClass("active__card");
    curentActive++;
    if (curentActive >= $('.achivement__card').length) {
      curentActive = 0;
    }
    $('.achivement__card').eq(curentActive).addClass("active__card");
  };
});

// ••• Acbivement Cards Highlight END •••

// ••• Call Number Button Copy •••

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

// ••• Call Number Button Copy  END •••

// ••• Copy Text Animation FadeIn •••

class Lock {
  isLocked()    { return this.__locked;  }
  unlock()      { this.__locked = false; }
  lock()        { this.__locked = true;  }
}

const copyLock = new Lock();

$('.number__copy__button').click(() => {
  if (!copyLock.isLocked()) {
    console.log('COPY BEGIN');
    copyLock.lock();
    $('.copy__animation').fadeIn(1).animate( {"bottom":"70px","opacity":"1"}, 200 ).delay(2500).animate( {"bottom":"0px","opacity":"0"}, 400 ).fadeOut(1, () => {
      copyLock.unlock();
      console.log('COPY END');
    });
  }
});

// ••• Copy Text Animation FadeIn END •••

// ••• Slick Slider Settings

$('.comments__slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 6000,
});

$('.work__slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 4000,
});

// ••• Slick Slider Settings NED