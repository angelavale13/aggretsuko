//Author: Angela Valenzuela

//toggle button start
document.getElementById('toggleMe').addEventListener('click', function(){
	this.classList.toggle('metal');
});


//Display by default on page load and only one product should ever display on the screen at a time
document.getElementById('viewDetails').addEventListener('click', function(){
	this.classList.toggle('hide');
});