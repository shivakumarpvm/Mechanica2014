$(document).ready(function(e) { 
/*var deck = new $.scrolldeck({
				buttons: '.nav-button',
				easing: 'easeInOutExpo'
			});
			
			// add other animations using the scrolldeck.controller (see Scrollorama plugin)
			console.log(deck.controller);
			deck.controller.animate('#instructions',{ duration: 100, property:'opacity', end: 0 });

*/

 var s=0;var top;var temp;var tempm;var tempe;var temps;var tempc;var p=0;var offset=40;var up;
// $("body").off('mousewheel', false);
	$(document).keydown(function(e) { //alert(e.keyCode == 40);
						    if (e.keyCode == 37||e.keyCode == 39||e.keyCode == 40||e.keyCode == 38) { 	
						top = $('body').scrollTop();
						if(e.keyCode == 39||e.keyCode == 40){top = $('body').scrollTop()+20;up=1}
						if(e.keyCode == 37||e.keyCode == 38){top = $('body').scrollTop()-20;up=0}
						$('#check').html(top);
						if((top>0)&&top<2400){
						  if(p==0)if(up==1){$('html,body').animate({scrollTop: 2400},2400,'easeInQuad');s=1;p=1;}
						  if(p==1)if(up==0){p=10;$('html,body').animate({scrollTop: 0},2400,'easeInQuad',function(){p=0});s=1}
						}
						temp=top;
						if((top>2401)&&top<4000){
						  if(p==1)if(up==1){$('html,body').animate({scrollTop: 4000},1400,'easeInQuad');s=2;p=2;}
						  if(p==2)if(up==0){p=10;$('html,body').animate({scrollTop: 2400},1400,'easeInQuad',function(){p=1});s=2;}
						}
						tempm=top;
						if((top>4000)&&top<4400){
						  if(p==2)if(up==1){$('html,body').animate({scrollTop: 4400},400,'easeInQuad');s=2;p=3;}
						  if(p==3)if(up==0){p=10;$('html,body').animate({scrollTop: 4000},400,'easeInQuad',function(){p=2});s=2;}
						}
						tempm1=top;
						if((top>4400)&&top<4800){
						  if(p==3)if(up==1){$('html,body').animate({scrollTop: 4800},400,'easeInQuad');s=2;p=4;}
						  if(p==4)if(up==0){p=10;$('html,body').animate({scrollTop: 4400},400,'easeInQuad',function(){p=3});s=2;}
						}
						tempm2=top;
						if((top>4800)&&top<6000){
						  if(p==4)if(up==1){$('html,body').animate({scrollTop: 6000},1200,'easeInQuad');s=3;p=5}
						  if(p==5)if(up==0){p=10;$('html,body').animate({scrollTop: 4800},1200,'easeInQuad',function(){p=4});s=3;}
						}
						tempe=top;
						if((top>6000)&&top<7200){
						  if(p==5)if(up==1){$('html,body').animate({scrollTop: 7200},1200,'easeInQuad');s=1;p=6}
						  if(p==6)if(up==0){p=10;$('html,body').animate({scrollTop: 6000},1200,'easeInQuad',function(){p=5});s=1;}
						}
						temps=top;
						if(top>7200){
						 // if(tempc<top)if(s!=1){$('html,body').animate({scrollTop: 7300},100,'easeInQuad');s=1;}
						  //if(tempc>top)if(s!=1){$('html,body').animate({scrollTop: 0},2400,'easeInQuad');s=1;}
						}//$('#check').html(top);$('#check').append(tempc);$('#check').append(s);
						tempc=top;$('#check').append(p);
						}
    });
	$("#down").click(function(e) {
        p=1;
		$('html,body').animate({scrollTop: 2400},2400,'easeInQuad');
    });
	/*$(document).scroll(function(e) {
        top = $('body').scrollTop();
						$('#check').html(top);
						if((top>0)&&top<2400){
						  if(p==0)p=1;
						  if(p==1)p=1;
						  }
						
						temp=top;
						if((top>2401)&&top<4000){
						  if(p==1)p=2;
						  if(p==2)p=2;
						}
						tempm=top;
						if((top>4000)&&top<4400){
						  if(p==2)p=3;
						  if(p==3)p=2;
						}
						tempm1=top;
						if((top>4400)&&top<4800){
						  if(p==3)p=4;
						  if(p==4)p=3;
						}
						tempm2=top;
						if((top>4800)&&top<6000){
						  if(p==4)p=5;
						  if(p==5)p=4;
						}
						tempe=top;
						if((top>6000)&&top<7200){
						  if(p==5)p=6;
						  if(p==6)p=5;
						}
						temps=top;
						if(top>7200){
						 // if(tempc<top)if(s!=1){$('html,body').animate({scrollTop: 7300},100,'easeInQuad');s=1;}
						  //if(tempc>top)if(s!=1){$('html,body').animate({scrollTop: 0},2400,'easeInQuad');s=1;}
						}//$('#check').html(top);$('#check').append(tempc);$('#check').append(s);
						tempc=top;$('#check').append(p);
						
    });*/
});