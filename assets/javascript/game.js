document.addEventListener("DOMContentLoaded",function(){

var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.querySelector("#guessLeft");
var playerguess = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var guessVal = document.getElementById("guess_val");
//input where letter is typed
var guessLetter = document.getElementById("guess_letter");


	//move letter from imput to <p> tag
	document.onkeyup = function letterPick(event){
		console.log(guessVal);
		var guessLetter = String.fromCharCode(event.keyCode).toUpperCase();
		//document.createElement(getElementById("guess_val"));
		guessVal.innerHTML = guessLetter;
		//guessLetter.str.substring(0,9);
		console.log(guessVal);

	}

//generate cpuGuess
function cpuGuess (){
	var random = "ABCDEFGHIJKLMNOPQURSTUVWXYZ".split('');
	return str.substring(Math.floor(Math.random() * 26), 1);
}

function guessStr(guessVal, guessLetter){
	for(var i = 0; i < 9; i++){
		if(i === guessVal && i === guessLetter){
			guessVal.innerHTML.str.substr(0, 9);
			guessLetter.innerHTML.str.substr(0, 9);
			 if(wins ===){
			 	//not guessed keep going - 8 more turns
			 } else if {
			 	//
			 }
		}
	}
}

//input wins

//input losses

//guesses left

//for loop for game 9 total

	for(var i= 0; i < 9; i++){
		guessLetter = i;

	}



// guess correct/wrong loop
if(guessLetter  ){

}else{

}

})