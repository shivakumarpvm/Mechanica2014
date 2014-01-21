$(document).ready(function(e) {
    //$(".lab_item:nth-child(17) .hexagon-in2").animate({opacity:0.5,backgroundColor:"#1oo"});
	//var s=$('.lab_item:nth-child(17) .hexagon-in2').css("background-color");
	//alert(s);
	initial();
	function initial(){
	 $(".lab_item:nth-child(17) .hexagon-in2").animate({backgroundColor:'#00bff5'},1000);
	 $(".lab_item:nth-child(18) .hexagon-in2").animate({backgroundColor:'#fcec03'},1000);
	 $(".lab_item:nth-child(26) .hexagon-in2").animate({backgroundColor:'#ce2d32'},1000);
	 $(".lab_item:nth-child(27) .hexagon-in2").animate({backgroundColor:'#fff',opacity:0},1000);
	 $(".lab_item:nth-child(28) .hexagon-in2").animate({backgroundColor:'#f78e57'},1000);
	 $(".lab_item:nth-child(37) .hexagon-in2").animate({backgroundColor:'#5eb75d'},1000);
	 $(".lab_item:nth-child(38) .hexagon-in2").animate({backgroundColor:'#875fa8'},1000);
	 }
	 function initialclose(){
	 $(".lab_item:nth-child(17) .hexagon-in2").animate({backgroundColor:'#c2c2c2'},1000);
	 $(".lab_item:nth-child(18) .hexagon-in2").animate({backgroundColor:'#c2c2c2'},1000);
	 $(".lab_item:nth-child(26) .hexagon-in2").animate({backgroundColor:'#c2c2c2'},1000);
	 $(".lab_item:nth-child(27) .hexagon-in2").animate({backgroundColor:'#c2c2c2',opacity:0},1000);
	 $(".lab_item:nth-child(28) .hexagon-in2").animate({backgroundColor:'#c2c2c2'},1000);
	 $(".lab_item:nth-child(37) .hexagon-in2").animate({backgroundColor:'#c2c2c2'},1000);
	 $(".lab_item:nth-child(38) .hexagon-in2").animate({backgroundColor:'#c2c2c2'},1000);
	 }
	function design(){
		 $(".lab_item:nth-child(14) .hexagon-in2").animate({backgroundColor:'#ce2d32'},1000,function (){$(".lab_item:nth-child(14) .hexagon-in2").html("<span>  Design 1 </span>")});
	 	 $(".lab_item:nth-child(23) .hexagon-in2").animate({backgroundColor:'#ce2d32'},1000,function (){$(".lab_item:nth-child(23) .hexagon-in2").html("<span>  Design 2 </span>")});
	 	 $(".lab_item:nth-child(24) .hexagon-in2").animate({backgroundColor:'#ce2d32'},1000,function (){$(".lab_item:nth-child(24) .hexagon-in2").html("<span>  Design 3 </span>")});
		 
		}
	function unleash(){
		 $(".lab_item:nth-child(13) .hexagon-in2").animate({backgroundColor:'#00bff5'},1000,function (){$(".lab_item:nth-child(13) .hexagon-in2").html("<span>  Unleash 1 </span>")});
		 $(".lab_item:nth-child(14) .hexagon-in2").animate({backgroundColor:'#00bff5'},1000,function (){$(".lab_item:nth-child(14) .hexagon-in2").html("<span>  Unleash 2 </span>")});
	 	 $(".lab_item:nth-child(22) .hexagon-in2").animate({backgroundColor:'#00bff5'},1000,function (){$(".lab_item:nth-child(22) .hexagon-in2").html("<span> Unleash 3 </span>")});
		 $(".lab_item:nth-child(23) .hexagon-in2").animate({backgroundColor:'#00bff5'},1000,function (){$(".lab_item:nth-child(23) .hexagon-in2").html("<span>  Unleash 4 </span>")});
	 	 $(".lab_item:nth-child(24) .hexagon-in2").animate({backgroundColor:'#00bff5'},1000,function (){$(".lab_item:nth-child(24) .hexagon-in2").html("<span>  Unleash 5 </span>")});
		 
		}
	$(".lab_item:nth-child(26) .hexagon-in2").click(function(e) {design(); var stage=2;var event="design"});
	$(".lab_item:nth-child(17) .hexagon-in2").click(function(e) {unleash();var stage=2;var event="unleash"});
	$(".lab_item:nth-child(14) .hexagon-in2").click(function(e) {
		var color=$(".lab_item:nth-child(14) .hexagon-in2").css("background-color");
		$(".lab_item:nth-child(25) .hexagon-in2").animate({backgroundColor:color},1000);
     if(event=="design"){}   
    });
	// var s=$('.lab_item:nth-child(17) .hexagon-in2').css("background-color");
	//alert(s);
	//$("#lab article").animate({left:'0%'},5000);
});