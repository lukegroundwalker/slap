// Set the date we're counting down to
	// var countDownDate = new Date("Nov 25, 2017 17:00:00").getTime();
	var countDownDate = new Date("Nov 17, 2017 19:07:00").getTime();
	// Update the count down every 1 second
	var x = setInterval(function() {

	    // Get todays date and time
	    var now = new Date().getTime();
	    var tick = document.getElementById('tick');
	    // Find the distance between now an the count down date
	    var distance = countDownDate - now;
	    
	    // Time calculations for days, hours, minutes and seconds
	    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	    
	    // Output the result in an element with id="demo"
	    document.getElementById("days").innerHTML = days;
	    document.getElementById("hours").innerHTML = hours;
	    document.getElementById("minutes").innerHTML = minutes;
	    document.getElementById("seconds").innerHTML = seconds;
	    // If the count down is over, write some text
	    if (distance < 1000) {
	    	var intro = document.getElementsByClassName('intro');
	        for(var i = 0; i < intro.length; i++)
	            intro[i].innerHTML = '_________________';
	        document.getElementById('end').play();
	        clearInterval(x);
		    document.getElementById("days").innerHTML = "O";
		    document.getElementById("hours").innerHTML = "U";
		    document.getElementById("minutes").innerHTML = "C";
		    document.getElementById("seconds").innerHTML = "H";
		    var time = document.getElementsByClassName('time');
	        for(var i = 0; i < time.length; i++)
	            time[i].style.display = 'none';
	        document.getElementsByClassName("countdown").style.marginTop ="50%";
	    }
	    else if(distance < 13000 && distance > 12000){
	        responsiveVoice.speak("The slap will occur in", "UK English Male",{pitch: 0.1});
	    }
	    else if (distance < 11000 && distance > 1000){
	        responsiveVoice.speak(""+seconds+"", "UK English Male",{pitch: 0.1});
	    }
	    else{
	    	tick.play();
	    	//tick.pause();
	    }
	}, 1000);