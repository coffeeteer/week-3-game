document.addEventListener("DOMContentLoaded",function(){

var winSpan = document.getElementById("wins");
var winNum =  0;

var loseSpan = document.getElementById("losses");
var loseNum = 0;

var guessesLeft = document.querySelector("#guessLeft");
var playerguess = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var guessVal = document.getElementById("guess_val");
var letterArray= [];
var random = "ABCDEFGHIJKLMNOPQURSTUVWXYZ".split('');
//input where letter is typed
// var guessLetter = document.getElementById("guess_letter");


	//move letter from imput to <p> tag
	document.onkeyup = function letterPick(event){
		console.log(guessVal);
		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
		//document.createElement(getElementById("guess_val")
		letterArray.push(userGuess);
		guessVal.innerHTML = letterArray;
		guessLetter = "";
		// guessLetter.str.substring(0,9);
		console.log(userGuess);
		var computerGuess = cpuGuess();
		console.log(computerGuess);
		console.log(winNum);
		
		if(userGuess === computerGuess){
			winNum ++;
			winSpan.innerHTML = winNum;
		}else{
			loseNum ++;
			loseSpan.innerHTML = loseNum;
			console.log('You guessed wrong');
		}
	}

//generate cpuGuess
function cpuGuess (){
	var randomIndex = Math.floor(Math.random()* random.length);
	 return random[randomIndex];	
}

function guessStr(guessVal, guessLetter){
	for(var i = 0; i < 9; i++){
		if(i === guessVal && i === guessLetter){
			guessVal.innerHTML.str.substr(0, 9);
			guessLetter.innerHTML.str.substr(0, 9);
			 
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