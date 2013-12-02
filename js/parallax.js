$(function(){
	
	var boxTop = $('#slide1').offset();
	var box1Pos = $('#slide2').offset();
	var box2Pos = $('#slide3').offset();
	var box3Pos = $('#footer').offset();

	
	$("#slide1 > div.container > #content >h1>img").delay( 300 ).animate({ opacity: '1'},{duration:1700, easing:'easeInOutSine' });
	$("#slide1 > div.container > #content > .catch  ").delay( 1200 ).animate({ opacity: '1'},{duration:1900, easing:'easeInOutSine' });
	$("#slide1 > div.container > #content > .catch  > div.pointWrap > h3").delay( 2200 ).animate({ opacity: '1',marginLeft:'0'},{ duration:600,easing:'easeInOutSine' });
	$("#slide1 > div.container > #content > .catch  > div.pointWrap > p ").delay( 3200 ).animate({ opacity: '1'},{duration:3500, easing:'easeInOutSine' });
	

	
	$(window).scroll(function(){
		var y = $(this).scrollTop();
		
		$("#slide1").css('background-position','0%' + y +'px');
	
	

	
		if(y > box1Pos.top-700){	
			$("#slide2 > div.container > #content >h1").delay( 10 ).animate({ opacity: '1'},{duration:1000,  easing:'easeInOutSine' });
			$("#slide2 > div.container > #content > .samplecode").delay( 1000 ).animate({ opacity: '1'},{duration:2000,  easing:'easeInOutSine' });
		}

	
		
		
		if(y > box2Pos.top-700){			
			$("#slide3 > div.container > #content >h1").delay( 10 ).animate({ opacity: '1'},{duration:1000,  easing:'easeInOutSine' });
			$("#slide3 > div.container > #content > .bx-wrapper ").delay( 1000 ).animate({ opacity: '1'},{duration:2000,  easing:'easeInOutSine' });
		}
		
		
		
		
		if(y > box3Pos.top  || y < box3Pos.top){
			$("#footer").css('background-position','50% ' + (y-box3Pos.top)*3 +'px'); 
		}else{
			$("#footer").css('background-position','50% top');			
		}
		
		
		
		
	});
});


