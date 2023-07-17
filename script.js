function generateRandom() {
    var x = Math.floor(Math.random() * 101);
    return x;
}
function compareGuesses() {
    var x = generateRandom();
    var guess1 = parseInt(document.getElementById('first-number').value);
    var guess2 = parseInt(document.getElementById('second-number').value);
    if (guess1 === x && guess2 === x) {
        console.log('congratulations, you BOTH got it right!');
    }
    else if (guess1 === x) {
        console.log("Player1, you got it right, number was ".concat(x));
    }
    else if (guess1 === x) {
        console.log("Player2, you got it right, number was ".concat(x));
    }
    else if (Math.abs(x - guess1) === Math.abs(x - guess2)) {
        console.log("you are both equally close! number is ".concat(x));
    }
    else if (Math.abs(x - guess1) < Math.abs(x - guess2)) {
        console.log("Player1 wins, number was ".concat(x));
    }
    else if (Math.abs(x - guess2) < Math.abs(x - guess1)) {
        console.log("Player2 wins, number was ".concat(x));
    }
}
var form = document.getElementById('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    compareGuesses();
});
