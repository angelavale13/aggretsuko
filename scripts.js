//Author: Angela Valenzuela

//toggle button start
document.getElementById('sButton').addEventListener('click', function(){
	document.getElementById('toggleMe').classList.toggle('metal');
});







//Display by default on page load and only one product should ever display on the screen at a time

//get three different products and store in variables
let product1 = document.getElementById("product1");
let product2 = document.getElementById("product2");
let product3 = document.getElementById("product3");
//window.alert("alert");
function toggleProduct1(){
	
	product1.classList.remove('hidden');
	product2.classList.add('hidden');
	product3.classList.add('hidden');
}
document.getElementById('product1-name').addEventListener('click', toggleProduct1);

function toggleProduct2(){
	
	product1.classList.add('hidden');
	product2.classList.remove('hidden');
	product3.classList.add('hidden');
}
document.getElementById('product2-name').addEventListener('click', toggleProduct2);

function toggleProduct3(){
	
	product1.classList.add('hidden');
	product2.classList.add('hidden');
	product3.classList.remove('hidden');
}
document.getElementById('product3-name').addEventListener('click', toggleProduct3);






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
