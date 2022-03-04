// event pada link
$('.page-scroll').on('click',function(event){
	// ambil href  
	var tujuan = $(this).attr('href');

	var elementTujuan = $(tujuan);

	// pindahkan scroll
	$('html,body').animate({
		scrollTop:elementTujuan.offset().top -50
	})

	event.preventDefault();

});


// menyimpan parallax
$(window).scroll(function(){

	// jumbotron
	var windowscroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform':'translate(0px, '+windowscroll/4+'%)'
	});

	$('.jumbotron h3').css({
		'transform':'translate(0px, '+windowscroll+'%)'
	});

	$('.jumbotron h2').css({
		'transform':'translate(0px, '+windowscroll+'%)'
	});


	// portfolio
	if(windowscroll > 403){
		$('.portfolio .thumb').each(function(i){
			setTimeout(function() {
			 $('.portfolio .thumb').eq(i).addClass('muncul');
			}, 200*(i+1));
		})
	}
// 

});



