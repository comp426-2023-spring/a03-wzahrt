// This is the main file where exported functions live
export {rps}
export {rpsls}


function rps(shot) {
	let result = '';
	let computer = Math.floor(Math.random()*3);
	if(computer == 0) { computer = "rock"}
	else if(computer == 1) { computer = "paper"}
	else { computer = "scissors"}

	if (shot === undefined) {return {player: opponent};}


}

function rpsls(shot) {

}
