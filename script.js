const boxes = document.querySelectorAll('.box');

function playRound(e) {
    e.target.style.backgroundColor = 'orange';
    addComputerChoice();
}

for (let box of boxes) {
    box.addEventListener('click', playRound);
}

// COMP CHOICE

let computerChoice = Math.floor(Math.random() * 10);

function addComputerChoice() {
    
}

console.log(computerChoice);