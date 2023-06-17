function randomWinner(max) {
    return Math.floor(Math.random() * max);
}

function displayMessage(clickedBttn, bttnsNo) {
    let winnerBttn = "button" + randomWinner(bttnsNo);
    if (clickedBttn === winnerBttn) {
        alert("Winner Button!🎉");
    } else {
        alert("Try again!😁");
    }
}

function generateButtons(nBttns) {
    for (let i = 1; i <= nBttns; ++i) {
        const bttn = document.createElement('button');
        bttn.id = 'button' + i;
        let size = 'lg';
        bttn.className = 'btn btn-primary' +(size ? ' btn-' + size : '');
        let bttns = document.getElementById('bttns');
        bttns.appendChild(bttn);
    }
}

bttns.addEventListener("click", function(event) {
    const clickedBttn = event.target.id;
    const bttnsNo = bttns.querySelectorAll('*').length;
    displayMessage(clickedBttn, bttnsNo);
});

generate.addEventListener("click", function() {
    const nBttns = buttonsNo.value;
    generateButtons(nBttns);
});