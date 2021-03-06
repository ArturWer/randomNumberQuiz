//getting random number from 1 to 100
let randomNumber = Math.floor(Math.random()*100)+1;
console.log(randomNumber);
let attempt = 0, maxAttempt = 10;
let userInput = document.getElementById('userInput');
let validation = document.querySelector('.validation');
let guessMsg = document.querySelector('.guessMsg');
let listUserNumbers = document.querySelector('.listUserNumbers');
let guessButton = document.getElementById('guessButton');

function checkUserInput (e){
	e.preventDefault();
	let userInputValue = userInput.value;
	if (isNaN(userInputValue)) {
		alert("Your data it isn't a number. (It's NaN)");
	};	
	userInputValue = Number(userInputValue);
	showNumber(userInputValue);
};
//check and write user's numbers and add attempt
function showNumber(userInputValue){
	attempt++;
	if (attempt===1) {
		guessMsg.textContent = 'Previous guesses:';
	};	
	let newList = listUserNumbers.textContent;
	if (newList.length>0) {
		newList += ", ";
	};
	listUserNumbers.textContent = `${newList + userInputValue}`;
	checkUserInputNumber(userInputValue);
};
//check user input number
function checkUserInputNumber(userNumber){
	let msg = null;
	if (userNumber > randomNumber) {
		msg = "bigger";
	} else if (userNumber < randomNumber) {
		msg = "smaller";		
	};
	if (msg) {
		let el = document.querySelector('.msgBiggerOrSmaller');
		el.textContent = `Your number is ${msg}`;
	};
	if (userNumber === randomNumber) {
		console.log("You win");
		gameOver(true);
	} else if (attempt>=maxAttempt) {
		gameOver(false);
	};
};
//game over messege
function gameOver(win){
	let msg = win ? "YOU WIN" : "GAME OVER";
	if (msg) {
		//add new messege
		let gameOverElement = document.createElement('h2');
		let newText = document.createTextNode(msg);
		gameOverElement.appendChild(newText);
		let el = document.querySelector('p');
		el.appendChild(gameOverElement);
		//add newGame button
		let newGameButton = document.createElement('button');
		let textForButton = document.createTextNode('Start new game');
		newGameButton.appendChild(textForButton);
		newGameButton.className = 'newGameButton';
		newGameButton.focus = true;
		let form = document.querySelector('form');
		form.appendChild(newGameButton);
		//disable user input
		userInput.disabled = true;
		//remove guessButton
		let containerEl = guessButton.parentNode;
		containerEl.removeChild(guessButton);
		newGameButton.addEventListener('click', startNewGame, false);
		document.addEventListener('keypress', startNewGame, false);
		//added class .won
		if (win) {
			document.querySelector('main').className = 'won';
			document.querySelector('header').className = 'won';
			setHighScore(attempt);
		};
	};
};
function startNewGame(e){
	e.preventDefault();
	location.reload();
};
function checkHighScore(){
	let highScore = localStorage.highScore;
	console.log(`highScore is: ${highScore}`);
	if (highScore) { showHighScore(); }
};
function showHighScore(){
	console.log('Must be highScore');
	if (localStorage.highScore) {
		let elHighScore = document.querySelector('.highScore');
		elHighScore.textContent = `High score: ${localStorage.highScore}`;
	};
};
function setHighScore(highScore){
	if(isNaN(localStorage.highScore)){
		localStorage.setItem ('highScore', highScore);
		return;
	};
	if (highScore<localStorage.highScore) {
		localStorage.setItem ('highScore', highScore);
	};
};
//when user input first symbol allow guessButton
userInput.addEventListener('input', function(){
	console.log('User inputted something');
	let value = userInput.value;
	if ( (value === "") || ( (value<1)||(value>100) ) ) {
		guessButton.disabled = true;
		return true;
	};
	guessButton.disabled = false;
});
//add eventListener for guessButton
guessButton.addEventListener('click', checkUserInput);
checkHighScore();