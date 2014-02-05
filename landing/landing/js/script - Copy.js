$(document).ready(function(e) {  var s=0;var top;var temp;var tempm;var tempe;var temps;var tempc;var p=0;
	$(document).scroll(function(e) { top = $('body').scrollTop(); 
						if((top>0)&&top<2400){
						  if(p==0)if(temp<top)if(s!=1){$('html,body').animate({scrollTop: 2400},2400,'easeInQuad');s=1;p=1;}
						  if(p==1)if(temp>top)if(s!=1){p=10;$('html,body').animate({scrollTop: 0},2400,'easeInQuad',function(){p=0});s=1}
						}else s=0;$('#check').html(top);$('#check').append(temp);$('#check').append(s);
						temp=top;
						if((top>2401)&&top<4800){
						  if(p==1)if(tempm<top)if(s!=2){$('html,body').animate({scrollTop: 4800},2400,'easeInQuad');s=2;p=2;}
						  if(p==2)if(tempm>top)if(s!=2){p=10;$('html,body').animate({scrollTop: 2400},2400,'easeInQuad',function(){p=1});s=2;}
						}else s=0;$('#check').html(top);$('#check').append(tempm);$('#check').append(temp);$('#check').append(p);
						tempm=top;
						if((top>4800)&&top<6000){
						  if(p==2)if(tempe<top)if(s!=3){$('html,body').animate({scrollTop: 6000},1200,'easeInQuad');s=3;p=3}
						  if(p==3)if(tempe>top)if(s!=3){p=10;$('html,body').animate({scrollTop: 4800},1200,'easeInQuad',function(){p=2});s=3;}
						}else s=0;//$('#check').html(top);$('#check').append(tempe);$('#check').append(s);
						tempe=top;
						if((top>6000)&&top<7200){
						  if(p==3)if(temps<top)if(s!=1){$('html,body').animate({scrollTop: 7200},1200,'easeInQuad');s=1;p=4}
						  if(p==4)if(temps>top)if(s!=1){p=10;$('html,body').animate({scrollTop: 6000},1200,'easeInQuad',function(){p=3});s=1;}
						}else s=0;//$('#check').html(top);$('#check').append(temps);$('#check').append(s);
						temps=top;
						if(top>7200){
						 // if(tempc<top)if(s!=1){$('html,body').animate({scrollTop: 7300},100,'easeInQuad');s=1;}
						  //if(tempc>top)if(s!=1){$('html,body').animate({scrollTop: 0},2400,'easeInQuad');s=1;}
						}else s=0;//$('#check').html(top);$('#check').append(tempc);$('#check').append(s);
						tempc=top;
    });
});