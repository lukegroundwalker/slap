<!DOCTYPE HTML>
<html>
<head>
	<title>SlapDown</title>
    <link rel="stylesheet" type="text/css" href="stylesheet.css">
</head>
<body>
	<div class="intro">
		<h1>The Slap Bet Countdown</h1>
		<p>Ramu, the clock is ticking... Only</p>
	</div>
	<div class ="countdown">
		<div>
			<p id="days"></p>
			<p class="time">DAYS</p>
		</div>
		<div>
			<p id="hours"></p>
			<p class="time">HOURS</p>
		</div>
		<div>
			<p id="minutes"></p>
			<p class="time">MINUTES</p>
		</div>
		<div>
		<p id="seconds"></p>
		<p class="time">SECONDS</p>
		</div>
	</div>
	<div class="intro">
		<p>Remaining</p>
	</div>
	<div>
		<p>Made with <i class="icon ion-heart"></i> by Luke</p>
	</div>
	<audio src="Tick.mp3" id="tick"></audio>
	<audio src="Bugs.mp3" id="end"></audio>
    <script src='https://code.responsivevoice.org/responsivevoice.js'></script>
    <script type="text/javascript" src="script.js"></script>
</body>
</html>
<?php 
add_action( 'wp_enqueue_scripts', 'sp_enqueue_ionicons' );
function sp_enqueue_ionicons() {
	wp_enqueue_style( 'ionicons', '//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css', array(), CHILD_THEME_VERSION );
} ?>