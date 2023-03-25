var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

//КОРЗИНА
//добавляем в корзину
function addcart(id){
	var coord = $('#p'+id+' img').offset();
	var coordcart = $('#cart').offset();
	$('#p'+id+' .imgwrap img').clone().addClass("cartanim").appendTo("body");
	$('.cartanim').css({
		position: 'absolute',
		left: coord.left,
		top: coord.top
	});
	
	$('.cartanim').animate({
		top: coordcart.top,
		left: coordcart.left,
		width: 10,
		height: 10,
		opacity: 0
	}, 400);
	$('#addcartbut'+id).removeAttr('onclick').html('Добавлен').removeClass('btn-warning').addClass('btn-default');
	$.post('/engine/products/cart-fun.php', {mode: 'addcart', id: id}, onAjaxSuccess);
	function onAjaxSuccess(data) {
		var sum = parseInt($('#sumcart').attr('scart'));
		sum++;
		$('#sumcart').html('В корзине: <b>'+sum+'</b>');
		
	};
}

//кнопка вверх
function topButton() {
	var bt = $('.iakor').offset();
	if(bt.top >= 100){
		$('.a-top').fadeIn();
		$('.rtop').removeClass('revert').removeClass('rtop');
	}else{
		$('.a-top:not(.revert)').fadeOut();
	}
}


$(document).ready(function(){
	topButton();
	$('.a-top').click(function() {
		var bt = $('.iakor').offset();
		if(bt.top >= 100){
			$('body,html').animate({scrollTop: 0}, 300, function(){
				$('.a-top').addClass('rtop');
			});
			$(this).attr('revert',bt.top);
			$(this).addClass('revert'); 
		}else{
			var rev = $(this).attr('revert');
			$('body,html').animate({scrollTop: rev}, 300);
			$(this).removeClass('revert').hide();
		}
	});
	//ПОИСК
    $("#search").keyup(function(event){
		var text = $(this).val();
		
		$.post('/engine/search-fun.php', {mode: 'search', text: text}, onAjaxSuccess);
		function onAjaxSuccess(data) {
			if (data != 0){
				$('#searchresult').html(data);
				$('#searchresult').show();
			}else{
				$('#searchresult').html("");
				$('#searchresult').hide();
			}
		};
	});
	
});


$(window).resize(function(){
	topButton();
});

window.onscroll = function() {
	topButton();
}

$('.carousel').carousel({
  interval: 0
})



}
/*
     FILE ARCHIVED ON 08:51:09 Oct 13, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:36:57 May 07, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 645.057
  exclusion.robots: 0.092
  exclusion.robots.policy: 0.084
  RedisCDXSource: 4.076
  esindex: 0.007
  LoadShardBlock: 618.098 (3)
  PetaboxLoader3.datanode: 614.281 (5)
  CDXLines.iter: 19.717 (3)
  load_resource: 248.77 (2)
  PetaboxLoader3.resolve: 197.243 (2)
*/