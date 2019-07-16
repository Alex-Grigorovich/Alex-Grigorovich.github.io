function parallax(event){
			this.querySelectorAll('.layer').forEach(layer => {
				let speed = layer.getAttribute('data-speed');
				layer.style.transform =`translateY(${event.clientY*speed/110}px)`
			});
		}

document.addEventListener('mousemove', parallax);


//
//$('.menu-btn').on('click', function(e) {
//  e.preventDefault();
//  $('.menu').toggleClass('menu_active');
//  $('.content').toggleClass('content_active');
//})
//
//
//$('.menu-btn').on('click', function(e) {
//  e.preventDefault;
//  $(this).toggleClass('menu-btn_active');
//});



  $('.carousel').slick({
	  centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
	  	centerPadding: '10px',
nextArrow: '<span type="button" class="product-next"><img src="./img/arrow-right.png" alt=""></span>',
  prevArrow: '<span type="button" class="product-prev"><img src="./img/arrow-left.png" alt=""></span>'
  
});