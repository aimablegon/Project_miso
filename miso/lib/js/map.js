$(document).ready(function(){
	var map_width=$('.map').width();
	$('.root_daum_roughmap').css({'width':map_width})
	
	$(window).resize(function() {
 		map_width=$('.map').width();
 		$('.root_daum_roughmap').css({'width':map_width})
	});
	
})