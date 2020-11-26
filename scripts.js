//Author: Angela Valenzuela

//toggle button start
document.getElementById('sButton').addEventListener('click', function(){
	document.getElementsByTagName("body")[0].classList.toggle('darkMode');
	document.getElementById("retsukoImg").classList.toggle("hidden");
	document.getElementById("darkRetsukoImg").classList.toggle("hidden");
	let links = document.getElementsByTagName("a");
	for(let i = 0; i < links.length; i++){
	 	links[i].classList.toggle('darkMode');
	 }

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
	var winner = "Looks like your got luck on your side, you win... this time.";
	var loser = "Sorry part-timer, you have to pay your dues and put in some overtime. Try again next time.";
	while(userGuess < 1 || userGuess > 10){
		userGuess = prompt("Please enter a number that is between 1 and 10")
	} 

	if(userGuess == randomNum){
		document.getElementById("printGuess").innerHTML = "" + userGuess;
		document.getElementById("printResult").innerHTML = "" + randomNum + ". " + winner;
	} else {
		document.getElementById("printGuess").innerHTML = "" + userGuess;
		document.getElementById("printResult").innerHTML = "" + randomNum + ". " + loser;
	}

}


//validate form function
function validateForm(event){
	//prevent form submission while validating
	event.preventDefault();


	//form
	let form = document.getElementById("newMsg");

	//regular expressions
	let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})$/;
	let phoneRegex = /\d{10,}/;

	//input values
	let fName = document.getElementById("fullName").value;
	let email = document.getElementById("email").value;
	let emailMe = document.getElementById("email").checked;
	let phone = document.getElementById("phone").value;
	let callMe = document.getElementById("phone").checked;
	let comments = document.getElementById("comments").value;

	//reset border styles on inputs
	document.getElementById("fullName").style.border = "1px solid #222";
  	document.getElementById("email").style.border = "1px solid #222";
  	document.getElementById("phone").style.border = "1px solid #222";

	//clear out previous error messages
	document.getElementById("fullName").nextSibling.innerHTML = "";
	document.getElementById("email").nextSibling.innerHTML = "";
	document.getElementById("phone").nextSibling.innerHTML = "";
	document.querySelector("fieldset").nextSibling.innerHTML = "";
	document.getElementById("comments").nextSibling.innerHTML = "";

	//variable to track if form is valid or not
	let isValid = true;

	if(fName === ""){
		isValid = false;
		document.getElementById("fullName").style.border = "2px solid red";
		document.getElementById("fullName").nextSibling.innerHTML = "Please enter a valid name";
	}

	//check if email address matches regex pattern
	if(email === "" || !(emailRegex.test(email))){
		isValid = false;
		document.getElementById("email").style.border = "2px solid red";
		document.getElementById("email").nextSibling.innerHTML = "Please enter a valid email address";
	}

	//check if phone number is only 10 numbers
	if(phone === "" || !(phoneRegex.test(phone)) || !(parseInt(phone)) || phone.length !== 10){
		isValid = false;
		document.getElementById("phone").style.border = "2px solid red";
		document.getElementById("phone").nextSibling.innerHTML = "Please enter a valid 10 digit phone number";
	}

	//if phone radio is checked then phone field must not be empty
	if(callMe){
		document.getElementById("phone").innerHTML != ""; 
	}

	//if email radio is checked then email field must not be empty
	if(emailMe){
		document.getElementById("email").innerHTML != "";
	}

	//if the form is valid, submit
	if(isValid){

		//display alert instead of submitting
		alert("Your message has been sent!");

		//reset background colors and values
		fName = document.getElementById("fullName").style.backgroundColor = "white";
		fName = document.getElementById("fullName").value = "";
		email = document.getElementById("email").style.backgroundColor = "white";
	    email = document.getElementById("email").value = "";
	    emailMe = document.getElementById("email").checked = true;
	    phone = document.getElementById("phone").style.backgroundColor = "white";
	    phone = document.getElementById("phone").value = "";
	    callMe = document.getElementById("phone").checked = false;

	    //clear error messages
	    document.getElementById("fullName").nextSibling.innerHTML = "";
	    document.getElementById("email").nextSibling.innerHTML = "";
	    document.getElementById("phone").nextSibling.innerHTML = "";
	    document.querySelector("fieldset").nextSibling.innerHTML = "";
	}
}
//event listener
document.getElementById("newMsg").addEventListener("submit", validateForm);