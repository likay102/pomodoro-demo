const spanElement = document.querySelectorAll("span");

function timeDown() {
	spanElement[4].innerHTML -= 1;

	if (spanElement[4].innerHTML == -1) {
		spanElement[3].innerHTML -= 1;
		spanElement[4].innerHTML = 9;
		if (spanElement[3].innerHTML == -1) {
			spanElement[1].innerHTML -= 1;
			spanElement[3].innerHTML = 5;
			spanElement[4].innerHTML = 9;
			if (spanElement[1].innerHTML == -1) {
				spanElement[0].innerHTML -= 1;
				spanElement[1].innerHTML = 9;
				spanElement[3].innerHTML = 5;
				spanElement[4].innerHTML = 9;
				if (spanElement[0].innerHTML == -1) {
					clearInterval(interval);
					spanElement[0].innerHTML = 0;
					spanElement[1].innerHTML = 0;
					spanElement[3].innerHTML = 0;
					spanElement[4].innerHTML = 0;
					var audio1 = new Audio("./assets/sounds/sound-clock.mp3");
					audio1.play();
				}
			}
		}
	}
}

const app = document.querySelector(".app");
let interval;
let audio2 = new Audio("./assets/sounds/piano.mp3");
audio2.volume = 0.2;
app.onclick = function () {
	audio2.currentTime = 0
	audio2.play();
	clearInterval(interval);
	interval = setInterval(timeDown, 1000);
	if (this.classList.contains("work")) {
		this.classList.add("break");
		this.classList.remove("work");
		spanElement[0].innerHTML = 2;
		spanElement[1].innerHTML = 5;
	} else {
		this.classList.add("work");
		this.classList.remove("break");
		spanElement[0].innerHTML = 0;
		spanElement[1].innerHTML = 5;
	}
	spanElement[3].innerHTML = 0;
	spanElement[4].innerHTML = 0;
};
