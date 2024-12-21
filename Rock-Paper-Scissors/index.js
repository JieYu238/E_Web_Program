const choices = ["rock", "paper", "scissors"];
const playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resultDisplay = document.getElementById("resultDisplay");
let playerScore = 0;
let computerScore = 0;
function playGame(playerChoice){
    playerChoiceDisplay.style.display = "block";
    computerChoiceDisplay.style.display = "block";

    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";
    if(playerChoice ===  computerChoice){
        result = "IT'S A TIE!";
    }else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors")? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock")? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper")? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    playerChoiceDisplay.textContent = `Player choice: ${playerChoice}`;
    computerChoiceDisplay.textContent = `Computer choice: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText", "redText");
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}
