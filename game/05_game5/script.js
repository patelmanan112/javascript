
// DOM Elements
const textDisplay = document.querySelector('#textDisplay');
const typingArea = document.querySelector('#typingArea');
const timerDisplay = document.querySelector('#timer');
const wpmDisplay = document.querySelector('#wpm');
const accuracyDisplay = document.querySelector('#accuracy');
const bestWPMDisplay = document.querySelector('#bestWPM');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');

// Test texts 
const testTexts = [
    "The quick brown fox jumps over the lazy dog. Practice makes perfect when learning to type faster.",
    "Technology has revolutionized the way we communicate and work in the modern digital era.",
    "Typing speed is an essential skill for anyone working with computers in today's workplace."
];

// Game state
let currentText = '';
let timeLeft = 60;
let timerInterval = null;
let startTime = null;
let isTestActive = false;
let bestWPM = 0;
let wpm = 0;


function webLoad() {
    onLoad();
    displayContent();
}




function onLoad() {
    var temp = sessionStorage.getItem('getHighwpm');
    if (temp != null) {
        bestWPM = parseInt(temp);

    }
    else {
        bestWPM = 0;
    }
}



function displayContent() {
    timerDisplay.textContent = timeLeft;
    bestWPMDisplay.textContent = bestWPM;
}
webLoad();



function startGame() {
    startBtn.disabled = true;
    timeLeft = 60;
    currentText = testTexts[Math.floor(Math.random() * testTexts.length)];  // yaha par koi bhi random text display hota haii 
    textDisplay.textContent = currentText;
    typingArea.disabled = false;
    textDisplay.style.userSelect = "none";
    typingArea.value = "";
    typingArea.setAttribute('placeholder', 'Now the input box is enabled, use it to write something...')

    timerInterval = setInterval(function () {
        timeLeft--;

        if (timeLeft <= 0) {
            endGame();
        }
        displayContent();


      
    }, 1000)
}


function newLine() {
       currentText += testTexts[Math.floor(Math.random() * testTexts.length)];
            textDisplay.innerHTML = currentText;
        
    
}



function endGame() {
    clearInterval(timerInterval);
    timeLeft = 60;
    startBtn.disabled = false;
    typingArea.disabled = true;
    if (wpm > bestWPM) {
        bestWPM = wpm;
        sessionStorage.setItem('getHighWpm', bestWPM);
        alert(`score  high score than the previous one`);

    }
    else {
        wpmDisplay.textContent = wpm;
        alert(`scored is : ${wpm}`);
        wpm = 0;
    }



    typingArea.value = "";
    displayContent();
}



function updateStatus() {
    var typed = typingArea.value;
      if(currentText.length === typed.length){
        newLine();
    }
    const minute = Math.floor(Date.now() - startTime) / 1000 / 60;
    const word = typed.trim().split(/\s+/).filter(w => w.length > 0);
    console.log(word);
    console.log(minute);
    wpm = (minute > 0) ? Math.floor(word.length / minute) : 0;
    wpmDisplay.textContent = wpm;
  

    var currentScore = 0;
    for (var i = 0; i < currentText.length; i++) {
        if (currentText[i] === typed[i]) {
            currentScore++;
        }
    }
    const accuracy = (typed.length > 0) ? Math.floor(currentScore / typed.length * 100) : 0;
    accuracyDisplay.textContent = accuracy;
}


var typed = '';
function HighLight() {
    var typed = typingArea.value;
    var highText = '';
    for (var i = 0; i < currentText.length; i++) {
        if (i < typed.length) {
            if (currentText[i] === typed[i]) {
                highText += `<span class = "correct">${currentText[i]}</span>`;
            }
            else {
                highText += `<span class = "incorrect">${currentText[i]}</span>`;
            }
        }
        else {
            highText += currentText[i];
        }
    }
    textDisplay.innerHTML = highText;
}



function typeControl() {
    if (startTime == null) {
        startTime = Date.now();
    }
    console.log(startTime);
    updateStatus();
    HighLight();
}





startBtn.addEventListener('click', startGame);
typingArea.addEventListener('input', typeControl);