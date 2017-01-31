$(document).ready(function(){
	
	$('.target_tab li').click(function(){
		/*대상별*/
		$('.result_wrap h5 span').empty();
		
		if($('.target_tab li:nth-child(2)').hasClass('on')){
			$('.result_wrap h5 span').text('근로자')
		}
		else if($('.target_tab li:nth-child(3)').hasClass('on')){
			$('.result_wrap h5 span').text('대학생,청년')
		}
		else if($('.target_tab li:nth-child(4)').hasClass('on')){
			$('.result_wrap h5 span').text('신용회복지원자')
		}
		else if($('.target_tab li:nth-child(1)').hasClass('on')){
			$('.result_wrap h5 span').text('사업자')
		}
	})
	
	$('.use_tab li').click(function(){
		/*용도별*/
		$('.result_wrap h5 span').empty();
		
		if($('.use_tab li:nth-child(2)').hasClass('on')){
			$('.result_wrap h5 span').text('운영시설')
		}
		else if($('.use_tab li:nth-child(3)').hasClass('on')){
			$('.result_wrap h5 span').text('생계')
		}
		else if($('.use_tab li:nth-child(4)').hasClass('on')){
			$('.result_wrap h5 span').text('주거')
		}
		else if($('.use_tab li:nth-child(5)').hasClass('on')){
			$('.result_wrap h5 span').text('저금리전환')
		}
		else if($('.use_tab li:nth-child(6)').hasClass('on')){
			$('.result_wrap h5 span').text('학자금')
		}
		else if($('.use_tab li:nth-child(1)').hasClass('on')){
			$('.result_wrap h5 span').text('창업')
		}
	})
	/*탭메뉴*/
	$('.hide_tab_btn li a').click(function(){
		$(this).parent().addClass('on').siblings().removeClass('on')
		var tab_idx=$(this).parent().index()
		$('.tab_cont_wrap>div').eq(tab_idx).addClass('on').siblings().removeClass('on')
	})
	
	/*탭메뉴*/
	$('.no_link_tab>ul>li button').click(function(){
		$(this).parent().addClass('on').siblings().removeClass('on')
		var tab_idx=$(this).parent().index()
		$('.no_link_tab_cont>div').eq(tab_idx).addClass('on').siblings().removeClass('on')
	})
	
	/*이미지탭메뉴1*/
	$('.target_tab li a').click(function(){
		$(this).parent().addClass('on').siblings().removeClass('on')
	})
	
	/*이미지탭메뉴2*/
	$('.use_tab li a').click(function(){
		$(this).parent().addClass('on').siblings().removeClass('on')
	})
	
	/*고객센터 pc*/
	$('.pc_map .center_map1 ul li a').click(function(){
		var location_index= $(this).parent().index()
		$(this).parent().addClass('on').siblings().removeClass('on')
		$('.center_map2>div').eq(location_index).addClass('on').siblings().removeClass('on')
	})
	
	/*고객센터 모바일*/
	$('.center_map_mobile .center_map1 ul li a').click(function(){
		var location_index= $(this).parent().index();
		$('.center_map_mobile .center_map2').addClass('on').siblings().removeClass('on')
		$('.center_map_mobile .center_map2>div').eq(location_index).addClass('on').siblings().removeClass('on')
	})
	$('.return_bigmap').click(function(){
		$('.center_map_mobile .center_map2').removeClass('on').siblings().addClass('on')
	})
	
	/*삭제버튼*/
	$('.del_alert_btn').click(function(){
		confirm('정말삭제하시겠습니까?')
	})
	
	/*qna글쓰기 버튼*/
	
	$('.qna_cancle_btn').click(function(){
		confirm('작성하신 글이 삭제됩니다.')
	})
	
	/*신문고 작성 아코디언*/
	$('.accordion .side_btn button').click(function(){
		if($(this).hasClass('on')==false){
			$(this).addClass('on').parent().parent().find('.ac_cont').slideDown()
		}
		else if($(this).hasClass('on')==true){
			$(this).removeClass('on').parent().parent().find('.ac_cont').slideUp()
		}
		
	})
	
	
	/*윤리강령탭*/
	$('.intro_ethics .tab_cont2 ul li button').click(function(){
		$(this).parent().addClass('on').siblings().removeClass('on')
		var ethics_idx=$(this).parent().index()
		$('.tab_cont2_cont_wrap>div').eq(ethics_idx).addClass('on').siblings().removeClass('on')
	})
	
	/*휴먼예금조회 모달 탭부분.*/
	$('#deposit_modal .modal-body ul button').click(function(){
		$(this).parent().addClass('on').siblings().removeClass('on');
		var deposit_modal_idx=$(this).parent().index();
		$('.modal_cont_wrap>div').eq(deposit_modal_idx).addClass('on').siblings().removeClass('on')
	})
	
	/*팝업관련*/
	$('.modal1_btn').click(function(){
		$('#deposit_modal').css({'display':'none'})
	})
	
	
	/*top버튼&본문바로가기*/
	$('.top_btn>a').click(function(){
		
		$('html,body').animate({
			scrollTop:0
		}, '1000');
		
		/*top 접근성부분*/
		$('.sub_top .top_button_wrap li:first-child a').focus()
		
		return false;
	})
	
			
	$(window).scroll(function(){
	     var scroll_top = $(window).scrollTop()
	     if(scroll_top>200){
		   $('.top_btn').css({'top':scroll_top-200})  
	     }
// 	     $('.top_btn').css({'top':scroll_top})
// 	     if(scroll_top<364){
// 		     $('.left_menu').css({'padding-top':0})
// 			 $('.sub_contain').css({'padding-top':0})
// 	     }	    	      
    })
    
   /*selectbox전체선택*/
	$("#total").click(function() {
        $("input[name=chk]:checkbox").attr("checked", true);
    });

    

	/*모달*/
	$('.find_adress button').click(function(){
		$(this).parent().addClass('on').siblings().removeClass('on')
	})	    
    
    
    /*재진단 접근성*/
    $('.btnReset').click(function(){
	    $('.result_btn_focus>div:first-child input').focus()
    })
	
	/*지도*/
	$('map').remove()
	
	
})