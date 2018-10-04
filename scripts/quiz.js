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
//check and write user's numbers
function showNumber(userInputValue){
	attempt++;
	if (attempt===1) {
		guessMsg.textContent = 'Previous guesses:';
	};	
	let newList = listUserNumbers.textContent;
	if (newList.length>0) {
		newList += ", ";
	}
	listUserNumbers.textContent = `${newList + userInputValue}`;
};