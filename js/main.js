$(document).ready(function () {
	$("#menu_responsive #after").on('click',function() {
		$('.menu_responsive').toggleClass('active');
	});
	$("body").on('click', function(e){
		$('.menu_responsive').removeClass('active');
	})
	$(".menu_responsive").on('click', function (e) {
		e.stopPropagation();
	})
})
	