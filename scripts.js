//Author: Angela Valenzuela

//toggle button start
document.getElementById('toggleMe').addEventListener('click', function(){
	this.classList.toggle('metal');
});







//Display by default on page load and only one product should ever display on the screen at a time
document.getElementById('viewDetails').addEventListener('click', function(){
	this.classList.toggle('hide');
});









//Generate random number that you display to screen (with what the user guessed) and either declare them a winner or try again
//Possible Responses


function guessGame(){
	var userGuess = prompt("Guess a number between 1 and 10");
	var randomNum = Math.floor(Math.random() * Math.floor(userGuess) + 1);
	//console.log("entered:" + userGuess + "actual:" + randomNum);
	var winner = "You won!";
	var loser = "Try again Later";
	while(userGuess < 1 || userGuess > 10){
		userGuess = prompt("Please enter a number that is between 1 and 10")
	} 

	if(userGuess == randomNum){
		document.getElementById("printGuess").innerHTML = "You guessed: " + userGuess;
		document.getElementById("printResult").innerHTML = "The answer was " + randomNum + ". " + winner;
	} else {
		document.getElementById("printGuess").innerHTML = "You guessed: " + userGuess;
		document.getElementById("printResult").innerHTML = "The answer was " + randomNum + ". " + loser;
	}

}
