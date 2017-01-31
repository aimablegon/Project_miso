(function($){
$(document).ready(function(){
	
	
	$('.main_top_btn a').focusin(function(){
		$('.main_body .carousel').carousel('pause');
	})
	
	$('.main_top_btn a').focusout(function(){
		if($('.main_top_btn').hasClass('on')==false){
			$('.main_top_btn a').focusout(function(){
				$('.main_body .carousel').carousel('cycle');
			})
		}
		if($('.main_top_btn').hasClass('on')==true){
			$('.main_top_btn a').focusout(function(){
				$('.main_body .carousel').carousel('pause');
			})
		}
	})
	
	
		
		
	$('.main_top_btn .play').click(function(){
		
		if($(this).hasClass('on') == false){
			$('.main_body .carousel').carousel('pause');
			$('.main_body .play span').removeClass("glyphicon-pause").addClass("glyphicon-play")
			$(this).addClass('on');
			$('.main_top_btn').addClass('on')
		} else if($(this).hasClass('on') == true) {
			$('.main_body .carousel').carousel('cycle');
			$('.main_body .play span').removeClass("glyphicon-play").addClass("glyphicon-pause")
			$(this).removeClass('on');
			$('.main_top_btn').removeClass('on')
		}
	})
	
	$('.tab_bord ul li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	})	
	
	$('.main_body .carousel').carousel('pause');
	
	
	
	
	/*서민금융지원상품을 찾으세요?*/
	var p_banner_length = $('.p_banner_wrap li').length
	if(p_banner_length<=5){
		$('.product_banner button').css({'display':'none'})
	}else{$('.product_banner button').css({'display':'block'})}
	
	
	
	function banner_li(){
		var window_width = $(window).width();
		var container_width = $('.container').width()
		if(window_width>749){
			var container_width = $('.container').width();
			var product_li = container_width/5
			$('.product_banner ul li').css({'width':product_li})
		}else if(window_width<750){
			var container_width = $('.p_banner_wrap').width();
			var product_li = container_width/3
			$('.product_banner ul li').css({'width':product_li})
		}
	}
	
	banner_li()
	
	$(window).resize(function() {
 		banner_li()
	});

	
	var count = 0
	var tab_count = 0
		

	if($(window).width()>749){
		
		var this_index1 
		var this_index2
		
		//탭으로 움직일시..	
		$('.product_banner ul li a').focusin(function(){
			var pro_length = $('.product_banner ul li').length
			 
			this_index1 = $(this).parent().index()	
			
			$('.product_banner ul li a').focusout(function(){
				this_index2 = $(this).parent().index()						
			})
			
			if(this_index1>this_index2 && pro_length-this_index2>3){
				$('.product_banner .main_btn_next').trigger("click")
			}
			else if(this_index1<this_index2 && this_index2<5){
				$('.product_banner .main_btn_prev').trigger("click")
			}
		})	
		
		//버튼으로 클릭했을때..
		$('.product_banner .main_btn_next').click(function(){
			count++
		
			var move_product_li = $('.product_banner ul li').width()
			var w_m_product_li = move_product_li*count
			$('.product_banner ul').stop().animate({'left':-w_m_product_li})
						
			var banner_move_index= $('.product_banner ul li').length-4;
			if(count >= banner_move_index){
				$('.product_banner ul').stop()
				count=banner_move_index-1
			}		
		})
		
		$('.product_banner .main_btn_prev').click(function(){
			count--
			
			
			var move_product_li = $('.product_banner ul li').width()
			var w_m_product_li = move_product_li*count
			$('.product_banner ul').stop().animate({'left': - w_m_product_li})
			if(count<0){			
				count=0
				$('.product_banner ul').stop()
			}			
		})
	}
	
	
	
	if($(window).width()<750){
		$('.product_banner .main_btn_next').click(function(){
			
			count++
			var move_product_li = $('.product_banner ul li').width()
			var w_m_product_li = move_product_li*count
			$('.product_banner ul').stop().animate({'left':-w_m_product_li})
			
			
			var banner_move_index= $('.product_banner ul li').length-2;
			
			if(count >= banner_move_index){
				$('.product_banner ul').stop()
				count=banner_move_index-1
			}		
		})
		
		$('.product_banner .main_btn_prev').click(function(){
			count--
			var move_product_li = $('.product_banner ul li').width()
			var w_m_product_li = move_product_li*count
			$('.product_banner ul').stop().animate({'left': - w_m_product_li})
			
			if(count<0){			
				count=0
				$('.product_banner ul').stop()
			}
				
		})
	}
	
	
	/*새로운 인생을 응원합니다!*/
	
	var p_cheer_length = $('.main_cheer li').length
	if(p_cheer_length<=5){
		$('.main_cheer button').css({'display':'none'})
	}else{$('.main_cheer button').css({'display':'block'})}
	
	
	function cheer_li(){
		var window_width = $(window).width();
		var container_width = $('.container').width()
		if(window_width>749){
			var container_width = $('.container').width();
			var product_li = container_width/5-0.5
			$('.main_cheer ul li').css({'width':product_li})
		}else if(window_width<750){
			var container_width = $('.main_cheer .wrap').width();
			var product_li = container_width/3
			$('.main_cheer ul li').css({'width':product_li})
		}
	}
	cheer_li()
	$(window).resize(function() {
 		cheer_li()
	});
	
	var cheercount = 0
	
	
	if($(window).width()>749){
		var main_index1 
		var main_index2
		
		//탭으로 움직일시..	
		$('.main_cheer ul li a').focusin(function(){
			var main_length = $('.main_cheer ul li').length
			 
			main_index1 = $(this).parent().index()	
			
			$('.main_cheer ul li a').focusout(function(){
				main_index2 = $(this).parent().index()						
			})
			
			if(main_index1>main_index2 && main_length-main_index2>5){
				$('.main_cheer .main_btn_next').trigger("click")
			}
			else if(main_index1<main_index2 && main_index2<5){
				$('.main_cheer .main_btn_prev').trigger("click")
			}
		})
				
		
		$('.main_cheer .main_btn_next').click(function(){
			cheercount++
			var move_cheer_li = $('.main_cheer ul li').width()
			var w_m_cheer_li = move_cheer_li*cheercount
			$('.main_cheer ul').stop().animate({'left':-w_m_cheer_li})	;
			
			var cheercount_index= $('.main_cheer ul li').length-4;
			if(cheercount>=cheercount_index){
				$('.main_cheer ul').stop()
				cheercount=cheercount_index-1
			}
		})
		
		$('.main_cheer .main_btn_prev').click(function(){
			cheercount--
			var move_cheer_li = $('.main_cheer ul li').width()
			var w_m_cheer_li = move_cheer_li*cheercount
			$('.main_cheer ul').stop().animate({'left': - w_m_cheer_li})
			if(cheercount<0){			
				cheercount=0
				$('.main_cheer ul').stop()
			}		
		})
	}
	
	
	$(window).scroll(function(){
     var scroll_top = $(window).scrollTop()
	     $('.top_btn').css({'top':scroll_top+150})
// 	     if(scroll_top<364){
// 		     $('.left_menu').css({'padding-top':0})
// 			 $('.sub_contain').css({'padding-top':0})
// 	     }	    	      
    })
	
	if($(window).width()<750){
		$('.main_cheer .main_btn_next').click(function(){
			cheercount++
			var move_cheer_li = $('.main_cheer ul li').width()
			var w_m_cheer_li = move_cheer_li*cheercount
			
			$('.main_cheer ul').stop().animate({'left':-w_m_cheer_li})
			
			var cheercount_index= $('.main_cheer ul li').length-2;
			if(cheercount>=cheercount_index){
				$('.main_cheer ul').stop()
				cheercount=cheercount_index-1
			}				
		})
		
		$('.main_cheer .main_btn_prev').click(function(){
			cheercount--
			var move_cheer_li = $('.main_cheer ul li').width()
			var w_m_cheer_li = move_cheer_li*cheercount
			$('.main_cheer ul').stop().animate({'left':-w_m_cheer_li})
			if(cheercount<0){			
				cheercount=0
				$('.main_cheer ul').stop()
			}
				
		})
	}
	
	
	
	
	/*모바일 공지사항*/
	var mobile_count=0
	$('.mobile_bord_wrap .left').click(function(){
		mobile_count--
		$('.mobile_bord_wrap ul li').eq(mobile_count).addClass('on').siblings().removeClass('on')
		if(mobile_count<0){
			mobile_count=$('.mobile_bord_wrap ul li').length-1
			$('.mobile_bord_wrap ul li').eq(mobile_count).addClass('on').siblings().removeClass('on')
		}	
	})
	
	
	$('.mobile_bord_wrap .right').click(function(){
		mobile_count++
		$('.mobile_bord_wrap ul li').eq(mobile_count).addClass('on').siblings().removeClass('on')
		
		if(mobile_count==$('.mobile_bord_wrap ul li').length){
			mobile_count=0
			$('.mobile_bord_wrap ul li').eq(mobile_count).addClass('on').siblings().removeClass('on')
			
		}
		
	})
	var popup_height=$('.popup_style1').height()
	$('.popup_style2').css({'top':popup_height})
	$('.popup button').click(function(){
		$(this).parent().parent().parent().css({'display':'none'})
	})
	
})
})(jQuery)