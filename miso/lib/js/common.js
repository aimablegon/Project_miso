(function($){
	$(document).ready(function(){
		
	
	//즐겨찾기 추가
	$('.add_bookmark').on('click', function(e) {
	    var bookmarkURL = window.location.href;
	    var bookmarkTitle = document.title;
	    var triggerDefault = false;
	
	    if (window.sidebar && window.sidebar.addPanel) {
	        // Firefox version < 23
	        window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
	    } else if ((window.sidebar && (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) || (window.opera && window.print)) {
	        // Firefox version >= 23 and Opera Hotlist
	        var $this = $(this);
	        $this.attr('href', bookmarkURL);
	        $this.attr('title', bookmarkTitle);
	        $this.attr('rel', 'sidebar');
	        $this.off(e);
	        triggerDefault = true;
	    } else if (window.external && ('AddFavorite' in window.external)) {
	        // IE Favorite
	        window.external.AddFavorite(bookmarkURL, bookmarkTitle);
	    } else {
	        // WebKit - Safari/Chrome
	        alert((navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D 키를 눌러 즐겨찾기에 등록하실 수 있습니다.');
	    }
	
	    return triggerDefault;
	});
	
		
			
	function pc_navi(){
		$('.pc_nav .nav li a').mouseover(function() {
		   $('header').addClass('on')
		   $('.nav').addClass('on');
		   $('.dep2_bg').css({'display':'block'})
	// 	   $('.gnb_c_Btn').css({'display':'block'})
		});	 
		
		$('.pc_nav').mouseleave(function() {
		    $('header .gnb_wrap nav ul.on li .dep_2').css({'display':'none'})
			$('.dep2_bg').css({'display':'none'})
	// 		$('.gnb_c_Btn').css({'display':'none'})
			$('.nav').removeClass('on');
			$('header').removeClass('on');
		});	
		
		$('.pc_nav .nav li a').focus(function() {
		   $('.nav').addClass('on');
		   $('.dep2_bg').css({'display':'block'})
	// 	   $('.gnb_c_Btn').css({'display':'block'})
		});	
		
		
		$('.pc_nav .dep_1 li:last-child .dep_2 li:last-child a').focusout(function(){
			$('header .gnb_wrap nav ul.on li .dep_2').css({'display':'none'})
			$('.dep2_bg').css({'display':'none'})
	// 		$('.gnb_c_Btn').css({'display':'none'})
			$('.nav').removeClass('on');
		}) 
		
	// 접근성부분	
		$('.top_head_bt_group button').focus(function(){
			$('header .gnb_wrap nav ul.on li .dep_2').css({'display':'none'})
			$('.dep2_bg').css({'display':'none'})
			$('.nav').removeClass('on');
		})     
	};
	
	function mo_navi(){
		$('.mobile_nav button').click(function(){
			if($(this).hasClass('on')==true){
				$(this).removeClass('on')
				$('.mobile_nav .collapse').slideUp()
			}else{
				$(this).addClass('on')
				$('.mobile_nav .collapse').slideDown()
			}
			
		})
		
		$('.mobile_nav .nav>li>a').click(function() {
			if($(this).parent().hasClass('on')==false){
				$(this).parent().addClass("on").find("ul").slideDown().parent().siblings().removeClass("on").find("ul").slideUp()
			}else if($(this).parent().hasClass('on')==true){
				$(this).parent().removeClass("on").find("ul").slideUp()
			}
			
			
		});
				       
	};
	
	function sub_navi(){
		$('.sub_lnb_btn').click(function(){
			if($(this).hasClass("on")==false){
				$(this).addClass("on")
				$('.left_menu ul').slideDown()
				
			}else if($(this).hasClass("on")==true){
				$(this).removeClass("on")
				$('.left_menu ul').slideUp()
			}
		});
	}
	
	
	
	
	//언어
	$('.top_head_bt_group ul li:last-child a').focusout(function(){
		if($('.top_head_wrap>div').hasClass('open')){
			$('.top_head_wrap>div').removeClass('open')
		}
	})
	
	
	
	
	$('.all_menue').click(function(){
		$('.nav').addClass('on')
		$('.dep2_bg').css({'display':'block'});
	// 	$('.gnb_c_Btn').css({'display':'block'});
	})
	
	
	//footer
	
	$('footer .carousel li a').focus(function(){
		$('footer .carousel').carousel('pause');
	})
	
	$('.footer_btn .carousel-control').focusin(function(){
		$('footer .carousel').carousel('pause');
	})
		
	$('footer .footer_btn .carousel-control').focusout(function(){
		if($('.footer_slid').hasClass('on') == true){
			$('footer .carousel').carousel('pause')	
		}
		else if($('.footer_slid').hasClass('on') == false){
			$('footer .carousel').carousel('cycle');	
		}
	})
	
	$('footer .carousel').carousel('cycle')
	
	$('footer .play').click(function(){
		if($(this).hasClass('on') == false){
			$('footer .carousel').carousel('pause');
			$('footer .play span').removeClass("glyphicon-pause").addClass("glyphicon-play")
			$(this).addClass('on');
			$('.footer_slid').addClass('on');
		} else if($(this).hasClass('on') == true) {
			$('footer .carousel').carousel('cycle');
			$('footer .play span').removeClass("glyphicon-play").addClass("glyphicon-pause")
			$(this).removeClass('on');
			$('.footer_slid').removeClass('on')
		}
	})
	
	
	/*바로가기버튼*/
	$('.footer_drop .btn').click(function(){
		var url = $('.footer_drop select').val()
		window.open(url)
	})
	
	
	var window_width = $(window).width()
	
	sub_navi()
	mo_navi()
	pc_navi()	
	
						
	})
	
})(jQuery)




