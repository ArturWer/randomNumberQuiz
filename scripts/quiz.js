//getting random number from 1 to 100
let randomNumber = Math.floor(Math.random()*100)+1;
console.log(randomNumber);
let attempt = 0, maxAttempt = 10;
let guessMsg = document.querySelector('.guessMsg');
let listUserNumbers = document.querySelector('.listUserNumbers');

//add eventListener for button GetAnswer
let getAnswer = document.getElementById('getAnswer');
getAnswer.addEventListener('click', checkUserInput);

function checkUserInput (){
	let userInput = document.getElementById('userInput');
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

function getUserNumber(){
	if(checkUserInput(userValue)){
		attempt++;
	} else return false;
	if (attempt===1) {
		guessMsg.textContent = 'Previous guesses:';
	};
	let oldValue = listUserNumbers.textContent;
	listUserNumbers.textContent = `${oldValue}, ${userValue}, `;
};