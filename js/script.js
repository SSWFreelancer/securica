
$(document).ready(function () {
      $('.securika__more').click(function (event) {
         $('.securika__hide').toggleClass('active');
         if( $('.securika__hide').hasClass('active')){
            $('.securika__more span').text('Скрыть');
         }
         else{
            $('.securika__more span').text('Подробнее');
         }
      });

});


