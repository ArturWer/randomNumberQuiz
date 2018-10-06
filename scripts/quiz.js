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
	console.log(`Value is: ${userInputValue}`);
	userInputValue = Number(userInputValue);
	showNumber(userInputValue);
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
	let isWin = checkUserInputNumber(userInputValue);
	gameOver(isWin);
};
//game over messege
function gameOver(win){
	let msg = win ? "YOU WIN" : "GAME OVER";
	if (win || (attempt>=4)) {
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
		let form = document.querySelector('form');
		form.appendChild(newGameButton);
		//disable user input
		userInput.disabled = true;
		//remove guessButton
		let containerEl = guessButton.parentNode;
		containerEl.removeChild(guessButton);
		//addEventListener for newGameButton
		newGameButton.addEventListener('click', startNewGame);
	};
};
//start newGame when click on button "Start new quiz"
function startNewGame(e){
	e.preventDefault();
	location.reload();
};
//check user input number
function checkUserInputNumber(userNumber){
	if (randomNumber === userNumber) {
		console.log("You win");
		gameOver(true);
	} else {
		console.log("Don't win");
		return false;
	};
};