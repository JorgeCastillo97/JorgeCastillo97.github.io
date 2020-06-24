var n = document.querySelector('.navbar');
var w = document.querySelector('.wrapper');
w.addEventListener('scroll', ()=>{
  console.log(w.scollTop);
  if (w.scrollTop > 100) {
    n.classList.add('scrolled');
    n.classList.remove('ontop');
  } else {
    n.classList.remove('scrolled');
    n.classList.add('ontop');
  }
});

$(document).ready(()=>{
  $('.menu').click(()=>{
    $('ul').toggleClass('active');
    if ($('.toggle i').hasClass('fa fa-bars')) {
      $('.toggle i').removeClass('fa fa-bars');
      $('.toggle i').addClass('fa fa-times');
    } else {
      $('.toggle i').removeClass('fa fa-times');
      $('.toggle i').addClass('fa fa-bars');
    }

  });
});

$('.link').click(()=>{
  if($('ul').hasClass('active')) {
    $('ul').removeClass('active');
  }
  if ($('.toggle i').hasClass('fa fa-bars')) {
    $('.toggle i').removeClass('fa fa-bars');
    $('.toggle i').addClass('fa fa-times');
  } else {
    $('.toggle i').removeClass('fa fa-times');
    $('.toggle i').addClass('fa fa-bars');
  }
});
