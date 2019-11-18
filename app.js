console.log("HELLO GUINEA PIG");

//elements
let playerScore_div = document.getElementById("playerScore");
let computerScore_div = document.getElementById("computerScore");
let winText_div = document.getElementById("winText");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");

//variables
let playerScore = 0;
let computerScore = 0;

//function return computer hand
function randHand () {
	var x = Math.floor(Math.random()*3+1)
	var y = 'randhand';
	if (x == 1) y = 'rock';
	else if (x == 2) y = 'paper';
	else if (x == 3) y = 'scissors';
	return y;
}

//main function for check win, lose or draw
function check (hand) {
	var compHand = randHand();
	var element = document.getElementById(hand);
	if (compHand == hand) {
		winText_div.innerHTML = "DRAW";
		element.classList.add("gray-glow");
		setTimeout(function(){element.classList.remove("gray-glow");}, 500);
	}
	else if ((compHand == 'rock' && hand == 'paper'|| (compHand == 'paper' && hand == 'scissors') || (compHand == 'scissors' && hand == 'rock')) ) {
		winText_div.innerHTML = `${hand.toUpperCase()} BEATS ${compHand.toUpperCase()}. YOU WIN`;
		playerScore++;
		element.classList.add("green-glow");
		setTimeout(function(){element.classList.remove("green-glow");}, 500);
	}
	else {
		winText_div.innerHTML = `${compHand.toUpperCase()} BEATS ${hand.toUpperCase()}. YOU LOSE`;
		computerScore++;
		element.classList.add("red-glow");
		setTimeout(function(){element.classList.remove("red-glow");}, 500);
	}
	playerScore_div.innerHTML = playerScore;
	computerScore_div.innerHTML = computerScore;
}
