//getting random number from 1 to 100
let randomNumber = Math.floor(Math.random()*100)+1;
console.log(randomNumber);
let attempt = 0, maxAttempt = 10;
let userInput = document.getElementById('userInput');
let validation = document.querySelector('.validation');
let guessMsg = document.querySelector('.guessMsg');
let listUserNumbers = document.querySelector('.listUserNumbers');
let guessButton = document.getElementById('guessButton');

//add eventListener for guessButton
guessButton.addEventListener('click', checkUserInput);

function checkUserInput (e){
	e.preventDefault();
	let userInputValue = userInput.value;
	userInputValue = Number(userInputValue);
	console.log(typeof(userInputValue));
	if (isNaN(userInputValue)) {
		console.log("it's NaN");
	}
	
	console.log(`Value is: ${userInput.value}`);
	/*if (isNaN(userValue))
		console.log('Not a Number');

	return userValue !== userValue;//if isNaN that return false, NaN != NaN
	*/
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

/*function getUserNumber(){
	if(checkUserInput(userValue)){
		attempt++;
	} else return false;
	if (attempt===1) {
		guessMsg.textContent = 'Previous guesses:';
	};
	let oldValue = listUserNumbers.textContent;
	listUserNumbers.textContent = `${oldValue}, ${userValue}, `;
};*/