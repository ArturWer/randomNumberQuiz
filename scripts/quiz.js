//getting random number from 1 to 100
let randomNumber = Math.floor(Math.random()*100)+1;
console.log(randomNumber);
let attempt = 0, maxAttempt = 10;
let guessMsg = document.querySelector('.guessMsg');

//add eventListener for button GetAnswer
let getAnswerButton = document.getElementById('getAnswerButton');
getAnswerButton.addEventListener('click', 
	function (event) {
		getUserNumber();
}, false);

function getUserNumber(){
	attempt++;
	let value = document.getElementById('userNumber').value;
	value = Number(value);
	if (attempt===1) {
		guessMsg.textContent = 'Previous guesses:';
	}
	console.log(value);
};