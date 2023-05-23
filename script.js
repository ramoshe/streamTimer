function Timer(endDate) {
	function updateTimer() {
	// Get todays date and time
	var now = new Date().getTime();
	// Find the distance between now an the count down date
	var diff = countDownDate.getTime() - now;
	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(diff / (1000 * 60 * 60 * 24));
	var hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
	var minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
	var seconds = Math.floor(diff % (1000 * 60) / 1000);
	// If the count down is over, write some text
	var dayText = days === 1 ? "day" : "days";
	var dateString = days + " " + dayText + " " + leadingZero(hours) +
		":" + leadingZero(minutes) + ":" + leadingZero(seconds);
	if (diff < 0) {
		clearInterval(x);
		document.getElementById("count-down").innerHTML = "THE END!!!";
		return;
	}
	document.getElementById("count-down").innerHTML = dateString;
	}

	var countDownDate = new Date(endDate);

	this.addDays = function(numDays) {
	countDownDate.setTime(
		countDownDate.getTime() + numDays * 24 * 60 * 60 * 1000
	);
	updateTimer();
	};

	updateTimer();
	var x = setInterval(function() {
	updateTimer();
	}, 1000);
}

function leadingZero(n) {
	return n < 10 ? "0" + n : n;
}

// adds numbers of days (0.5 or 7) depending on which button pressed
function addMoreDays() {
	myTimer.addDays(this.getAttribute("data-days"));
}

// Only change the endDate variable below
var endDate = "August 14, 2023 01:56:00"; // original end date
// Only change the endDate variable above

var myTimer = new Timer(endDate);
document.getElementById("12hours").addEventListener("click", addMoreDays);
document.getElementById("7days").addEventListener("click", addMoreDays);