 "use strict";



  $(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.single-item'
      });
    $('.single-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-for',
        dots: true,
        fade: true,
    });
    $('.slider-team').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      infinite: false
  });

  $('.burger-btn').on('click', function(){
    $('.header-body__menu-burger').toggle('active');
  })

    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".main-header").removeClass("sticky-bar");
        // $('#back-top').fadeOut(500);
      } else {
        $(".main-header").addClass("sticky-bar");
        // $('#back-top').fadeIn(500);
      }
    });
      function reload_interval(time){
          setTimeout(function(){
            location.reload();
          }, time);
        }

    $('.btn-number__box-tel').on('click', function (){
      $('.pop-up').addClass('active')
      $('body').addClass('modal-open')
          $('#close-btn').on('click', function (e){
              $('.pop-up').removeClass('active')
              $('body').removeClass('modal-open')
      });
      $('.pop-up__container').on('click', function(){
        $('.pop-up').removeClass('active')
        $('body').removeClass('modal-open')
      })
      $('.pop-up__body').on('click', function (e){
        e.stopPropagation()
      })
    })


    $.validator.addMethod('regex', function(value, element, regexp){
      let regExp = new RegExp(regexp)
      return this.optional(element) || regExp.test(value)

    }, 'Please check input 110011');


    $('#forms').validate({
      rules : {
        name : {
          required : true,
          regex : "[A-Za-z]{1,32}"

        },
          email : {
            required : true,
            regex : "[A-Za-z]{1,32}"
        },
          tel : {
            required : true,
            digits : true,
            minlength : 10,
            maxlength : 11,
            regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
          }
      },
      messages : {
        name : 'Введите имя правильно',
        email : 'Введите почту правильно',
        tel : 'Номер должен быть больше 10 цифр'
      }
   })
   $('#forms-contact').validate({
    rules : {
      name : {
        required : true,
        regex : "[A-Za-z]{1,32}"
      },
        email : {
          required : true,
          regex : "[A-Za-z]{1,32}"
      },
        tel : {
          required : true,
          digits : true,
          minlength : 10,
          maxlength : 11,
          regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
        }

    },
    messages : {
      name : 'Введите имя правильно',
      email : 'Введите почту правильно',
      tel : 'Номер должен быть больше 10 цифр'
    }
 })
    $('#sendMail').on('click', function(){
      $('.pop-up__body').addClass('remove')
          $('.pop-up-end-body').fadeIn('active');
          $('#end__close-button').on('click', function() {
            location.reload();
          })
    })
    $('.product__btn').on('click', function (e){
      e.preventDefault()
      $('.product__btn').removeClass('active')
      $(this).addClass('active')
      if($(this).html() == "Пальто"){
        $('.set-box').removeClass('active');
        $('.coat').addClass('active');
      }else if($(this).html() == "Свитшоты"){
        $('.set-box').removeClass('active');
        $('.Sweatshirts').addClass('active');
      }else if($(this).html() == "Все"){
        $('.set-box').removeClass('active');
        $('.us-set').addClass('active');
      }else if($(this).html() == "Кардиганы"){
        $('.set-box').removeClass('active');
        $('.Cardigans').addClass('active');
      }else if($(this).html() == "Толстовки"){
        $('.set-box').removeClass('active');
        $('.hoodies').addClass('active');
      }
    })

    $('.shop_hover').on('click', function(){
      e.preventDefault()
      $('.footer-link').fadeIn(500);
      
      $('.shop_hover').click(function(){
        $('.footer-link').fadeOut(500);
      })
    })

    $('.bascet-close-btn-cl').on('click', function(){
      var btnClick = $(this).parent()
      btnClick.addClass('active');
    })
    




})


  
  





