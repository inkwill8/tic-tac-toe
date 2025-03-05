const boxes = document.querySelectorAll('.box');

function playRound(e) {
    e.target.style.backgroundColor = 'orange';
    addComputerChoice();
}

for (let box of boxes) {
    box.addEventListener('click', playRound);
}

// COMP CHOICE



function addComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 10);

    // need to take computerChoice value (1-9) and correspond it to a node
    console.log(computerChoice);
    
}

