// DOM Elements
const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#timeLeft');
const maxScoreDisplay = document.querySelector('#maxScore');
const startBtn = document.querySelector('#startBtn');
const holes = document.querySelectorAll('.hole');
console.log(holes);
const moles = document.querySelectorAll('.mole');

// Required variable 
var score = 0;
var time = 30;
var bestScore = 0;
var playGame = false; // give a signal to start the game 
var gameId = null;
// call on evey game start


function webLoad() {
    onLoad();
    displayContent();
}


// step 2 1. phase load the entire data 


function onLoad() {
    var temp = localStorage.getItem('highScoreGame');
    if (temp != null) {
        bestScore = temp;
    }
    else {
        bestScore = 0;
    }
};


// step 2 2. Reflect the actual value in the required html element using textContent 

function displayContent() {
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = time;
    maxScoreDisplay.textContent = bestScore;
}

// calling webLoad function 
webLoad();


// Random time generator implementaion
function randomTimeGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + max);
}


// generating a random number for index value of hole
function randomIndex() {
    var index = Math.floor(Math.random() * holes.length);
    return holes[index];
}

// pop game implementaion for image appear and disappear purpose 
function popImageGame() {
    var randomTime = randomTimeGenerator(500, 1000);
    var hole = randomIndex();
    var mole = hole.querySelector('.mole');

    if (playGame) {
        mole.classList.add('up');
        setTimeout(function () {
            mole.classList.remove('up');

            popImageGame();
        }, randomTime);
    }
}


// actual implementaion of start game function
function startGame() {
    score = 0;
    time = 30;
    startBtn.disabled = true;
    playGame = true;
    popImageGame(); // to get a random image in random box 

    // disable -> true which means button is disable 
    gameId = setInterval(function () {
        time--;
        if (time == 0) {
            endGame();
            // this method is used only to stop the setInterval at some condition
        }
        displayContent();
    }, 1000)
}

// EndGame implementaion

function endGame() {
    playGame = false;
    clearInterval(gameId);
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('highScoreGame', bestScore);
        alert(`You score higher than the previous game : ${score}`);
    }
    else {
        alert(`You score higher than the previous game : ${score}`)
    }
    score = 0;
    displayContent();
    startBtn.disabled = false;
}

function bonk(event) {
    if (playGame == false) return;
    if (event.target.classList.contains('up')) {
        score++;
        event.target.classList.remove('up');
        event.target.classList.remove('bonked');
    }
    setTimeout(function () {
        event.target.classList.remove('bonked');
    }, 300);
    displayContent();
}


// addEventListner part 
startBtn.addEventListener('click', startGame);
// this is just a normal loop use to apply the add event listner in each mole class
moles.forEach((box) => {
    box.addEventListener('click', bonk);
});