const RPS = ["rock", "paper", "scissors"];

let rock = document.getElementById('rock');
rock.addEventListener('click', game);

let paper = document.getElementById('paper');
paper.addEventListener('click', game);

let scissors = document.getElementById('scissors');
scissors.addEventListener('click', game);
	
function computerPlay() {
    const randomRPS = RPS[Math.floor(Math.random() * RPS.length)]
    return randomRPS
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock'  && computerSelection == 'rock') {
        return 'its a Tie!';
    }	else  if (playerSelection == 'rock'  && computerSelection == 'paper') {
        return 'Computer Wins!';
    }		else  if (playerSelection == 'rock'  && computerSelection == 'scissors') {
        return 'Player Wins!';
    }		else  if (playerSelection == 'paper'  && computerSelection == 'rock') {
        return 'Player Wins!';
    }		else  if (playerSelection == 'paper'  && computerSelection == 'paper') {
        return 'its a Tie!';
    }		else  if (playerSelection == 'paper'  && computerSelection == 'scissors') {
        return 'Computer Wins!';
    }		else  if (playerSelection == 'scissors'  && computerSelection == 'rock') {
        return 'Computer Wins!';
    }		else  if (playerSelection == 'scissors'  && computerSelection == 'paper') {
        return 'Player Wins!';
    }		else  if (playerSelection == 'scissors'  && computerSelection == 'scissors') {
        return 'its a Tie!';
    }
}

function game() {
    let pScore = parseInt(document.getElementById('pScore').textContent);
    let cScore = parseInt(document.getElementById('cScore').textContent);

    let text = 'Make your move';
    const playerSelection = this.id;
    const computerSelection = computerPlay();
    let action = playRound(playerSelection, computerSelection);

    if (action == 'Player Wins!' ) {
        pScore++;
        document.getElementById("pScore").textContent = pScore;
        text = 'Player won';
        document.getElementById('display').textContent = text;
    } else if (action == 'Computer Wins!') {
        cScore++;
        document.getElementById('cScore').textContent = cScore;
        text = 'Computer won';
        document.getElementById('display').textContent = text;
    } else {
        text = 'It\'s a tie!';
        document.getElementById('display').textContent = text;
    }


    if (playerSelection === 'rock') {
        document.getElementById('imgPlay').src = './assets/images/rP.png';
    } else if (playerSelection === 'paper') {
        document.getElementById('imgPlay').src = './assets/images/pP.png';
    } else if (playerSelection === 'scissors') {
        document.getElementById('imgPlay').src = './assets/images/sP.png';
    }
    
    if (computerSelection === 'rock') {
        document.getElementById('imgComp').src = './assets/images/rC.png';
    } else if (computerSelection === 'paper') {
        document.getElementById('imgComp').src = './assets/images/pC.png';
    } else if (computerSelection === 'scissors') {
        document.getElementById('imgComp').src = './assets/images/sC.png';
    }

    if (pScore == 5 ) {
        text = 'The player won! Congratulations';
        document.getElementById('display').textContent = text;
    } else if (cScore == 5) {
        text = 'The computer won! You lost';
        document.getElementById('display').textContent = text;
    }

    if (pScore >= 5 || cScore >= 5 ) {
        document.getElementById('cScore').textContent = 0;
        document.getElementById("pScore").textContent = 0;
        document.getElementById('imgPlay').src = './assets/images/rP.png';
        document.getElementById('imgComp').src = './assets/images/rC.png';
    }

}
