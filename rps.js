let Score = JSON.parse((localStorage.getItem('score'))) || {
    wins: 0,
    losses: 0,
    tie: 0
};






function playGame(playerMove) {
    let result = '';

    const computerMove = pickComputerMove();

    if (playerMove === 'rock') {

        if (computerMove === 'rock') {
            result = 'tie';
        } else if (computerMove === 'scissors') {
            result = 'win';
        } else if (computerMove === 'paper') {
            result = 'lose'
        }



    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'win';
        } else if (computerMove === 'scissors') {
            result = 'lose';
        } else if (computerMove === 'paper') {
            result = 'tie'
        }



    } else {

        if (computerMove === 'rock') {
            result = 'lose';
        } else if (computerMove === 'scissors') {
            result = 'tie';
        } else if (computerMove === 'paper') {
            result = 'win';
        }



    }

    if (result === 'win') {
        Score.wins += 1;
    } else if (result === 'lose') {
        Score.losses += 1;
    } else {
        Score.tie += 1;
    }

    localStorage.setItem('score', JSON.stringify(Score));
    upsdateScoreElement();
    upsdateScoreElement();
    document.querySelector('.js-result').
        innerHTML = result;

    document.querySelector('.js-moves').
        innerHTML = ` You 
<img src="${playerMove}-emoji.png" alt="rock" class="move-icon">
<img src="${computerMove}-emoji.png" alt="" class="move-icon">
Computer` ;











}

function upsdateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `win : ${Score.wins} lose : ${Score.losses} tie : ${Score.tie}`;


}


function pickComputerMove() {
    let computerMove = '';
    const randomNumber = Math.random();

    if (randomNumber > 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber > 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;


}
