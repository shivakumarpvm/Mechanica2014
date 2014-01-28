<html>
<head>
 <link href="css/flat-ui.css" rel="stylesheet">
<style>
#landing{
	background:url(images/landing.jpg);
	background-size:cover;
	width:100%;
	height:100%;
	background-repeat:no-repeat;
	}
#main{
	background:url(images/main.jpg);
	background-size:cover;
	width:100%;
	height:100%;
	background-repeat:no-repeat;
	z-index:-1;
	}
#events{
	background:url(images/events.jpg);
	background-size:cover;
	width:100%;
	height:100%;
	background-repeat:no-repeat;
	z-index:10;
	}
#spons{
	background:url(images/shankar.jpg);
	background-size:cover;
	width:100%;
	height:100%;
	background-repeat:no-repeat;
	}
#contact{
	background:url(images/timer.jpg);
	background-size:cover;
	width:100%;
	height:100%;
	background-repeat:no-repeat;
	}
#check{color:orange;position:fixed;top:50px;}
#main_black{
	width:60%;
	height:100%;
	background-color:#000;
	color:#FFF;
	margin:0 auto;
	}
#main_iitm{
	background:url(images/mea.png);
	background-size:cover 100% 100%;
	position:fixed;
	width:130px;
	height:130px;
}
#main_mea{
	background:url(images/mea.png);
	background-size:cover 100% 100%;
	position:fixed;
	width:130px;
	height:130px;
}
#main_mechanica{
	background:url(images/mea.png);
	background-size:cover 100% 100%;
	position:fixed;
	width:130px;
	height:130px;
	left:40%;top:60%;
}
#main_other{
	position:fixed;
	left:50%;top:40%;
	color:#FFF;
}
#events_days{color:#FFF;font-family:Verdana; font-size:24px;left:30%;z-index:11}
#events_events{color:#FFF;font-family:Verdana; font-size:24px;left:30%;z-index:11}
#events_money{color:#FFF;font-family:Verdana; font-size:24px;left:30%;z-index:11}
</style>
</head>
<body>
<section id="pele">
<div id="main_black" data-0="opacity:0" data-1200="opacity:1" data-2400="0"></div>
<div id="main_iitm" data-0="left:-20%;top:10%;" data-1200="left:30%;top:10%;" data-2400="left:30%;top:10%;" data-3600="left:-20%;top:10%;"></div>
<div id="main_mea" data-0="left:120%;top:10%;" data-1200="left:60%;top:10%;" data-2400="left:60%;top:10%;" data-3600="left:120%;top:10%;"></div>
<div id="main_mechanica" data-0="opacity:0;zoom:0" data-1200="opacity:0;zoom:0" data-1800="opacity:1;zoom:1"  data-2400="opacity:1;zoom:1" data-3600="opacity:0;zoom:0"></div>
<div id="main_other">presents</div>

<div id="events_days" style="position:fixed;" data-0="top:100%;" data-3600="top:100%;" data-4000="top:20%;" data-4200="top:-100%;">5 - days</div>
<div id="events_events" style="position:fixed;" data-0="top:100%;" data-4000="top:100%;" data-4400="top:20%;" data-4800="top:-100%;">20+ Events</div>
<div id="events_money" style="position:fixed;" data-0="top:100%;" data-4400="top:100%;" data-4800="top:20%;" data-5200="top:-100%;">1.5L prize money</div>
</section>
<section id="landing" style="position:fixed;" data-0="top:0%;" data-1200="top:-100%;" ></section>
<section id="main" style="position:fixed;" data-0="top:100%;" data-1200="top:0%;" data-2400="top:0%;" data-3600="top:-100%;" data-4800="top:-100%;">
<div id="main_background"></div>

</section>
<section id="events" style="position:fixed;" data-0="top:100%;" data-2400="top:100%;" data-3600="top:0%;" data-4800="top:0%;" data-6000="top:-100%;"></section>
<section id="spons" style="position:fixed;" data-0="top:100%;" data-4800="top:100%;" data-6000="top:0%;" data-7200="top:-100%;"></section>
<section id="contact" style="position:fixed;" data-0="top:100%;" data-6000="top:100%;" data-7200="top:0%;"></section>

<div id="check"></div>

</body>
<script src="js/jquery.min.js"></script>
<script src="js/script.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/skrollr.js"></script>
<script src="js/skrollr.menu.js"></script>
 <script type="text/javascript">
 

	var s = skrollr.init({
	smoothScrolling: true
});
skrollr.menu.init(s, {
    animate: true,
    easing: 'sqrt',
    duration: function (currentTop, targetTop) {
        return 1200 
    },
});
	</script>
</html>