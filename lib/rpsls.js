// This is the main file where exported functions live
export {rps}
export {rpsls}


function rps(shot) {
	let result = '';
	let options = ['rock', 'paper', 'scissors'];

	let computer = Math.floor(Math.random()*3);
	if(computer == 0) { computer = "rock"}
	else if(computer == 1) { computer = "paper"}
	else { computer = "scissors"}

	if (shot === undefined) {return {player: opponent};}

	let user = shot.toLowerCase();

	if (!moves.includes(user)) {
        	console.error(`${shot} is out of range.`);
        	throw new RangeError();
    	}

	if (computer === user) {
		result = "tie";
	} else if (computer === "rock" && user === "scissors" || computer === "paper" && user === "rock" || computer === "scissors" && user === "paper") {
		result = "lose";
	} else {
		result = "win";
	}

	return { player: user,
		opponent: computer,
		result: result
	};
}

function rpsls(shot) {

}
