let teamScoreOne = 0;
let teamScoreTwo = 0;
let isGameStopped = false;

function handleTeamOneClick() {
    teamScoreOne = teamScoreOne + 1;
}

function handleTeamTwoClick() {
    teamScoreTwo = teamScoreTwo + 1;
}

function handleStopGame () {
    isGameStopped = true;
}