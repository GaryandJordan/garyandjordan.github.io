detailsTransition = 0
$(window).scroll(function(){
	var position = $(this).scrollTop();
	var openingHeight = $(window).height() / 4;

	if (position > openingHeight && detailsTransition == 0) {
		detailsTransition = 1;
		$(".bouncingArrow").fadeOut(1500);
		$("#marriageDetails01, #hiddenDetails").fadeIn(1500);
	};
});
$(document).ready(function () {
	$('div.container-fluid').fadeIn(5000);
    $('#googleMaps').addClass('scrolloff');
    $('#googleMapsCover').on('click', function () {
        $('#googleMaps').removeClass('scrolloff');
    });
    $("#googleMaps").mouseleave(function () {
        $('#googleMaps').addClass('scrolloff');
    });
});