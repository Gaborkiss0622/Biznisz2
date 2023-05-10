$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
  
  });
  $('.navlinks li a').on('click', function () {
    $('.navTrigger').removeClass('active');
    $('#mainListDiv').removeClass('show_list');
  });
  
  $(window).on('scroll', function () {
    var currentPos = $(this).scrollTop();
    $('section[id]').each(function () {
      var top = $(this).offset().top;
      var bottom = top + $(this).outerHeight();
      var id = $(this).attr('id');
      var $navItem = $('[data-nav="' + id + '"]');
      if (currentPos >= top && currentPos <= bottom) {
        $navItem.addClass('active');
      } else {
        $navItem.removeClass('active');
      }
    });
  });
  /*Slider*/
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
  showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
  showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active1";
  captionText.innerHTML = dots[slideIndex-1].alt;
  }    