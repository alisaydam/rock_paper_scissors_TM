const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboad = {
    player : 0,
    computer :0
}

//Play Game
function play(e) {
    restart.style.display = 'inline-block'
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);

    console.log(playerChoice, computerChoice, winner);
}

//Get Computer Choice
function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34){
        return 'rock';
    }else if(rand <= .67){
        return 'paper';
    }else{
        return 'scissors';
    }
}

//Get Game Winner
function getWinner(p, c) {
    if(p === c) {
        return 'draw';
    }else if(p === 'rock'){
        if(c=== 'paper'){
            return 'computer';
        }else{
            return 'player'
        }
    }else if(p === 'paper'){
        if(c === 'scissors'){
            return 'computer';
        }else{
            return 'player';
        }
    }else if (p === 'scissors'){
        if(c ==='rock'){
            return 'computer';
        }else {
            return 'player';
        }
    }
}

function showWinner(winner, computerChoice){
    if(winner === 'player'){
        scoreboad.player++;
        //Show modal result
        result.innerHTML =  `
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer choose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p> 
        `;
    }else if(winner === 'computer'){
        scoreboad.computer++;
        //Show modal result
        result.innerHTML =  `
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Choose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p> 
        `;
    }else{
        result.innerHTML =  `
        <h1>It is a draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Choose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p> 
        `;
    }
    //Show Score
    score.innerHTML = `
    <p>Player: ${scoreboad.player}</p>
    <p>Computer: ${scoreboad.computer}</p>
    `;

    modal.style.display = 'block';
}

//Restart Game
function restartGame(){
    scoreboad.player = 0;
    scoreboad.computer = 0;
    score.innerHTML = `
    <p>Player : 0 </p>
    <p>Computer: 0 </p>
    `;
}


//Clear Modal Function

function clearModal(e) {
    if(e.target == modal){
        modal.style.display = "none"
    }
}


//Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);

