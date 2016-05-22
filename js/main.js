// JavaScript Document
$(document).ready(function() {
    
	$(".btnext").click(function(e) {
        var size = $('.slider').find('.elements').size();
		$('.slider').find('.elements').each(
			function(index,value){
				if($(value).hasClass('e_visible')){
					
					$(value).hide();
					$(value).removeClass('e_visible');
					
					if(index+1<size){
						
						$($('.slider').find('.elements').get(index+1)).slideDown();
						$($('.slider').find('.elements').get(index+1)).addClass('e_visible');
						return false;
						
					}else{
						
						$($('.slider').find('.elements').get(0)).slideDown();
						$($('.slider').find('.elements').get(0)).addClass('e_visible');	
						return false;
						
					}
				}
		});
    });
	
});