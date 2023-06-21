let userScore = 0;
let computerScore = 0 ;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");


function getComputerChoice () {

    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

function convertToWord(letter) {
    if (letter === 'r') return "Pedra";
    if (letter === 's') return "Tesoura";
    if (letter === 'p') return "Papel"; 
}

function win (userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} ganha ${convertToWord(computerChoice)}${smallCompWord} Você venceu `;
}

function lose (userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} perde ${convertToWord(computerChoice)}${smallCompWord} Perdeu `;
}

function draw (userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} igual ${convertToWord(computerChoice)}${smallCompWord} Empatou `;
}


function game (userChoice){
    const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
        win(userChoice, computerChoice);         
        console.log("GANHOU.");
        break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice, computerChoice);
        console.log("PERDEU");
    break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, computerChoice);
        console.log("EMPATE");
   }
}


function main () {
    rock_div.addEventListener('click', function() {
        game("r");
    });

    paper_div.addEventListener('click', function() {
        game("p");
    });

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main ();

