$(document).ready(function(){
	

	
	/*사이드메뉴*/
	var left_height = $('.left_menu').height();
	
	function left_img_banner(){
		$('.left_menu .left_menu_img').css({'top':left_height+20}) 
		$(window).scroll(function(){			
			 var scroll_top = $(window).scrollTop()
			 var left_if_height= $('#main_cont').height()+$('.left_menu').height();
		     /*left_menu*/
		     if(scroll_top>left_if_height){
			     $('.left_menu .left_menu_img').css({'top':scroll_top+20})
		     }			
		})
	}
	
	
	if($(window).width()>749){
		left_img_banner()
	}
	$(window).resize(function() {
 		if($(window).width()>749){
			left_img_banner()
		}
	});

	
	
	
})

