window.onload = function(){
	var box = document.getElementsByClassName('box')[0];
	var wid = document.documentElement.clientWidth;
	var hei = document.documentElement.clientHeight;
	box.style.width = wid+'px';
	box.style.height = hei+'px';


	setTimeout(function () {
        $('#loading').hide();
        $('.first').show();
    }, 4000);

	

	$('#img2').delay(4000).fadeIn();
	$('#img3').delay(4500).fadeIn();
	$('#img4').delay(6000).animate({width:10},700,function(){
		$('.solid').fadeIn(); 
	});
	
	


	var video = $('#video');
	var yinz = $('.yinz');
	var fy = $('#fy');
	var mp3 = $('.mp3');
    $(".two").css({"width":wid+'px',"height":hei+'px'});
	video.css({"width":wid+'px',"height":hei+'px'});

	video.get(0).pause();




	$('.solid').on('click',function(){

		$('.fir').css('display','none');
		$('audio').removeAttr('src');
		$(".two").css("display","block");
		video.get(0).play();
		video.attr('autoplay');

		

		// fy.css('display','block');

		// $('.audio').get(0).play();

		// setTimeout(function(){
			
		// 	fy.css('display','none');

		
			// $('.top').delay(500).fadeIn();
			// $('.letter').delay(1200).animate({bottom:80},1000);
			// $('.text').delay(2100).fadeIn();
			// yinz.delay(2300).fadeIn(1000);
		// },1300)	



	})

document.getElementById("video").onended = function() {myFunction()};
	function myFunction() {
		$(".two").css('display','none');
	    document.getElementById("end").style.display = 'block';
	    $('img').removeClass('rotate');

	    document.addEventListener("WeixinJSBridgeReady", function () {
			$(".two").css('display','none');
	    	document.getElementById("end").style.display = 'block';
		});
	}


	





	$('.click').on('click',function(){
		$('#btn').toggleClass("rotate"); 
		
		if($('#btn').hasClass("rotate")){
			$('.rota').hide();
        	$('#btn').show();
            video.get(0).muted = false;
            mp3.get(0).play();
            
        }else{
        	$('.rota').show();
        	$('#btn').hide();
            video.get(0).muted = true;
            mp3.get(0).pause();
        }

	})

		
	



	$(document).on('touchmove',function (e){
	    e.preventDefault();
	});


}