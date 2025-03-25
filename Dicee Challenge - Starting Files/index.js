function playGame() {

    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    var source1 = "./images/dice" + dice1 + ".png";
    var source2 = "./images/dice" + dice2 + ".png";

    document.getElementsByClassName("img1")[0].src = source1;
    document.getElementsByClassName("img2")[0].src = source2;

    if (dice1 > dice2) {
        document.querySelectorAll("h1")[0].innerHTML = "🚩 Player 1 Wins!";
    }
    if (dice1 < dice2) {
        document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins! 🚩";
    } 
    if (dice1 === dice2) {
        document.querySelectorAll("h1")[0].innerHTML = "It's a draw";
    }

}

playGame();